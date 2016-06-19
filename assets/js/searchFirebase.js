var encodeEmail=sessionStorage.getItem("username");
var city=document.getElementById("city");
var hostRef=new Firebase("https://shop-together.firebaseio.com/").child("HOSTS");
function search(){
	//var city=document.getElementById("city").value;
	hostRef.on("value", function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var key = childSnapshot.key();
			console.log("key:"+key);
			
			var childData = childSnapshot.val();
			console.log("value:"+childData.firstName);
			document.write('<p>'+childData.firstName+'</p>');
			
		});
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	});
	
	
}