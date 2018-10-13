// 4 ways to select first p

var selections = [];

selections.push(document.getElementById('first'));
selections.push(document.getElementsByClassName("special")[0]);
selections.push(document.getElementsByTagName('p')[0]);
selections.push(document.querySelector('#first'));
selections.push(document.querySelectorAll('#first')[0]);
selections.push(document.querySelectorAll('.special')[0]);

selections.forEach(function(element)
{
	console.log(element);
});