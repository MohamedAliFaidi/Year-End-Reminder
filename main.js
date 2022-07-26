var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + " days";
  document.getElementById("hours").innerHTML = hours + " hours";
  document.getElementById("minutes").innerHTML = minutes + " minutes";
  document.getElementById("seconds").innerHTML = seconds + " seconds";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("x").innerHTML = "EXPIRED";
  }
}, 1000);
