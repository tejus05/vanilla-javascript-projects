const createNotes = document.querySelector('.create-notes');
// const notesContent = document.querySelector('.notes-content');
const notesContainer = document.querySelector('.notes-container');

function addNotes() {
  const notes = document.createElement('p');
  notes.focus();
  notes.classList.add('notes-content');
  notes.contentEditable = true;
  notes.innerHTML = `<span>Click here to add notes</span>
  <button class="delete-button" contenteditable="false">
          <img src="images/delete.png" class="delete" contenteditable="false">
        </button>`;
  notesContainer.appendChild(notes);

  notes.addEventListener('click', () => {
    notes.firstChild.innerText = '';
    notes.focus();
  })

  const deleteButton = notes.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    notes.remove();
  });
}

createNotes.addEventListener('click', addNotes);