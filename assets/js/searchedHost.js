var encodeEmail=sessionStorage.getItem("username");

var city=localStorage.city;

var food=localStorage.food;
var accommodation=localStorage.accommodation;
console.log(city);
console.log(food);
console.log(accommodation);

var hostRef=new Firebase("https://shop-together.firebaseio.com/").child("HOSTS");
var	R3newhtmlcode;










hostRef.on("value", function(snapshot) {
	snapshot.forEach(function(childSnapshot) {
		var key = childSnapshot.key();
        
        var tablearea = document.getElementById('tablearea');
        var table = document.createElement('table');
        table.border='1';
        var link="displaySelectedHost.html";       
		var code='<a href="%data1%" data-value="%data2%" >%data3%</a><br>%data4%<br>';
		var htmlcode=code.replace("%data1%",link);
        var childData = childSnapshot.val();
        var fCity=childData.city;
        
        if(fCity==city){
            console.log("inside");
            
		var R1htmlcode=htmlcode.replace("%data2%",key); //replacing with the individual emails of host <---------------------------------
		
            var R2newhtmlcode=R1htmlcode.replace("%data3%",childData.firstName+" "+childData.lastname);
            
	
            var hostAcco=new Firebase("https://shop-together.firebaseio.com/").child("HOSTS_Accommodation").child(key);
		
        var acc=childData.accommodation;
        var foo=childData.food;
		if(accommodation=="true"){
            if(acc=="true"){
            console.log("inside acc");

		hostAcco.on("value",function(snapshot){
			var description=snapshot.child("descriptionOfPlace").val();
			R3newhtmlcode=R2newhtmlcode.replace("%data4%",description);
            
    var tr = document.createElement('tr');

    tr.appendChild(document.createTextNode(R3newhtmlcode)  );
    

   // tr.cells[0].appendChild( R3newhtmlcode );
    
    table.appendChild(tr);
    tablearea.appendChild(table);
			//$(test).append(R3newhtmlcode);
		});
		
	   }
    }
            if(food=="true"){
                if(foo=="true"){
                     console.log("inside food");
           
		var hostFoo=new Firebase("https://shop-together.firebaseio.com/").child("HOSTS_Food").child(key);

		hostFoo.on("value",function(snapshot){
           	var descriptionFood=snapshot.child("description").val();
			R3newhtmlcode=R2newhtmlcode.replace("%data4%",descriptionFood);
            var tr = document.createElement('tr');

    tr.appendChild(document.createTextNode(R3newhtmlcode)  );

   
    
    table.appendChild(tr);
    tablearea.appendChild(table);
			//$(test).append(R3newhtmlcode);
		});
		
	    }
        }
    }
 });
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});

