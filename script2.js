const container=document.querySelector(".container");
const addnotebtn=document.querySelector(".add_note");


addnotebtn.addEventListener("click",add_note);

document.addEventListener("DOMContentLoaded",getnotesfromlocalstorage);

function add_note(){
    const box=document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    const tool=document.createElement("div");
    tool.classList.add("tool");
    tool.innerHTML=`<i class="fa-solid fa-floppy-disk" id="save"></i> <i class="fa-solid fa-trash" id="delete"></i>`
    
    box.appendChild(tool);
    const textarea=document.createElement("textarea");
    box.appendChild(tool);
    box.appendChild(textarea);
    console.log(box);

    // Adding event listener to delete button
    box.querySelector("#delete").addEventListener('click', function () {
        box.remove();
        savenote();
    });

    // Adding event listner to save button
    
    box.querySelector('#save').addEventListener('click', function () {
        savenote();
    });
}

function savenote(){
    const notes=document.querySelectorAll(".box textarea");
    const info=[];
    notes.forEach(function(note){
        info.push(note.value);
    })
    const jsondata=JSON.stringify(info);
    if(info.length===0){
        localStorage.removeItem("info");
    }
    else{
    localStorage.setItem("info",jsondata);
    }
}

function getnotesfromlocalstorage(){
    const lsnotes=JSON.parse(localStorage.getItem("info"));
    lsnotes.forEach(function(lsnote){

        const box=document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    const tool=document.createElement("div");
    tool.classList.add("tool");
    tool.innerHTML=`<i class="fa-solid fa-floppy-disk" id="save"></i> <i class="fa-solid fa-trash" id="delete"></i>`
    
    box.appendChild(tool);
    const textarea=document.createElement("textarea");
    textarea.value=lsnote;
    box.appendChild(tool);
    box.appendChild(textarea);

    console.log(box);

    // Adding event listener to delete button
    box.querySelector("#delete").addEventListener('click', function () {
        box.remove();
        savenote();
    });

    // Adding event listner to save button
    
    box.querySelector('#save').addEventListener('click', function () {
        savenote();
    });
    })
}

    
