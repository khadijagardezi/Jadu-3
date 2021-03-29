// Clock Time Function called
showTime();

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
        alert("Login Successfull");
        isAuth = true;
        window.location.href = "contact.html";
        break;
      }
    }
    if (isAuth == false) {
      alert("Email or Password Incorrect");
    }
    //
  } else {
    alert("Enter valid Information");
  }
}

// Clock Time function
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
