document.getElementById("submit").addEventListener("click", function () {
  const q1 = document.querySelector(`input[name="q1"]:checked`);
  const q2 = document.querySelector(`input[name="q2"]:checked`);
  const q3 = document.querySelector(`input[name="q3"]:checked`);

  if (!q1 || !q2 || !q3) {
    alert("please answer all questions");
    return;
  }

  let score = 0;
  if (q1.value === "paris") score++;
  if (q2.value === "mars") score++;
  if (q3.value === "blue whale") score++;

  document.getElementById("score").textContent = score;
  document.getElementById("result").style.display = "block";
});
document.getElementById("play-again").addEventListener("click", function () {
  location.reload();
});
