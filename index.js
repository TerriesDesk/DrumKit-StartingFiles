var drumNumber = document.querySelectorAll(".drum").length;

for (var i = 0; i<drumNumber; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("I got clicked!");
  });


}
