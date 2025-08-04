// var h1element = document.querySelector("h1");

// h1element.style.color = "blue";

// var isYellow = false;
// var bodyElement = document.querySelector("body");

// setInterval(function () {
//   if (isYellow) {
//     bodyElement.style.background = "white";
//   } else {
//     bodyElement.style.background = "yellow";
//   }
//   isYellow = !isYellow;
// }, 1000);

//* selection methods
// var selectWithId = document.getElementById("JSparagraph");
// console.log(selectWithId);

// var selectWithClass = document.getElementsByClassName("background");
// console.log(selectWithClass);

// var selectWithTag = document.getElementsByTagName("h1");
// console.log(selectWithTag);

// var selectWithQueryId = document.querySelector("#JSparagraph");
// console.log(selectWithQueryId);

// var selectWithQueryClass = document.querySelector(".background");
// console.log(selectWithQueryClass);

// var selectWithQueryAllClass = document.querySelectorAll(".background");
// console.log(selectWithQueryAllClass);

//* Manipulation Methods
// var divToManipulate = document.querySelector(".background");

// divToManipulate.style.height = "50px";
// divToManipulate.style.width = "400px";
// divToManipulate.style.backgroundColor = "red";
// divToManipulate.style.fontSize = "30px";
// divToManipulate.style.border = "5px solid black";

// divToManipulate.classList.add("addClass");
// divToManipulate.classList.remove("addClass");
// divToManipulate.classList.toggle("addClass");

// var paragraph = document.querySelector("#JSparagraph");

// paragraph.textContent = "We are learning javascript, here.";

// paragraph.innerHTML = "We learning a <strong>great</strong> language, JavaScript.";

//* Manipulate Attributes
// var myLink = document.querySelector("a");

// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://github.com/MohammedQasim-js");
// console.log(myLink.getAttribute("href"));

// myLink.textContent = "My Github.";

//* Event Handlers
// var button = document.querySelector("#btn1");
// var title = document.querySelector("#jsTitle");

// button.addEventListener("click", function () {
//   console.log("You clicked the Button!");
//   title.style.backgroundColor = "red";
// });

// var listParent = document.querySelector("ul");

// listParent.addEventListener("click", function () {
//   console.log("You clicked the ul");
//   listParent.style.backgroundColor = "blue";
// });

// var listItem = document.querySelectorAll("li");
// console.log("ListItems:", listItem);

// for (var i = 0; i < listItem.length; i++) {
//   listItem[i].addEventListener("click", function (event) {
//     event.target.style.color = "white";
//   });
// }

// var jsParagraph = document.querySelector("#JSparagraph");

// function toggleBackground() {
//   jsParagraph.classList.toggle("toggleBackground");
// }

// jsParagraph.addEventListener("click", toggleBackground);

// var firstTodoItem = document.querySelector(".todoItem");
// firstTodoItem.addEventListener("mouseover", function () {
//   firstTodoItem.style.backgroundColor = "blue";
//   firstTodoItem.style.color = "white";
// });

// firstTodoItem.addEventListener("mouseout", function () {
//   firstTodoItem.style.backgroundColor = "white";
//   firstTodoItem.style.color = "black";
// });

var todoListItems = document.querySelectorAll(".todoItem");

for (var i = 0; i < todoListItems.length; i++) {
  todoListItems[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "blue";
    this.style.color = "white";
  });

  todoListItems[i].addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
    this.style.color = "black";
  });

  todoListItems[i].addEventListener("click", function () {
    this.classList.add("okay");
  });
}
