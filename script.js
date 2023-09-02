// -----circle skill-----
const circles = document.querySelectorAll(".circle");
circles.forEach((item) => {
  var dots = item.getAttribute("data-dots");
  var marked = item.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;
  for (var i = 0; i < dots; ++i) {
    points += ` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  item.innerHTML = points;

  const pointsMarked = item.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});
// ----------------------Typing Animation-----
var typed = new Typed(".typing", {
  strings: ["Web Developer.", "Web Designer.", "Graphic Designer."], // strings to be typed
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
