var mainApp = angular.module("mainApp", ["firebase"]);
         mainApp.factory("Auth", ["$firebaseAuth",
          function($firebaseAuth) {
           var ref = new Firebase("https://shop-together.firebaseio.com/");
           return $firebaseAuth(ref);
  }
]);
         mainApp.controller("guestController",["$scope", "Auth", 
            function($scope,Auth) {
           
         $scope.guest= {};
         $scope.saveUser = function(userInfo) {
             if($scope.registration.$valid) {
                   $scope.guest = angular.copy(userInfo);
                   sessionStorage.setItem("username",$scope.guest.email);
                   var encodedEmail = $scope.guest.email.replace(/[.]/g , ",");
               var ref = new Firebase("https://shop-together.firebaseio.com/");
                    $scope.message = null;
                    $scope.error = null;

                    Auth.$createUser({
                        email: $scope.guest.email,
                        password: $scope.guest.password
                      }).then(function(userData) {
                        $scope.message = "User created with uid: " + userData.uid;
                          var guestRef=ref.child("GUESTS").child(encodedEmail);
                            guestRef.set({

                                    firstName : $scope.guest.firstName,
                                    lastname : $scope.guest.lastName,
                                    gender : $scope.guest.gender,
                                    occupation : $scope.guest.occupation,
                                    mobileno : $scope.guest.phoneNumber,
                                    address: $scope.guest.address,
                                    pincode: $scope.guest.pin,
                                    city: $scope.guest.city,
                                    state: $scope.guest.state
                
                                });
                     var userRef=ref.child("USERS").child(encodedEmail); 
            userRef.set("GUESTS");
           
            sessionStorage.setItem("username",$scope.guest.email);   //when a new user registers and clicks continue button email should be stored. 
             window.open('facility_page.html','_self',false);
            

                      }).catch(function(error) {
                        $scope.error = error;
                        alert($scope.error);
                        console.log($scope.error);
                      });
                
                   console.log($scope.guest);
       
   
        }else{console.log("error");}
         };
      } 
            ]);
