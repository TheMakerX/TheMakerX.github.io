window.alert("This is a guide on how to cook a burger.")

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
