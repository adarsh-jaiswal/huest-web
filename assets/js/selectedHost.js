var encodeEmail=sessionStorage.getItem("username");
function selected_Host(){
    
    var clicked_host=document.getElementById("hidden").value;//is this working coz all the fields have id ="hidden"?
    localStorage.selected_host=clicked_host;
}