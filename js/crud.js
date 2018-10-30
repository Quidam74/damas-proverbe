function initCrud(){
	initCreate()
	read()

}

function initCreate(){

	document.querySelector(".inputZone-button").addEventListener("click", function(){
		create()

	})
}
function create(){
	var text  = document.querySelector(".inputZone-textarea").value
	console.log(text)

	fetch("service.php?action=add&value="+text, {
		credentials: "same-origin",

	})
	.then(response => {
		console.log(response)
		return response.json()
	})
	.then(proverbe => {
		console.log(proverbe)
		read()
	})
	
}

function read(){
	fetch("service.php?action=list", {
		credentials: "same-origin",

	})
	.then(response => {
		return response.json()
	})
	.then(proverbs => {
		var zonneInser = document.querySelector(".proverbe")
		zonneInser.innerHTML =""
		
		for (var i = proverbs.length - 1; i >= 0; i--) {
			var elem ="<article data-id='"+proverbs[i].id+"' class='proverbe-item'>"+proverbs[i].value+"</article>";
			zonneInser.innerHTML = elem +zonneInser.innerHTML;
			
		}
		
		initDelete()
	})



}

function initDelete(){
	var allProverbe = document.querySelectorAll(".proverbe-item")
	var zoneInser = document.querySelector(".proverbe-deleteZone .contain")
	var mark ="<i class='fas fa-times'></i>"
	var element =""
	zoneInser.innerHTML =""
	allProverbe.forEach(function(elem)
	{
		element ="<div data-id='"+elem.dataset.id+"' class='proverbe-deleteZone-icon'>"+mark+"</div>"
		zoneInser.innerHTML = element +zoneInser.innerHTML
		
	})

	var deleteButton = document.querySelectorAll(".proverbe-deleteZone-icon")

	deleteButton.forEach(function(button){
		button.addEventListener("click", function(item){
			deletee(item)
		})
		button.addEventListener("mouseover", function(item){
			hoverEffecteOn(item,allProverbe)
		})
		button.addEventListener("mouseout", function(item){
			hoverEffecteOff(item,allProverbe)
		})

	})
	
}

function deletee(elem){
	fetch("service.php?action=delete&id="+elem.currentTarget.dataset.id, {
		credentials: "same-origin",

	})
	.then(response => {
		console.log(response)
		return response.json()
	})
	.then(proverbs => {
		console.log("a")
		read()
	})

	
	

}

function hoverEffecteOn(elem,allProverbe){
	allProverbe.forEach(function(item,index){
		if(elem.currentTarget.dataset.id == item.dataset.id)
			{
				item.classList.add("willBeDelete")
			}
	})
	

}
function hoverEffecteOff(elem,allProverbe){
	allProverbe.forEach(function(item){
		if(elem.currentTarget.dataset.id == item.dataset.id)
			item.classList.remove("willBeDelete")
	})
	

}