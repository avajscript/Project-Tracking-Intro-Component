window.onload = () => {
  // Variables
  const navbarButton = document.querySelector(".navbar-button");
  const dropdown = document.querySelector(".nav");
  // Functions
  function toggleDropdown() {
    console.log("x");
    if (dropdown.classList.contains("hide")) {
      dropdown.classList.remove("hide");
    } else {
      dropdown.classList.add("hide");
    }
  }

  // Event Listeners
  navbarButton.addEventListener("click", toggleDropdown);
};
