// add event listener on load
window.addEventListener("load", function() {
  // scroll into view
  document
    .querySelector(".scrollToContact")
    .addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });

  document
    .querySelector(".scrollToServices")
    .addEventListener("click", function(e) {
      e.preventDefault();
      document
        .querySelector("#services")
        .scrollIntoView({ behavior: "smooth" });
    });

  document
    .querySelector(".scrollToStart")
    .addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
    });

  document
    .querySelector(".scrollToLocation")
    .addEventListener("click", function(e) {
      e.preventDefault();
      document
        .querySelector("#location")
        .scrollIntoView({ behavior: "smooth" });
    });
});
