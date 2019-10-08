var objectBody =document.getElementById('myTbody');

	var traArr1 = ['D1901','NY','CT','MA','ME','$150'];
	var traArr2 = ['D1902','ME','MA','CT','NY','$150']
	var traArr3 = ['D1903','NY','CT','MA','RI','$130']
	var traArr4 = ['D1904','RI','MA','CT','NY','$130']
	var traArr5 = ['D1905','NY','NJ','PHILA','DC','$120']
	var traArr6 = ['D1906','DC','PHILA','NJ','NY','$120']
	var allTraArr =[traArr1, traArr2, traArr3, traArr4, traArr5, traArr6];
	// get element from he page and install click button
	var oBtn = document.getElementById('addBtn');
	oBtn.onclick = function(){
					//  adding train information
		var traNum = prompt('Please enter the train number');
					//setting a repeat mark: flag
		var flag = 0;
					//loop start, if there is same train no, flag will be 1
		for(var i = 0;i<allTraArr.length;i++){
			if(traNum == allTraArr[i][1]){
							flag = 1;
			}
		}
		//according flag, show the alert or continue adding the elements.
		if(flag == 1){
			alert('The train No. you entered is already exist');
		}else{
			var traOrigin = prompt('Please enter the origin station');
			var traPass1 = prompt('Please enter the first passing staion');
			var traPass2 = prompt('Please enter the second passing station');
			var traDes = prompt('Please enter the destination');
			var traPrice = prompt('Please enter the ticket price');

			//add all info. from the new train to a new array.
			var newTrain = [traNum,traOrigin,traPass1,traPass2,traDes,traPrice];
			//add the newTrain array into the array
			allTraArr.push(newTrain);
						
			console.log(allTraArr);
		}
			typeWay(allTraArr);
		}


		// install search
		var oSearchBtn = document.getElementById('searchBtn');
		oSearchBtn.onclick = function(){
			var keyWord = prompt('Please enter the train No');
			var inputArr = [];

			for(var i = 0 ;i<allTraArr.length;i++){
				if(allTraArr[i][0]  == keyWord){
					inputArr.push(allTraArr[i])
				}
			}
			console.log(inputArr);
			typeWay(inputArr);
		}

			function typeWay(arr){
			var str = '';
			for(var i = 0;i < arr.length ; i++){
			str+='<tr>';// str = str+'<tr>'
			for(var j = 0;j<arr[i].length;j++){
				str+='<td>'+arr[i][j]+'</td>';
			}
			str+='</tr>';
			}
			objectBody.innerHTML = str;
		}
			typeWay(allTraArr);
