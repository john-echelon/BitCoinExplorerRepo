(function () {
    angular.module("bitCoinExplorer")
    .factory("bitCoinService", ["$http", "$q", function ($http, $q) {
        
        var getBitCoinData = function () {
            
            var deferred = $q.defer();
                
              
            $http.get('http://127.0.0.1:12505/api/bitCoin/browse').then(function (response) {
                deferred.resolve(response.data);
            }, function (err, status) {
                deferred.reject(err.data);
            });
            
            return deferred.promise;
        };
                
        var init = function () {
            //appSettings = appSettingsService.getAppSettings();
        }

        init();

        return {
            getBitCoinData: getBitCoinData    
        };
    }]);
}());

