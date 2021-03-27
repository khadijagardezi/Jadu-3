const nameInput = document.getElementById("user_name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const signUpBtn = document.getElementById("submitbtn");

const userStorage = localStorage.getItem("users");
const JSONToUser = JSON.parse(userStorage);
let users = JSONToUser || [];

console.log(users);

class User {
  id;
  name;
  email;

  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

signUpBtn.addEventListener("click", function () {
  const user = new User(Date.now(), nameInput.value, emailInput.value);
  users.push(user);
  const usersJson = JSON.stringify(users);
  localStorage.setItem("users", usersJson);
});
