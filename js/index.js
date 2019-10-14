var allTitle = document.getElementsByClassName('newsTitle');
var allNewsBody = document.getElementsByClassName('newsBody');
	for(var i = 0; i<allTitle.length; i++){
		allTitle[i].setAttribute('flag', i)
		allTitle[i].onclick = function(){
			for(var j = 0; j<allNewsBody.length; j++){
		  		allNewsBody[j].style.display ='none';
		  		allTitle[j].style.backgroundColor ="#efeff4";
		        allTitle[j].style.color ="#666";
		}
		  	allNewsBody[this.getAttribute('flag')].style.display ='block';
		  	allTitle[this.getAttribute('flag')].style.backgroundColor="#3B99FC";
		  	allTitle[this.getAttribute('flag')].style.color="#fff";
	}
}

