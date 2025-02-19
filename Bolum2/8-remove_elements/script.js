function clearHeader(){

    const h1 = document.querySelector("h1");
    h1.remove();
}
// clearHeader();

function removeItem1(){
    // const firsItem = document.querySelector("li:first-child");
    // firsItem.remove();

    const ul = document.querySelector("ul")
    const item5 = document.querySelector("li:nth-child(5)");

    ul.removeChild(item5);
}
// removeItem1();
function removeItem(number){
    const ul = document.querySelector("ul");
    const dynamicItem = document.querySelector(`li:nth-child(${number})`);

    ul.removeChild(dynamicItem);

}
// removeItem(2);

function removeAll(){

    const ul = document.querySelector("ul");
    ul.innerHTML = "";
}
// removeAll();

function removeAll2(){

    const ul = document.querySelector("ul");
    while(ul.firstChild){

        // ul.removeChild(ul.firstChild);

        ul.firstChild.remove();

    }
}
removeAll2();
