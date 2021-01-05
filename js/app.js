const checkmark = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="8"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>';
const circle = document.querySelectorAll(".circle");
const list = document.querySelector(".list_items");
const input_field = document.querySelector("#todo_items");
let check = true;
circle.forEach(round_obj =>{
    round_obj.addEventListener("click", e=>{
        if(!round_obj.classList.contains("selector")){
            round_obj.classList.add("selector");
            round_obj.innerHTML = checkmark;
        }else{
            round_obj.classList.remove("selector");
            round_obj.innerHTML = '';
        }
    })
})
input_field.addEventListener("keyup", e=>{
    if(e.key === "Enter"){
        console.log(input_field.value);
        input_field.value = "";
    }
})