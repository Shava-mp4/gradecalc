document.getElementById("Calc").addEventListener("click", grade);
document.getElementById("Theme").addEventListener("click", theme);

function grade() {
  //Input
  let grade1 = +document.getElementById("m1").value;
  let grade2 = +document.getElementById("m2").value;
  let grade3 = +document.getElementById("m3").value;
  let grade4 = +document.getElementById("m4").value;
  let grade5 = +document.getElementById("m5").value;

  //Process
  let grade = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

  //Output
  document.getElementById("FinalG").innerHTML = grade;
}

function theme() {
  var element = document.body;
  element.classList.toggle("light-mode");
}
