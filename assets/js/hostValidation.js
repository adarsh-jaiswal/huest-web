console.log("heloooo");
function validateEmail(uemail)  
        {  
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
            if(uemail.match(mailformat))  
                {  
                    return true;  
                }  
            else  
                {  
                    alert("You have entered an invalid email address!");  
                    uemail.focus();  
                    return false;  
                }  
        }  
 
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
    uzip.focus();  
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

function passid_validation(passid,mx,my)  
    {  
    var passid_len = passid.length;  
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
    {  
    alert("Password should not be empty / length be between "+mx+" to "+my);  
    passid.focus();  
    return false;  
    }  
    return true;  
    }  

function allLetter(uname)  
        {   
        var letters =/^[A-Za-z]+$/;  
        if(uname.match(letters))  
        {  
        return true;  
        }  
        else  
        {  
        alert(uname+ 'must have alphabet characters only');  
        uname.focus();  
        return false;  
        }  
        }  
 //address
    function alphanumeric(uadd)  
    {   
    var letters =/^[\w ]+$/;  
    if(uadd.match(letters))  
    {  
    return true;  
    }  
    else  
    {  
    alert('User address must have alphanumeric characters only');  
    uadd.focus();  
    return false;  
    }  
    }  



function hostFormValidation() 
 {
    var hemail = document.getElementById("email").value;
	var hpassword = document.getElementById("password").value;
	var hfName = document.getElementById("fname").value;
	var hlName=document.getElementById("lname").value;
	var hmobileNo=document.getElementById("mobile").value; 
	
    
	var haddress=document.getElementById("address").value;
	var hpin=document.getElementById("pin").value;
	var hcity=document.getElementById("city").value;
	var hstate = document.getElementById("state").value;
	var hAcc = document.getElementById("accommodation");
    var hFood = document.getElementById("food");
    
    if (validateEmail(hemail))  
        {  
            if (passid_validation(hpassword, 5, 12))  
                {  
                    if (allLetter(hfName)) {  
                         
                            if (allLetter(hlName))  
                                {  
                                if(phoneNumber(hmobileNo))  
                                        {   
                                            if(allLetter(haddress))  
                                                {  
                                                    if(allnumeric(hpin))  
                                                            {  
                                                                if (allLetter(hcity))
                                                                    {
                                                                        if (allLetter(hstate))
                                                                            {
                                                                                if(hAcc.checked==true || hFood.checked==true)
                                                                                     {
                                                                                         hostConnectToFirebase();
                                                                                     }
                                                                                else{
                                                                                    
                                                                                    alert("please tick atleast one of the facility")
                                                                                }
                                                                               
                                                                                
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
