// Start for validation
function validate(){
	var username = document.getElementById('uname');
	var password = document.getElementById('pass');
	if(username.value.trim()==""){
		// alert("Fill the all.")
		document.getElementById('user').style.visibility='visible';
		username.style.border='1px solid red';
		return false;
	}
	else if(password.value.trim().length<5){
		// alert("Less Than 5!")
		document.getElementById('upass').style.visibility='visible';
		password.style.border='1px solid red';
		return false;
	}
	else{
		return true;
	}
}
// End for validation