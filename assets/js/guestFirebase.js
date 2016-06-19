var myDataRef =new Firebase('https://shop-together.firebaseio.com/');
function guestConnectToFirebase()
{   
    var uemail=document.getElementById("email").value;
	var upassword=document.getElementById("password").value;
	var ufName=document.getElementById("fname").value;
	var ulName=document.getElementById("lname").value;
	var umobileNo=document.getElementById("mobile").value; 
	var ugender;
    var umale=document.getElementById("male");
    var ufmale=document.getElementById("female");
    if(male.checked==true)
        {
          ugender=male.value;            
        }
    else if(female.checked==true){
       ugender=female.value;
        
    }
    
	var uoccupation=document.getElementById("occupation").value;
	var uaddress=document.getElementById("address").value;
	var upin=document.getElementById("pin").value;
	var ucity=document.getElementById("city").value;
	var ustate=document.getElementById("state").value;
	
    var encodedEmail = uemail.replace(/[.]/g , ",");
	
    console.log(encodedEmail);
	
    myDataRef.createUser({
	email: uemail,
	password: upassword
	},
	function(error,userData)
	{ 
		if(error)
		{
			console.log("error",error);
		}
		else
		{
			console.log("success");
			var guestRef=myDataRef.child("GUESTS").child(encodedEmail);
			guestRef.set({
				
					firstName : ufName,
					lastName : ulName,
					mobileno : umobileNo,
					gender : ugender,
					occupation: uoccupation,
					address: uaddress,
					pincode: upin,
					city: ucity,
					state: ustate
					
				
			});
           var userRef=myDataRef.child("USERS").child(encodedEmail); 
            userRef.set("GUESTS");
            
            sessionStorage.setItem("username",uemail);   //when a new user registers and clicks continue button email should be stored. 
             window.open('login.html','_self',false);
            
		}
	});
    
 }