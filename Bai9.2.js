var input = document.getElementsByTagName("input");

document.getElementsByClassName("check")[0].addEventListener("click", function(){
	for (var i = 0; i < input.length; i++) {
		input[i].checked=true;
	}
});

document.getElementsByClassName("uncheck")[0].addEventListener("click", function(){
	for (var i = 0; i < input.length; i++) {
		input[i].checked=false;
	}
});

function change(color){
	var text = document.getElementsByClassName("p8");
	for (var i = 0; i < text.length; i++) {
		text[i].style.backgroundColor = "green";
	}		
}
function reset(){
	var text = document.getElementsByClassName("p8");
	for (var i = 0; i < text.length; i++) {
		text[i].style.backgroundColor = "white";
	}	
}