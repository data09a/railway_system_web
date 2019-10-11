	var oText = document.getElementById('userName');
		// oText.onkeydown = function(){
  //            console.log('I enter a key');
  //        }

         oText.onkeyup = function(){
         	var inputUser =oText.value;
         	var reg =/^[0-9]{4}[A-z]{4}$/;
         	if (inputUser.match(reg) == null){
         		console.log('It does not match the requirements');
         		oText.nextElementSibling.innerHTML ='Please use 4 number&4 letter';
         		oText.nextElementSibling.style.color ="red";

         	}else{
         		console.log('the input is correct');    
         		oText.nextElementSibling.innerHTML ='√';
         		oText.nextElementSibling.style.color ='green';    		

         	}
         }




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