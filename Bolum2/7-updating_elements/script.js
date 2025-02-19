function replaceItem1(){

    const firsItem = document.querySelector("li:first-child")
    const li = document.createElement("li");
    li.textContent = "Succes(update)";

    firsItem.replaceWith(li);
}

function replaceItem2(){

    const secondItem = document.querySelector("li:nth-child(3)");
    secondItem.innerHTML = "Work Hard(update)";
}
function replaceItem3(){

    const thirdItem = document.querySelector("li:nth-child(2)");
    thirdItem.outerHTML = "Work Hard(update)";
}
function replaceItem4(){
    const fourthItem = document.querySelector("li:nth-child(4)");
    fourthItem.outerHTML = ("<li>Quickly</li>");
}
function replaceAllItem(){
    const items = document.querySelectorAll("li");

    for(let i = 0; i < items.length; i++){
        items[i].outerHTML = "<li>Perfectoo</li>"
    }
}
function replaceAllItem2(){
    const items = document.querySelectorAll("li");

    for(let i = 0; i < items.length; i++){
        // items[i].outerHTML = "<li><p>Excellent</p></li>"

        if(i == 0){
            items[i].innerHTML = "Update";
        }
        else{
            items[i].outerHTML = "<li><p>Excellent</p></li>"
        }

    }


}



replaceItem1();
replaceItem2();
replaceItem3();
replaceItem4();

replaceAllItem2();

// replaceAllItem();