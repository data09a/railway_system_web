// alert(1);

var saveUser = window.localStorage.getItem('acc');
var savePass = window.localStorage.getItem('pass');
console.log(saveUser);


var loginButton = document.getElementById('login-btn');

loginButton.onclick = function(){
	// alert(1);

	var loginUser = document.getElementById('account-name');
	var loginPassword = document.getElementById('user-password');

	var inputUser = loginUser.value;
	var inputPassword = loginPassword.value;

	console.log(inputUser);
	console.log(inputPassword);


	var saveObj = window.localStorage.getItem('userObj');
	var saveJSONObj =JSON.parse(saveObj);
	console.log(saveJSONObj);


	if(inputUser==saveJSONObj.user&&inputPassword==saveJSONObj.pwd){
		alert('It is correct');
		window.location.href="personalcenter.html";
	}else{
		alert('username or password is incorrect!');
	}

}


