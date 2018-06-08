var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.classList.add('del');
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + '&nbsp;';
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = '';
	// listen event delete button
	deleteLi();
}

function addListAfterClick() {	
	if (inputLength()) {
		createListElement();

	}
}

function addListAfterKeypress(event) {	
	if (inputLength() && event.keyCode === 13) {
		createListElement();
	}
}

function deleteLi() {
	// listen event delete button
	var deleteBtn = document.getElementsByClassName('del');
	for(let j=0; j<deleteBtn.length; j++) {
		let delBtn = deleteBtn[j];		
		delBtn.addEventListener('click', function(event) {	
			delBtn.parentElement.remove();
		});
	}
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
// Toggle class .done when click li
for (let i=0; i<li.length; i++) {
	let myLi = li[i];
	myLi.addEventListener('click', function(event) {
		myLi.classList.toggle("done");
	});
}

deleteLi();