const addbtn = document.querySelector('.add_note');
const container = document.querySelector('#container');

document.addEventListener("DOMContentLoaded", Notes_after_refresh);
addbtn.addEventListener('click', function () {
    addNewNote();
});

function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<div class="box">
    <div class="tool">
        <i class="fa-solid fa-floppy-disk" id="save"></i>
        <i class="fa-solid fa-trash" id="delete"></i>
    </div>
    <textarea></textarea>
`
    // Adding event listener to delete button
    note.querySelector('#delete').addEventListener('click', function () {
        note.remove();
        savenote();
    });
    // Adding event listner to save button
    note.querySelector('#save').addEventListener('click', function () {
        savenote();
    });
    container.appendChild(note);
    console.log(container);
}
// saving notes to local storage
function savenote() {
    const notes = document.querySelectorAll('.box textarea');
    
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    })

    const jsondata = JSON.stringify(data);

    // Saving data to local storage

    localStorage.setItem('notes', jsondata);

   
}
function Notes_after_refresh() {
  const lsnotes=JSON.parse(localStorage.getItem("notes"));
  lsnotes.forEach(function(lsnote){
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<div class="box">
    <div class="tool">
        <i class="fa-solid fa-floppy-disk" id="save"></i>
        <i class="fa-solid fa-trash" id="delete"></i>
    </div>
    <textarea>${lsnote}</textarea>
`
    // Adding event listener to delete button
    note.querySelector('#delete').addEventListener('click', function () {
        note.remove();
        savenote();
    });
    // Adding event listner to save button
    note.querySelector('#save').addEventListener('click', function () {
        savenote();
    });
    container.appendChild(note);
})
  
}
