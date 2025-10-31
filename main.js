document.addEventListener("DOMContentLoaded", function() {
  const listItem = document.getElementById("goToSecond");

  listItem.addEventListener("click", function() {
    window.location.href = "second.html";
  });

  // styles for clickable element
  listItem.style.cursor = "pointer";
  listItem.style.color = "black";
});
//=============================================
document.addEventListener("DOMContentLoaded", function() {
  const listItem = document.getElementById("goToThird");

  listItem.addEventListener("click", function() {
    window.location.href = "third.html";
  });

  listItem.style.cursor = "pointer";
  listItem.style.color = "black";
});