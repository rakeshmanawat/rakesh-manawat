// Attach a click event to the back link
document.addEventListener("DOMContentLoaded", function() {
  const backLink = document.getElementById("back-link");

  if (backLink) {
    backLink.addEventListener("click", function() {
      history.back(); // Go to the previous page
    });
  }
});