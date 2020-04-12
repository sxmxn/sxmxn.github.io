function navBarOpen() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Slideshow

const slider = tns({
  fixedWidth: '70',
  container: '.slider',
  prevButton: '.prev',
  nextButton: '.next',
  navPosition: 'bottom',
});
