const form = document.getElementById("form");

function onSubmit(e){

    e.preventDefault();

    const inputValue = document.getElementById("input").value;
    const selectValue = document.getElementById("select").value;
    const checkBoxValue = document.getElementById("checkbox").value;

    if(inputValue === '' || selectValue === '0' ){

        alert("formu doldurunuz");
        return;

    }

    console.log(inputValue,selectValue,checkBoxValue);

    console.log("form submit");
}

form.addEventListener("submit", onSubmit);