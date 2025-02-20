const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const items = document.querySelectorAll("#myList li")

function fn(){
    
    console.log(h1.className);
    console.log(h1.classList);

    // h1.className = "f45";
    // h1.classList.add("red");
    // h1.classList.toggle("red");
    h1.classList.replace("f20","blue")


    for(let i = 0; i < items.length; i++){
        // items[i].classList.toggle("active");
        items[i].style.color = "red";
        items[i].style.fontSize = "30px";
        items[i].style.padding = "20px"
    }

}
button.addEventListener("click" ,fn)