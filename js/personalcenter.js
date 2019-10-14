
var txtName = document.getElementById('currentName');
var currentName =window.localStorage.getItem('currentUser');
txtName.innerHTML = currentName


var currentUser = window.localStorage.getItem('currentUser');

if (currentUser == null){
	window.location = "login.html";
}




