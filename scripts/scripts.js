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

function dropMenu() {
  document.getElementById("droppedMenuContent").classList.toggle("drop");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropMenu")) {
    var links = document.getElementsByClassName("menuContent");
    var i;
    for (i = 0; i < links.length; i++) {
      var droppedLinks = links[i];
      if (droppedLinks.classList.contains("drop")) {
        droppedLinks.classList.remove("drop");
      }
    }
  }
};
