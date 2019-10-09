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

	//  make it object and put it in an array

	var obj ={
		user:getUser,
		pwd:getPass
	};

	if(window.localStorage.getItem('userObj') == null){
		var inputArr =[];
	}else{
		var inputArr =JSON.parse(window.localStorage.getItem('userObj'));
    }

	inputArr.push(obj)

	// using json change object to. json format string

	var JSONObj = JSON.stringify(inputArr);
	console.log(JSONObj);
    window.localStorage.setItem('userObj', JSONObj);
    alert('You are registered!');

	window.location.href ="login.html";

}