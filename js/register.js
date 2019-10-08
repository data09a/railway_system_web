var registerBtn = document.getElementById('nextBtn');
registerBtn.onclick	= function(){
	// alert(1);
	var userBox = document.getElementById('userName');
	var passBox = document.getElementById('passWord');


	var getUser = userBox.value;
	var getPass = passBox.value;

 //    // permanent storage
	// window.localStorage.setItem('acc',getUser);
	// window.localStorage.setItem('pass', getPass);

     //temporary storage
	// window.sessionStorage.setItem('acc', getUser);
	// window.sessionStorage.setItem('pass', getPass);

	//object

	var obj ={
		user: getUser,
		pwd: getPass
	};


	// using json change object to. json format string

	var JSONObj = JSON.stringify(obj);
	console.log(JSONObj);
    window.localStorage.setItem('userObj', JSONObj);
    alert('You are registered!');

	window.location.href ="login.html";

}