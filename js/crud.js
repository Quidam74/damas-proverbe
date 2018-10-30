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
	console.log(document.querySelector(".inputZone-textarea").innerHTML)

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
		
		
		for (var i = proverbs.length - 1; i >= 0; i--) {
			var elem ="<article class='proverbe-item'>"+proverbs[i].value+"</article>";
			zonneInser.innerHTML +=elem;
			
		}
		
		console.log(proverbs);
	})



}