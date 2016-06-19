var ref = new Firebase("https://shop-together.firebaseio.com/");
var userType=ref.child("USERS");
function loginTest(){
var uemail=document.getElementById("email").value;
var upassword=document.getElementById("password").value;
var encodedEmail = uemail.replace(/[.]/g , ",");
ref.authWithPassword({
  "email": uemail,
  "password": upassword
}, function(error, authData) {
  if (error) {
      alert("login failed");
    console.log("Login Failed!", error);
  } else {
	  sessionStorage.setItem("username",uemail);
	  userType.on("value", function(snapshot) {
		  var user=snapshot.child(encodedEmail).val();
          console.log(user);
		 if(user=="HOSTS")
			 window.open('facility_page.html','_self',false); 
          if(user=="GUESTS")
			 window.open('welcomeGuest.html','_self',false);
	  }, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
	  });
      console.log("Authenticated successfully with payload:", authData);
  }
});
}