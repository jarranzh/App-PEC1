document.addEventListener("DOMContentLoaded", function() {
  console.log("HOLA1");
  console.log(document.querySelectorAll(".category_header"));

  let header = "";
  if (document.querySelector(".main_header")) {
    console.log("main header");
    header = document.querySelector(".main_header");
  } else if (document.querySelectorAll(".category_header")) {
    console.log("category header");
    header = document.querySelector(".category_header").getElementsByTagName('h1')[0];
    //header = document.querySelector("h1");
  } else if (document.querySelector(".detail_header")) {
    console.log("HOLA2");
    header = document.querySelector("h1");
  }
  console.log("HEADER: ", header);
  console.log("BIENVENIDO A", header.innerText);
  const showPageLoaded = e => {
    console.log(e);
    console.log("Bienvenido a", e.target.innerText);
  };
  header.addEventListener("DOMContentLoaded", showPageLoaded);
  //console.log("Bienvenido a FRONTEND ACADEMY!");
  const card = [...document.getElementsByClassName("cards_wrapper-links")];

  const showAction = e => {
    console.log("Has pasado el ratón por encima de:", e.target.innerText);
  };

  card.map(e => e.addEventListener("mouseover", showAction));
});
