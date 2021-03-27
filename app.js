function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let format = "AM";

  if (hour == 0) {
    hour = 12;
    format = "AM";
  }
  if (hour > 12) {
    hour = hour - 12;
    format = "PM";
  }

  //   hour = hour < 10 ? "0" + hour : hour;
  //   min = min < 10 ? "0" + min : min;
  //   sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + " " + format;

  document.getElementById("clock").innerHTML = currentTime;
  setInterval(showTime, 1000);
}

showTime();
