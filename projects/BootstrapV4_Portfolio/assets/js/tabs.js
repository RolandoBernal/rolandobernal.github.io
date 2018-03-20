function openSection(evt, sectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].innerHTML = "Open";
    console.log("--- assigned Learn More to the innerHTML ---");
    if (evt.currentTarget.classList.contains("no-active")) {
      document.getElementById(sectionName).style.display = "block";
      console.log("evt.currentTarget.className: (1) ", evt.currentTarget.className);
      evt.currentTarget.classList.remove("no-active");
      evt.currentTarget.className += " active showing";
      console.log("evt.currentTarget.className: (2) ", evt.currentTarget.className);
    }
  }
  if (evt.currentTarget.classList.contains("showing")) {
    evt.currentTarget.className = "tablinks active hiding";
    console.log("evt.currentTarget.className: (3) ", evt.currentTarget.className);
    evt.currentTarget.innerHTML = "&times Close";
    console.log("evt.innerHTML -> ", evt.currentTarget.innerHTML);
  } else if (evt.currentTarget.classList.contains("hiding")) {
    evt.currentTarget.innerHTML = "Open";
    evt.currentTarget.className = "tablinks no-active";
    console.log("evt.innerHTML: ", evt.currentTarget.innerHTML);
  }
}