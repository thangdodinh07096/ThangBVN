var div = document.getElementsByTagName("div");

document.getElementsByClassName("tab1")[0].addEventListener("click", function(){
	for (var i = 0; i < div.length; i++) {
		div[0].style.display = "block";
		div[1].style.display = "none";
		div[2].style.display = "none";
	}
});
document.getElementsByClassName("tab2")[0].addEventListener("click", function(){
	for (var i = 0; i < div.length; i++) {
		div[0].style.display = "none";
		div[1].style.display = "block";
		div[2].style.display = "none";
	}
});document.getElementsByClassName("tab3")[0].addEventListener("click", function(){
	for (var i = 0; i < div.length; i++) {
		div[0].style.display = "none";
		div[1].style.display = "none";
		div[2].style.display = "block";
	}
});