// GET ALL ELEMENTS FROM HTML FILE
let input = document.querySelector("input");
let button = document.querySelector("button");
let form = document.querySelector("form");

button.addEventListener("click", () => {
    let p = document.createElement("p");
    p.innerHTML = input.value;
    form.appendChild(p);
});