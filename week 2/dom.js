const clickme = document.getElementById("clickme");
const assignmentArray = document.getElementsByClassName("assignment");
const assignment = assignmentArray[0];

let clickedCount = 0;

clickme.addEventListener("click", function () {
  clickedCount++;
  if (clickedCount % 2 === 0) assignment.style.display = "none";
  if (clickedCount % 2 === 1) assignment.style.display = "block";
});
