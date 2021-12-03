const topButton = document.getElementById("topBtn");

window.onscroll = function () {
  detectScroll();
};

function detectScroll() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
