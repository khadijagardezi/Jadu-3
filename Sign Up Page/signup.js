//Defining some constants and getting their values from signup.html file
const nameInput = document.getElementById("user_name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const signUpBtn = document.getElementById("submitbtn");
const validPasswordInput = document.getElementById("confirm_password");

//Adding data in local storage to userstorage and then turning it to an object and storing it back to users
const userStorage = localStorage.getItem("users");
const JSONToUser = JSON.parse(userStorage);
let users = JSONToUser || [];

// //Checking
console.log(users);

//Making a class to store data
class User {
  id;
  name;
  email;
  password;
  confirmPassword;

  constructor(id, name, email, password, confirmPassword) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}

// email validation it will show alert on wrong email input
// emailInput.addEventListener("focusout", function () {
//   if (
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
//       document.getElementById("email")
//     )
//   ) {
//   } else {
//     alert("Invalid email address!");
//   }
// });

// validate email function
// email validation
function validateEmail(email) {
  let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(email)) {
    return false;
  }
}

// Checking if password and confirm password are same an if not generating an alert
validPasswordInput.addEventListener("focusout", function () {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  if (password != confirmPassword) {
    alert("Passwords do not match");
    return false;
  }
  return true;
});

// Adding what happens when you click signup button i.e. new data gets added to local storage
// Added form validation it will not accept any empty fields
signUpBtn.addEventListener("click", function () {
  const user = new User(
    Date.now(),
    nameInput.value,
    emailInput.value,
    passwordInput.value,
    confirmPasswordInput.value
  );

  // Getting values from all the input fields in <Form>
  var w = document.forms["myform"]["user_name"].value;
  var x = document.forms["myform"]["email"].value;
  var y = document.forms["myform"]["password"].value;
  var z = document.forms["myform"]["cpassword"].value;

  // Conditions on empty and null fields
  if (w == "" || w == null) {
    alert("Cannot submit empty form");
  } else if (x == "" || x == null) {
    alert("Cannot submit empty form");
  } else if (y == "" || y == null) {
    alert("Cannot submit empty form");
  } else if (z == "" || z == null) {
    alert("Cannot submit empty form");
  } else if (document.getElementById("checkbox").checked == false) {
    alert("Cannot submit empty form");
  } else if (validateEmail(emailInput.value) == false) {
    alert("Email invalid");
  } else {
    const user = new User(
      Date.now(),
      nameInput.value,
      emailInput.value,
      passwordInput.value,
      confirmPasswordInput.value
    );
    users.push(user);
    const usersJson = JSON.stringify(users);
    localStorage.setItem("users", usersJson);
    alert("Sign Up Succesful");
  }

  return false;
});

// Clock added
function showTime() {
  let time = new Date(); //These are JS built in functions that takes time from your browser. Below we are getting/returning hr,min,sec and assigning them to a variable.
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let format = "AM"; //initial format is AM you can set this blank also because below we are reassigning it according to condition.
  //so machine usually shows 0 instead of 12 here we are changing that and also telling to change format AM/PM if hour is greater than 12 minus 12 from that so we get 12 hour format instead of 24.
  if (hour == 0) {
    hour = 12;
    format = "AM";
  }
  if (hour > 12) {
    hour = hour - 12;
    format = "PM";
  }

  // The functionality of this code is just formatting here we have used ternary condition that if hour is less than 10 "?" stands for YES and ":" for NO so do similar according to condition.
  // if hour less than 10 then add "0" for example if we have this clock 1:50:05 now we will have 01:50:05, same condition for minutes and seconds as well.

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // assigning hour,time,seconds and AM/PM to currentTime variable.

  let currentTime = hour + ":" + min + ":" + sec + " " + format;

  // we are getting clock element here from its id and setting a property to it's HTML content through id (DOM Manipulation)

  document.getElementById("clock").innerHTML = currentTime;

  // setting a delay of 1sec before clock shows

  setInterval(showTime, 1000);
}

// function called.

showTime();
