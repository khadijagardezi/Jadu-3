
// onClick for login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
if ( username == "Jadu@gmail.com" && password == "Jadu123")
{
alert ("Login successfully");
// Redirecting to other page
// window.location = "index.html"; 
}
else{

alert("Try again");

}
}