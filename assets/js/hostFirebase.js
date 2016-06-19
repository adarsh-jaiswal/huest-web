var myDataRef = new Firebase('https://shop-together.firebaseio.com/');


function sendAccommodationToFirebase(email) {
    console.log("inside acco");
    var hfName = document.getElementById("fname").value;
	var hlName=document.getElementById("lname").value;
	var hmobileNo=document.getElementById("mobile").value; 
    var haddress=document.getElementById("address").value;
    var hcity=document.getElementById("city").value;
	var hstate = document.getElementById("state").value;
    
    var hSingle = document.getElementById("chkSingle");
    var singleRate= document.getElementById("singleRate").value;
    var chksingleTrial= document.getElementById("chkSingleTrial");
    var singleTrialRate=document.getElementById("singleTrialRate").value;
    
    var chksharingTrial= document.getElementById("chkSharingTrial");
    var sharingTrialRate=document.getElementById("sharingTrialRate").value;
    if(hSingle.checked==false){
        singleRate="false";
    }
    if(chksingleTrial.checked==false){
        singleTrialRate="false";
    }
    
    var hSharing = document.getElementById("chkSharing");
    var sharingRate= document.getElementById("sharingRate").value;
    if(hSharing.checked==false){
        sharingRate="false";
    }
    if(chksharingTrial.checked==false){
        sharingTrialRate="false";
    }
    
   
   
    
    var hLimits = document.getElementById("limits").value;
    var hDescription = document.getElementById("descriptionOfPlace").value;
   
	var accommodationRef=myDataRef.child("HOSTS_Accommodation").child(email);
	accommodationRef.set({
        firstName : hfName,
        lastname : hlName,
        mobileno : hmobileNo,
        address: haddress,
        city: hcity,
        state: hstate,
		single : singleRate,
        single_trial:singleTrialRate,
		sharing : sharingRate,
        sharing_trial:sharingTrialRate,
        limits: hLimits,
        descriptionOfPlace:hDescription
	});

}

function sendFoodToFirebase(email) {
    console.log("inside food");
    var hfName = document.getElementById("fname").value;
	var hlName=document.getElementById("lname").value;
	var hmobileNo=document.getElementById("mobile").value; 
    var haddress=document.getElementById("address").value;
    var hcity=document.getElementById("city").value;
	var hstate = document.getElementById("state").value;
    var veg="true";
    var nonVeg="true";
    var hVeg = document.getElementById("veg");
    if(hVeg.checked==false){
        veg="false";
    }
    
    var hVnNveg = document.getElementById("nVeg");
    if(hVnNveg.checked==false){
        nonVeg="false";
    }
   // var hPDCharge = document.getElementById("pdc").value;
    //var hPWCharge = document.getElementById("pwc").value;
    //var hPMCharge = document.getElementById("pmc").value; 
     var hLimitsFood = document.getElementById("limitsFood").value;
    var hDescriptionOfFood = document.getElementById("description").value;
    
	var foodRef=myDataRef.child("HOSTS_Food").child(email);
	foodRef.set({
         firstName : hfName,
        lastname : hlName,
        mobileno : hmobileNo,
        address: haddress,
        city: hcity,
        state: hstate,
		Veg : veg,
		Non_Veg : nonVeg,
		per_Day : "false",
		per_Week : "false",
		per_Month : "false",
        menu : "false",
        limits: hLimitsFood,
		description : hDescriptionOfFood
	});   
    }//node is created but values are not given.it will be given by user after registration.

function hostConnectToFirebase()
{   var accommodation,food;
    var hemail = document.getElementById("email").value;
	var hpassword = document.getElementById("password").value;
	var hfName = document.getElementById("fname").value;
	var hlName=document.getElementById("lname").value;
	var hmobileNo=document.getElementById("mobile").value; 
	var haddress=document.getElementById("address").value;
	var hpin=document.getElementById("pin").value;
	var hcity=document.getElementById("city").value;
	var hstate = document.getElementById("state").value;
	var encodedEmail = hemail.replace(/[.]/g , ",");
	
 var hAcc = document.getElementById("accommodation");
    if(hAcc.checked==true)
     {
         accommodation="true";
     }
    if(hAcc.checked==false){
        
        accommodation="false";
    }
     
 var hFood=document.getElementById("food");    
     if(hFood.checked==true)
     {
         food="true";
     }
     if(hFood.checked==false)
         {
           food="false";  
         }
 
 console.log(encodedEmail);
	myDataRef.createUser({
	email: hemail,
	password: hpassword
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
			var hostRef=myDataRef.child("HOSTS").child(encodedEmail);
			hostRef.set({
				
					firstName : hfName,
					lastname : hlName,
					mobileno : hmobileNo,
					address: haddress,
					pincode: hpin,
					city: hcity,
					state: hstate,
					accommodation: accommodation,
					food: food
                });
				if(hAcc.checked==true){
                    
					sendAccommodationToFirebase(encodedEmail);
				}
				if(hFood.checked==true){
					sendFoodToFirebase(encodedEmail);
				}
             
               var userRef=myDataRef.child("USERS").child(encodedEmail); 
            userRef.set("HOSTS");
           
            sessionStorage.setItem("registrationEmail",hemail);   //when a new user registers and clicks continue button email should be stored. 
             window.open('login.html','_self',false);
            
            
			}
    });
}