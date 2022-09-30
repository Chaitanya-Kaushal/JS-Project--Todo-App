const lists = document.querySelector(".lists");
const inputDiv = document.querySelector(".input_div")
const input = document.querySelector(".input");
const btn = document.querySelector(".addButton");
const liContainer = document.querySelector(".container");


btn.addEventListener("click",()=>{
    
    inputValue= input.value;
    li= document.createElement("li");
    let text = `<span> ${inputValue} </span>
    <div class="btn-div">
        <button class="editButton done ">Done </button>
        <button class="deleteButton  remove ">Remove</button>
    </div>`;
    li.innerHTML =text;
    lists.append(li);
    input.value="";
})

liContainer.addEventListener("click",e=>{
    console.log(e);
    if(e.target.classList.contains("done")){
        targetli= e.target.parentElement.previousElementSibling
        targetli.style.textDecoration = "line-through";
    }

    if(e.target.classList.contains("remove")){
        targetli= e.target.parentElement.parentElement
        targetli.remove();
    }
})




