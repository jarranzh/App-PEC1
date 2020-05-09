import "bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", function() {
  let header = "";
  if (document.querySelector(".main_header")) {
    header = document.querySelector(".main_header");
  } else if (document.querySelectorAll(".category_header").length > 0) {
    header = document
      .querySelector(".category_header")
      .getElementsByTagName("h1")[0];
  } else {
    header = document.querySelector("h1");
  }
  console.log("BIENVENIDO A", header.innerText);

  const card = [...document.getElementsByClassName("container-links")];

  const showAction = e => {
    console.log("Has pasado el ratón por encima de:", e.target.innerText);
  };

  card.map(e => e.addEventListener("mouseover", showAction));
});
