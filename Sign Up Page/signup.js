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

//Checking if password and confirm password are same an if not generatin an alert
validPasswordInput.addEventListener("mouseout", function () {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  if (password != confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
});

//Adding what happens when you click signup button i.e. new data gets added to local storage
signUpBtn.addEventListener("click", function () {
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
});
