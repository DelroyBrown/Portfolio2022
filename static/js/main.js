// const svgText = document.querySelectorAll('#svg-text path')

// for(let i = 0; i<svgText.length; i++) {
//     console.log(`Letter i${i} is ${svgText[i].getTotalLength()}`)
// }

// CV MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
btn2.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// DARKMODE/LIGHTMODE

$(".inner-switch").on("click", function () {
  if ($("body").hasClass("light-mode")) {
    $("body").removeClass("light-mode");
    $(".inner-switch").text("Turn the lights on?");
  } else {
    $("body").addClass("light-mode");
    $(".inner-switch").text("Turn the lights off?");
  }
});
