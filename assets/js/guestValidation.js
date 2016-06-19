
     function passid_validation(passid,mx,my)  
    {  
    var passid_len = passid.length;  
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
    {  
    alert("Password should not be empty / length be between "+mx+" to "+my);  
    return false;  
    }  
    return true;  
    }  


	function allLetter(uname)  
	{   console.log(uname);
	 var letters =/^([a-zA-Z0-9 _-]+)$/;  
		if(uname.match(letters))  
		{  
		return true;  
		}  
		else  
		{  
		alert('Username must have alphabet characters only');  
		return false;  
		}  
	}  

   /* //address
    function alphanumeric(uadd)  
    {   
    var letters = /^[0-9a-zA-Z]+$/;  
    if(uadd.match(letters))  
    {  
    return true;  
    }  
    else  
    {  
    alert('User address must have alphanumeric characters only');  
    return false;  
    }  
    }  */

   

    //zip code
    function allnumeric(uzip)  
    {   
    var numbers = /^[0-9]+$/;  
    if(uzip.match(numbers))  
    {  
    return true;  
    }  
    else  
    {  
    alert('ZIP code must have numeric characters only');  
    return false;  
    }  
    }  

    //email
    function validateEmail(uemail)  
        {  
			var mailFormat =/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;  
            if(uemail.match(mailFormat))  
                {  
                    return true;  
                }  
            else  
                {  
                    alert("You have entered an invalid email address!");  
                    return false;  
                }  
        }  

    //phone
    function phoneNumber(uphone)  
    {  
      var phoneno = /^\d{10}$/;  
      if(uphone.match(phoneno))  
            {  
          return true;  
            }  
          else  
            {  
            alert("wrong phone number");  
            return false;  
            }  
    }  
function formValidation() 
{
	console.log("heloooo");
	var uemail = document.getElementById("email").value;
	var upassword = document.getElementById("password").value;
	var ufName = document.getElementById("fname").value;
	var ulName = document.getElementById("lname").value;
	var umobileNo = document.getElementById("mobile").value; 
	
	var uoccupation = document.getElementById("occupation").value;
	var uaddress = document.getElementById("address").value;
	var upin = document.getElementById("pin").value;
	var ucity = document.getElementById("city").value;
	var ustate = document.getElementById("state").value;

	if (validateEmail(uemail))  
	{  
		if (passid_validation(upassword, 5, 12))  
		{  
			if (allLetter(ufName)) {  
                      
				if (allLetter(ulName))  
				{  
					if(phoneNumber(umobileNo))  
					{   
						if(allLetter(uaddress))  
						{  
							if(allnumeric(upin))  
							{  
								if (allLetter(ucity))
								{
									if (allLetter(ustate))
									{
										guestConnectToFirebase();

									}


								}  
							}   
						}  
					}   
				}  
			}  
		}  
		return false;  
	}
}
