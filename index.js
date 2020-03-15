console.log("Hola...");
const element = document.getElementsByTagName('header');
console.log("element", element);
console.log("element.length", element.length)
console.log("element.item(0)", element.item(0), element[0]);
const element2 = document.getElementsByClassName('col-sm');
console.log("element2", document.getElementsByClassName('col-sm'));
console.log("element2.length", element2.length);
console.log("element2.item(3)", element2.item(3), element2[3]);
console.log(document.querySelector('#enlace'));
console.log(document.getElementById('enlace'));


// const showAction = (e) => {
//     console.log(e.target);
// }

//card.addEventListener('click', showAction);
