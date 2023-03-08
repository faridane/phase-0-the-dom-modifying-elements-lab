// Write your code here!
// const element = document.createElement("div");
// document.body.append(element);
// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
//   }
// element.append(ul);
// const main = document.getElementById("main");
// main.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// const element2 = document.getElementById("main");
// element2.style.height = "300px";
// element2.style.backgroundColor = "#27647B";
// element2.textContent = "You've changed what's on the screen!";

// element2.style.fontSize = "24px";
// element2.style.marginLeft = "30px";
// element2.style.lineHeight = 2;
// element2.className = "pet-listing dog";
// element2.classList.remove("dog");
// element2.classList.add("cat", "sale");

// const ul2 = document.getElementsByTagName("ul")[0];
// const secondChild = ul2.querySelector("li:nth-child(2)");
// ul2.removeChild(secondChild);
// ul2.remove();

const main2 = document.getElementById("main");
main2.remove();

const newHeader = document.createElement("h1");
const newHeader2 = document.getElementsByTagName("h1");
newHeader2.innerHTML = "H1";
newHeader.id = "victory";
newHeader.innerHTML = "Farida is the champion";
