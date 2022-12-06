function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



pass = makeid(8)
title = document.getElementById("title")
input = document.getElementById("input-pass")
submit = document.getElementById("submit")
message = document.getElementById("message")

console.log("Pass: " + pass)
console.log("Pass length: " + pass.length)




function clicksubmit() {
  checkarr = []
  passright = ["1 true", "2 true", "3 true", "4 true", "5 true", "6 true", "7 true", "8 true"]
  for (let i = 0; i < pass.length; i++) {
    if (pass[i] === input.value[i]) {
      ii = i
      ii++
      checkarr.push(ii + " true")
      
      message.textContent = (ii + " true" + "\n")
    } else {
      ii = i
      ii++
      checkarr.push(ii + " false")
    }
  }
  if (passright = checkarr) {
    console.log("Password right")
    message.textContent = ("Password right")
  }
  console.log(checkarr)
}
