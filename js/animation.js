

function initAnim(){
	document.querySelector(".proverbe-showInputZone").addEventListener("click", function(elem){
		displayInput()
	} );
	document.querySelector(".proverbe-showDeleteZone").addEventListener("click", function(elem){
		displayDelete()
	} );

}



function displayInput(){
	var panel = document.querySelector(".proverbe-inputZone")
	var button =document.querySelector(".proverbe-showInputZone")
	if(panel.classList.contains("hide"))
	{
		panel.classList.remove("hide")
		button.classList.add("proverbe-showInputZone-active")
		setTimeout(function() {
			panel.classList.add("proverbe-inputZone-active")
		}, 10);
	}
	else
	{
		panel.classList.remove("proverbe-inputZone-active")
		button.classList.remove("proverbe-showInputZone-active")
		setTimeout(function() {
			panel.classList.add("hide")	
		}, 600);
	}

}

function displayDelete(){
	var panel = document.querySelector(".proverbe-deleteZone")
	var button =document.querySelector(".proverbe-showDeleteZone")
	if(panel.classList.contains("hide"))
	{
		panel.classList.remove("hide")
		button.classList.add("proverbe-showDeleteZone-active")
		setTimeout(function() {
			panel.classList.add("proverbe-deleteZone-active")
		}, 10);
	}
	else
	{
		panel.classList.remove("proverbe-deleteZone-active")
		button.classList.remove("proverbe-showDeleteZone-active")
		setTimeout(function() {
			panel.classList.add("hide")	
		}, 600);
	}

}