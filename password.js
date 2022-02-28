function myLogin() {
	var x = document.getElementById("uname").value;
	var y = document.getElementById("pass").value;


	if((x == "harry leddy") && (y == "password")){
		window.open("newpage.html");

	}
	else {
		document.getElementById("demo").innerHTML = "Password Incorrect";
	}
}