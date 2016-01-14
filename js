var fireIncidents= angular.module("dailyFire",[]);

fireIncidents.controller('homeController', ['$scope', '$http', "$interval", function($scope, $http, $interval){
    $http.get("http://quickstats.nass.usda.gov/api/api_GET/?key=A7B415C5-297E-3D84-B583-B8556AD66E45 &commodity_desc=CORN&year__GE=2012&state_alpha=VA&format=JSON ")

    .success(function(outcome)
             {
    $scope.names=[]; 
    $scope.companies=[];    
        console.log("got it");
            for(var i=0; i<outcome.data.length; i++)
            {
            $scope.names.push(outcome.data[i][9]);
            $scope.companies.push(outcome.data[i][13]);
            }
    })
//    function($scope, $interval)
//{
//    
//}
    .error(function(data, status)
             {
        console.log("failed");
    });
}]);
    
