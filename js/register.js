var oText = document.getElementById('userName');


oText.onkeyup = function(){
    var inputUser =oText.value;
    var userRegex = /^.*(?=.{8,30})(?=.*[a-zA-Z])(?=.*\d)(?=.*[_]).*$/;
    var validUserName = userRegex.test(getUser);
        if (validUserName == false) {
            alert("You have entered a bad username");
        return;
}else{
        console.log('the input is correct');    
        oText.nextElementSibling.innerHTML ='√';
        oText.nextElementSibling.style.color ='green';
    
}




var registerBtn = document.getElementById('nextBtn');
registerBtn.onclick	= function(){
	// alert(1);
	var userBox = document.getElementById('userName');
	var passBox = document.getElementById('passWord');


	var getUser = userBox.value;
	var getPass = passBox.value;

    var userRegex = /^.*(?=.{6,30})(?=.*[a-zA-Z])(?=.*\d)(?=.*[_]).*$/;
    var validUserName = passwordRegex.test(getPass);
    console.log(validUserName);

    var passwordRegex = /^.*(?=.{6,20})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? \"]).*$/;
    var validPassword = passwordRegex.test(getPass);
    console.log(validPassword);




 

	//  make it object and put it in an array


	var obj ={
		user:getUser,
		pwd:getPass
	};

	if(window.localStorage.getItem('userObj_020a') == null){
		var inputArr =[];
	}else{
		var inputArr =JSON.parse(window.localStorage.getItem('userObj_020a'));
    }

    var userExists =false;
    for (var i = 0;  i<inputArr.length; i++){
    	if (inputArr[i].user === getUser) {
    		userExists = true;
    	}
    }
 
    if (userExists == true) {
        alert('User name'+' ' + getUser + ' '+ 'already exist.');
    } else{
    	inputArr.push(obj);
    	var JSONObj = JSON.stringify(inputArr);
		console.log(JSONObj);
    	window.localStorage.setItem('userObj_020a', JSONObj);
    	alert('You are registered!');
    	window.location.href ="login.html";

    }
}



// 	