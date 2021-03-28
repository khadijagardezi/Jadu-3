// getting users from local storage
let users = JSON.parse(localStorage.getItem("users"));
console.log("users: ", users);

// onClick for login button.
function validate() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email != "" && password != "") {
    console.log("email: ", email);
    console.log("password: ", password);

    // boolean variable.. if user found else do it
    isAuth = false;
    // looping all users and finding a match
    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
      if (users[i].email == email && users[i].password == password) {
        alert("good");
        isAuth = true;
        break;
      }
    }
    if (isAuth == false) {
      alert("email or password incorrect");
    }
    //
  } else {
    alert("Enter valid information");
  }
}
