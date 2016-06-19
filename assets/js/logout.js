function logOut(){
	var ref = new Firebase("https://shop-together.firebaseio.com/");
ref.unauth;
sessionStorage.setItem("username",null);
	var user=sessionStorage.getItem("username");
	console.log("logging out"+user);
window.open('index.html','_self',false);
}