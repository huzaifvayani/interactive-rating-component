const btn = document.querySelector(".submit");
let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");
let btns = document.querySelectorAll(".btn");
let head = document.getElementById("head-02");

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        head.innerText= `you selected ${this.innerText} out of 5`;
    });
}

btn.addEventListener("click", function(){
    wrapper.classList.remove("active");
    container.classList.add("active");
});