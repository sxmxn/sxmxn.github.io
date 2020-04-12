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
  container: '.slider',
  prevButton: '.prev',
  nextButton: '.next',
  autoWidth: true,
  center: true,
  gutter: 30,
  navPosition: 'bottom',
});
