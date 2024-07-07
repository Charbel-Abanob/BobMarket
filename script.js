"use strict";

const body = document.querySelector(".body");
const square = document.querySelector(".square");
const description = document.querySelector(".desc");
const image1 = document.querySelector("#img1");
const image2 = document.querySelector("#img2");
const image3 = document.querySelector("#img3");
const image4 = document.querySelector("#img4");
const image5 = document.querySelector("#img5");
const image6 = document.querySelector("#img6");
const image7 = document.querySelector("#img7");
const image8 = document.querySelector("#img8");
const image9 = document.querySelector("#img9");
const image10 = document.querySelector("#img10");
const price1 = document.querySelector(".p1");
const price2 = document.querySelector(".p2");
const price3 = document.querySelector(".p3");
const price4 = document.querySelector(".p4");

function showSquare() {
  square.classList.remove("hidden");
  body.classList.add("blur");
  document.querySelector(".outer").classList.remove("hidden");
}
function hideSquare() {
  square.classList.add("hidden");
  body.classList.remove("blur");
  document.querySelector(".outer").classList.add("hidden");
}
image1.addEventListener("click", function () {
  showSquare();
  description.textContent =
    "Indulge in our delightful ice cream cornet, available in up to 25 irresistible flavors";
  price1.textContent = "100 000 LL";
  price2.textContent = "150 000 LL";
  price3.textContent = "200 000 LL";
  price4.textContent = "300 000 LL";
});

image2.addEventListener("click", function () {
  showSquare();
  description.textContent =
    "Savor the joy of our delightful ice cream cup, available in two exciting options: a crunchy, flavorful edible cup for a fun and tasty twist, or a classic, convenient plastic cup for those who prefer a more traditional experience.";
  price1.textContent = "200 000 LL";
  price2.textContent = "250 000 LL";
  price3.textContent = "300 000 LL";
  price4.textContent = "";
});

image3.addEventListener("click", function () {
  showSquare();
  description.textContent =
    "Treat yourself to our customizable ice cream box, available in two generous sizes: 500g or 1000g. Perfect for sharing or indulging solo, fill it with your favorite flavors and enjoy a delightful dessert experience!";
  price1.textContent = "500 000 LL";
  price2.textContent = "900 000 LL";
  price3.textContent = "";
  price4.textContent = "";
});

image4.addEventListener("click", function () {
  showSquare();
  description.textContent =
    "Experience a savory delight with our Cheese and Pepperoni Crepe, filled with a perfect blend of five cheeses—cheddar, kashkaval, mozzarella, emmental, and parmesan—and topped with flavorful pepperoni. Customize your crepe with various add-ons to enhance your taste, with prices varying based on your selections. A delectable treat that melts in your mouth!";
  price1.textContent = "150 000 LL ";
  price2.textContent = "200 000 LL";
  price3.textContent = "300 000 LL";
  price4.textContent = "";
});

image5.addEventListener("click", function () {
  showSquare();
  description.textContent =
    "Indulge in our decadent Nutella and Bueno Crepe, drizzled with rich syrup and filled with creamy Nutella chocolate and crunchy Bueno pieces. Customize your crepe with a variety of add-ons to create your perfect treat, with prices varying based on your selections. A heavenly delight for chocolate lovers!";
  price1.textContent = "70 000 LL";
  price2.textContent = "120 000 LL";
  price3.textContent = "170 000 LL";
  price4.textContent = "220 000 LL";
});
image6.addEventListener("click", function () {
  showSquare();
  description.textContent =
    "Delight in our Nutella Chocolate Waffles, drizzled with rich syrup and topped with creamy Nutella. Customize your waffle with a variety of delicious add-ons to create your perfect treat, with prices varying based on your selections. A sweet indulgence for any chocolate lover!";
  price1.textContent = "200 000 LL";
  price2.textContent = "250 000 LL";
  price3.textContent = "300 000 LL";
  price4.textContent = "350 000 LL";
});
image7.addEventListener("click", function () {
  showSquare();
  description.textContent =
    "Refresh yourself with our Iced Coffee, a perfect blend of rich coffee and refreshing ice. Enhance your drink with a splash of syrup, vanilla, or strawberry for an extra burst of flavor. Customize it to your taste and enjoy a deliciously cool coffee experience!";
  price1.textContent = "60 000 LL";
  price2.textContent = "80 000 LL";
  price3.textContent = "100 000 LL";
  price4.textContent = "";
});
image8.addEventListener("click", function () {
  showSquare();
  description.textContent =
    "Enjoy our savory Toast with a delightful combination of Kashkaval and Cheddar cheeses, perfectly melted to create a rich, cheesy experience. Topped with savory pork ham and enhanced with creamy mozzarella cheese, it's a satisfying treat for any time of day.";
  price1.textContent = "50 000 LL";
  price2.textContent = "70 000 LL";
  price3.textContent = "100 000 LL";
  price4.textContent = "";
});
image9.addEventListener("click", function () {
  showSquare();
  description.textContent =
    "Experience a delightful array of beverages and cold drinks. From rich coffees and soothing teas to refreshing cold brews, iced options, and beer, each drink is crafted to satisfy your cravings. Customize your drink to perfection and enjoy the perfect blend of flavors in every sip.";
  price1.textContent = "Prices vary depending on your choice.";
  price2.textContent = "";
  price3.textContent = "";
  price4.textContent = "";
});

image10.addEventListener("click", function () {
  showSquare();
  description.textContent =
    "Indulge in the relaxing tradition of hookah with our premium blends. Choose from up to five enticing flavors, each crafted to enhance your smoking pleasure. Immerse yourself in the rich aroma and smooth smoke of our carefully prepared hookah, perfect for sharing with friends or enjoying solo in our cozy lounge.";
  price1.textContent = "100 000 LL";
  price2.textContent = "";
  price3.textContent = "";
  price4.textContent = "";
});

document.querySelector(".outer").addEventListener("click", function () {
  hideSquare();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hideSquare();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll(".letter");

  letters.forEach((letter) => {
    letter.addEventListener("mouseover", () => {
      letter.style.color = getRandomColor();
    });

    letter.addEventListener("mouseout", () => {
      letter.style.color = "#fff";
    });
  });

  function getRandomColor() {
    const colors = ["#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f", "#fff"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
});
