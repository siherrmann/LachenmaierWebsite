function cookieOk() {
  var now = new Date(); // Variable für aktuelles Datum
  var lifetime = now.getTime(); // Variable für Millisekunden seit 1970 bis aktuelles Datum
  var deleteCookie = lifetime + 2592000000; // Macht den Cookie 30 Tage gültig.

  now.setTime(deleteCookie);
  var enddate = now.toUTCString();

  document.cookie =
    "setCookieHinweis = set; path=/; secure; expires=" + enddate;
  document.getElementById("cookie-popup").style.display = "none";
}

window.addEventListener("load", function() {
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

var slideIndex = 1;
showPicture(slideIndex);

function nextPicture(n) {
  showPicture((slideIndex += n));
}

function currentPicture(n) {
  showPicture((slideIndex = n));
}

function showPicture(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(
      "dotsBlack",
      "dotsTransparent"
    );
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className = dots[slideIndex - 1].className.replace(
    "dotsTransparent",
    "dotsBlack"
  );
}

// window.onscroll = function() {
//   makeSticky();
// };
//
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
//
// function makeSticky() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
