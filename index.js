function openTab(event, tabName) {
    let i, tabContent, tabLinks;

  tabName === "terms"
    ? (document.getElementById("tabHeading").innerHTML = "Terms and Conditions")
    : (document.getElementById("tabHeading").innerHTML = "Privacy Policy");

    // Remove the "active" class from all elements with the class "tablink"
    tabLinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("active");
    }

    // Add the "active" class specifically to the clicked tab and its content
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");

    // Remove the "active" class from the "Terms and Conditions" button
    if (tabName === 'privacy') {
      document.getElementById('termsButton').classList.remove("active");
    }
  }

  //This will simulate a click on the terms button so that the content of the T&C shows
  document.getElementById('termsButton').click();