const checkmark = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="8"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>';
const list = document.querySelector(".list_items");
const data = document.querySelector(".data");
const input_field = document.querySelector("#todo_items");
let circle;
let items_left= document.querySelector("#number_of_items");
input_field.addEventListener("keyup", e=>{
    if(e.key === "Enter"){
        const data_element = document.createElement("td");
        const circle_element = document.createElement("div")
        circle_element.className = "circle";
        data_element.append(circle_element);
        data_element.append(input_field.value);
        data.appendChild(data_element);
        input_field.value = "";
        circle = document.querySelectorAll(".circle");
        //##########code######################
        if(circle.length >= 1){
            items_left.textContent = circle.length;
        }
    }
})

document.addEventListener("click", e =>{
    if(e.target.classList.contains("circle") && !e.target.classList.contains("selector")){
        e.target.innerHTML= checkmark;
        e.target.classList.add("selector");
    }
    else if(e.path[2].classList.contains("selector")){
        e.path[2].innerHTML= "";
        e.path[2].classList.remove("selector");
    }
})
