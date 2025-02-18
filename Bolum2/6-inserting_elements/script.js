function insertElement(){
    const ul = document.querySelector("#myList");

    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjacentElement";

    ul.insertAdjacentElement("afterbegin",h1)
}
// insertElement();

function insertText(){

    const item = document.querySelector("li:first-child");

    item.insertAdjacentText("afterbegin", " insertAdjacentText ");
}
// insertText();

function insertHtml(){
    const item = document.querySelector("li:nth-child(2)");
    item.insertAdjacentHTML("beforebegin", "<h2>InsertAdjacentElement</h2>");
}
// insertHtml();

function insertBefore(){

    const ul = document.querySelector("#myList");

    const li = document.createElement("li");
    li.textContent = "insertBefore";

    const secondLi = document.querySelector("li:nth-child(2)");

    ul.insertBefore(li, secondLi);
}
insertBefore();