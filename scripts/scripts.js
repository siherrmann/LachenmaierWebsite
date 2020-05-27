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
