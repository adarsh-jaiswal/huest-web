var mainApp = angular.module("mainApp", ["firebase"]);
         mainApp.factory("Auth", ["$firebaseAuth",
          function($firebaseAuth) {
           var ref = new Firebase("https://shop-together.firebaseio.com/");
           return $firebaseAuth(ref);
  }
]);
         mainApp.controller("hostController",["$scope", "Auth", 
            function($scope,Auth) {
           
         $scope.host= {};
         $scope.saveUser = function(userInfo) {
             if($scope.registration.$valid) {
                   $scope.host = angular.copy(userInfo);
                 sessionStorage.setItem("username",$scope.host.email);
                   var encodedEmail = $scope.host.email.replace(/[.]/g , ",");
               var ref = new Firebase("https://shop-together.firebaseio.com/");
                    $scope.message = null;
                    $scope.error = null;

                    Auth.$createUser({
                        email: $scope.host.email,
                        password: $scope.host.password
                      }).then(function(userData) {
                        $scope.message = "User created with uid: " + userData.uid;
                          var hostRef=ref.child("HOSTS").child(encodedEmail);
                            hostRef.set({

                                    firstName : $scope.host.firstName,
                                    lastname : $scope.host.lastName,
                                    mobileno : $scope.host.phoneNumber,
                                    address: $scope.host.address,
                                    pincode: $scope.host.pin,
                                    city: $scope.host.city,
                                    state: $scope.host.state
                
                                });
                     var userRef=ref.child("USERS").child(encodedEmail); 
            userRef.set("HOSTS");
           
            sessionStorage.setItem("username",$scope.host.email);   //when a new user registers and clicks continue button email should be stored. 
             window.open('facility_page.html','_self',false);
            

                      }).catch(function(error) {
                        $scope.error = error;
                        alert($scope.error);
                        console.log($scope.error);
                      });
                
                   console.log($scope.host);
       
   
        }else{console.log("error");}
         };
      } 
            ]);

// and use it in our controller
/*app.controller("SampleCtrl", ["$scope", "Auth",
  function($scope, Auth) {
    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error = error;
      });
    };

  }
]);
      */  