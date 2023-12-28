// var btn = document.querySelector("i")
// var mnu = document.querySelector("h4")

// btn.addEventListener("click", function(){
//     h4.display = "block"
// })

var btn = document.querySelector(".nav i"); // Select the menu icon
var menuItems = document.querySelectorAll(".nav-part2 h4"); // Select all <h4> elements inside .nav-part2

btn.addEventListener("click", function () {
  // Toggle the display property for each menu item
  menuItems.forEach(function (item) {
    item.style.display = item.style.display === "block" ? "none" : "block";
  });
});


