//  https://codepen.io/cerealandchoccymilk/pen/ZYELgWe

function fun() {
  let inputPswd = document.getElementById("validate").value;
  let correctPswd = "yes";
  if (inputPswd === correctPswd) {
    document.getElementById("r18-hidden").style.display = "block";
    document.getElementById("prompt").style.display = "none";
    document.getElementById("pswd").style.display = "none";
  } else {
    alert("パスワードが違います\nIncorrect password");
  }
}
