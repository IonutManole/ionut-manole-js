let startTime = () => {
  let today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  minutes = checkDigits(minutes);
  seconds = checkDigits(seconds);
  document.getElementById('clock').innerHTML =
    hour + ':' + minutes + ':' + seconds;
  let time = setTimeout(startTime, 500);
};

let checkDigits = (digit) => {
  if (digit < 10) {
    digit = '0' + digit;
  }
  return digit;
};
