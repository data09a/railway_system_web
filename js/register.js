var objUser = document.getElementById('userName');

objUser.onkeyup = function(){
    var inputUser =objUser.value;
    var regulation =/^[A-z]{4}[0-9]{4}$/;
    if (inputUser.match(regulation) == null){
        console.log('false');
        objUser.nextElementSibling.innerHTML ='*use 4 letter + 4 number';
        objUser.nextElementSibling.style.color ='red';

    }else{
        console.log('true');    
        objUser.nextElementSibling.innerHTML ='√';
        objUser.nextElementSibling.style.color ='green';    		

    }
}

function userMatch(inputUser){
    var regulation =/^[A-z]{4}[0-9]{4}$/;
    return inputUser.match(regulation);
}


var objPassword = document.getElementById('passWord');

objPassword.onkeyup = function(){
    var inputPassword = objPassword.value;    
    var regulation=/^[A-z]{4}[0-9]{4}$/;
    if(inputPassword.match(regulation) == null){
       console.log('false');
       objPassword.nextElementSibling.innerHTML ='* use 4 letter + 4 number';
       objPassword.nextElementSibling.style.color ='red';

    }else{
        console.log('true');
        objPassword.nextElementSibling.innerHTML ='√';
        objPassword.nextElementSibling.style.color ='green';

    }        
}

function passMatch(inputPassword){
    var regulation =/^[A-z]{4}[0-9]{4}$/;
    return inputPassword.match(regulation);
}


// var objPassword = document.getElementById('passWord');
var objConfirm  = document.getElementById('confirmPassword');
objConfirm.onkeyup = function(){
    var inputPassword = objPassword.value; 
    var inputConfirm = objConfirm.value;
    if(inputConfirm == inputPassword){
        console.log('true');
        objConfirm.nextElementSibling.innerHTML ='√';
        objConfirm.nextElementSibling.style.color='green';
    }else{
        console.log('false');
        objConfirm.nextElementSibling.innerHTML ='*password does not match';
        objConfirm.nextElementSibling.style.color ='red';
    }
}

function confirmMatch(inputPassword, inputConfirm){
    return inputPassword == inputConfirm;
      
}




var registerBtn = document.getElementById('nextBtn');
registerBtn.onclick	= function(){
	// alert(1);
	var userBox = document.getElementById('userName');
	var passBox = document.getElementById('passWord');
    var confirmBox = document.getElementById('confirmPassword');


	var getUser = userBox.value;
	var getPass = passBox.value;
    var getConfirm = confirmBox.value;


if (userMatch(getUser) == null){
    alert('Username is invalid');
    return;
}

if(passMatch(getPass) == null){
    alert('Password is invalid');
    return;
}

if(confirmMatch(getPass, getConfirm) == false){
    alert('Password does not match');
    return;
}




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
    if (inputArr[i].user === getUser){
    	userExists = true;
    }
}
 
    if (userExists == true){
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



