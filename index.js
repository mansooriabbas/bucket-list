const list = document.querySelector(".list");
const title = document.querySelector(".owner");
const paragraph = document.createElement("p");
const paragraph2 = document.createElement("p");
paragraph2.innerText = "Buy Lambo (pref brown)";
paragraph.innerText = "Escape the matrix";

list.appendChild(paragraph);
list.insertAdjacentElement("beforeend", paragraph2);
title.innerText = "Abbe's";

let otherList = [
  "<p>Do that thing</p>",
  "<p>Do that other thing</p>",
  "<p>Buy more things</p>",
];

// list.innerHTML = `
// <p>Buy the thing</p>
// <p>Buy the other thing</p>
// `
list.insertAdjacentHTML(
  "afterbegin",
  `
<p>Buy the thing</p>
<p>Buy the other thing</p>
`
);

otherList.forEach((li) => {
  list.insertAdjacentHTML("beforeend", li);
});

const newItem = document.createElement("p");
newItem.textContent = "Earn two million dollars";
list.replaceChild(newItem, list.firstChild);

const newParagraph = document.createElement("p");
newParagraph.textContent = "Inserted in the middle";
list.insertBefore(newParagraph, list.children[4]);

list.lastChild.remove();


