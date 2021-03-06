angular.module('networkApp')
.service('Switch', ['$http',function($http){
  this.index = function(callback){
    $http.get('/switches').success(function(switches){
      callback(switches);
    });
  };
  this.create = function(newSwitch, callback){
    $http.post('/switches', newSwitch).success(function(switches){
      callback(switches);
    });
  };
  this.show = function(switchId,callback){
    $http.get('/switches/' + switchId).success(function(switchData){
      callback(switchData);
    });
  };
  this.remove = function(switchId,callback){
    $http.delete('/switches/' + switchId).success(function(){
      callback();
    });
  };
  this.update = function(switchId,switchInfo,callback){
    $http.patch('/switches/' + switchId, switchInfo).success(function(switchData){
      callback(switchData);
    })
  }
}]);
