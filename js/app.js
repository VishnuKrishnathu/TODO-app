const checkmark = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="8"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>';
const list = document.querySelector(".list_items");
const data = document.querySelector(".data");
const input_field = document.querySelector("#todo_items");
const circle = document.querySelectorAll(".circle");

input_field.addEventListener("keyup", e=>{
    if(e.key === "Enter"){
        const data_element = document.createElement("td");
        const circle_element = document.createElement("div")
        circle_element.className = "circle";
        data_element.append(circle_element);
        data_element.append(input_field.value);
        data.appendChild(data_element);
        input_field.value = "";
    }
})
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