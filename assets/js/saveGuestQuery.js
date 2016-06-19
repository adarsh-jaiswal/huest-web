
function saveQuery(){
var cityS= document.getElementById("city").value;
        localStorage.city=cityS;      //stroing the value of city
var chkAcco= document.getElementById("accommodation");
    localStorage.accommodation="false";
    if(chkAcco.checked==true)
    {
        localStorage.accommodation=chkAcco.value;
    }
 var chkFood=document.getElementById("food");
    localStorage.food="false";
   if(chkFood.checked==true)
    {
         localStorage.food=chkFood.value;
    }
    
    
        window.open('searchedHost.html','_self',false);

}