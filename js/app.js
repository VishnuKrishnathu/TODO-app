const checkmark = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="8"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>';
const circle = document.querySelectorAll(".circle");
let check = true;
circle.forEach(round_obj =>{
    round_obj.addEventListener("click", e=>{
        if(check === true){
            round_obj.innerHTML = checkmark;
            check= false;
        }else{
            round_obj.innerHTML ="";
            check= true;
        }
    })
})