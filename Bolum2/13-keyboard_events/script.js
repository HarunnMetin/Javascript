const input = document.getElementById("text");

// function onKeyPress(){
//     console.log("keypress");
// }

// function onKeyUp(){
//     console.log("keyup");
// }

function onKeyDown(e){
    // console.log(e);
    // console.log(e.key);
    // document.querySelector("h2").innerText = e.key;

    // if(e.key === 'Enter'){
    //     alert("enter tusuna basildi");
    // }

    // if(e.keyCode == 13){
    //     alert("enter tusuna basildi");
    // }

    // if(e.repeat){
    //     alert(`${e.key} tusuna basili kaldi`);
    // }

    if(e.ctrlKey && e.key === 'a'){

        alert("ctrl + a");

    }
}

// input.addEventListener("keypress" , onKeyPress);
// input.addEventListener("keyup", onKeyUp);
input.addEventListener("keydown", onKeyDown);