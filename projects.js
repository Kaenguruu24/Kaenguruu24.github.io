document.getElementById('toggle-view').addEventListener('click', function () {
	document.getElementById('project1').classList.toggle('resized');
	document.getElementById('project1-buttons').classList.toggle('resized');
	if (document.getElementById('project1').classList.contains('resized')) { document.getElementById('toggle-view').textContent = "Less"; }
	else { document.getElementById('toggle-view').textContent = "More"; }
	document.write("Hello World");
	console.log("HEY HO");
});