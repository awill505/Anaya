document.querySelector(".menu-btn").addEventListener("click", function () {
  const targetDiv = document.querySelector(".navbar-dropdown");

  // Explicitly check if the 'show' class is present
  if (!targetDiv.classList.contains("show")) {
    targetDiv.classList.add("show"); // Add 'show' class
  } else {
    targetDiv.classList.remove("show"); // Remove 'show' class
  }
});
