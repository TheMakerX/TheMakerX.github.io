	window.alert("This is a guide on how to cook a burger.")

document.getElementById("defaultOpen").click();

function openTab(tabName, elmt){
//This javascript goes along with my How To project

function openTab(tabName,elmt){
	var i, tabcontent;
	//Hide elements with class="tabcontent"
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < 3; i++) {
		tabcontent[i].style.display = "none";
	}
	
	// Show the clicked tabName
	document.getElementById(tabName).style.display = "block";
	

}
document.getElementById("defaultOpen").click();
