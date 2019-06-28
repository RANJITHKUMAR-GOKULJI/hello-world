// javascript file
function color_box(){
	alert("red");
}

function titlename(){
	alert("title");
}
//titlename();

function color_unset(box_id){
	var x = document.getElementById("box" + box_id);
	x.style.background = "white";
	//alert("Unset");
}

function color_reset(color_name, box_id){
	var x = document.getElementById("box" + box_id);
	x.style.background = color_name;
	//alert("set " + color_name);
}

function color_set(color_name){
			var s = 1;	
			for(var j=1;j<9;j++){
				var p = document.getElementById("box" + j);
				var k = p.style.background;
				if(k == color_name){
					s=2;
					color_unset(j);					
					j=9;
				}
			}
			if(s == 1){
				for(var i=1;i<9;i++){
				var x = document.getElementById("box" + i);
				var y = x.style.background;
					if(y == "white"){
						color_reset(color_name, i);
						i=9;						
					}
				}
			}
}


function checkboxing(){
	alert("red");
}
