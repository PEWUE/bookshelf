import * as mdb from "mdb-ui-kit";

const addBtn = document.querySelector("#add-btn");

const tBody = document.querySelector("#table-body");

const booksTitle = document.querySelector("#books-title");
const authorName = document.querySelector("#author-name");
const authorLastName = document.querySelector("#author-lastname");
const bookCategory = document.querySelector("#book-category");
const priority = document.querySelector("#priority");

const validInputs = document.querySelectorAll("#books-title, #author-name, #author-lastname");

addBtn.setAttribute("disabled", true);


for (let input of validInputs) {
  input.addEventListener("keyup", () => {
    if (booksTitle.value !== "" && authorName.value !== "" && authorLastName.value !== "") {
      addBtn.removeAttribute("disabled");
    } else {
      addBtn.setAttribute("disabled", true);
    }
  })
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

    let newTr = document.createElement("tr");
    let tdBookTitle = document.createElement("td");
    let tdAuthorInfo = document.createElement("td");
    let tdBookCategory = document.createElement("td");
    let tdPriority = document.createElement("td");
    let tdActions = document.createElement("td");
    tdActions.classList.add("d-flex", "justify-content-around");

    let spanEdit = document.createElement("span");
    let editIcon = document.createElement("i");
    editIcon.classList.add("far", "fa-edit", "text-warning");
    let spanRemove = document.createElement("span");
    let removeIcon = document.createElement("i");
    removeIcon.classList.add("far", "fa-trash-alt", "text-danger");

    tdBookTitle.innerText = booksTitle.value;
    tdAuthorInfo.innerText = authorName.value + " " + authorLastName.value;
    tdBookCategory.innerText = bookCategory.value;
    tdPriority.innerText = priority.value;
    spanEdit.appendChild(editIcon);
    spanRemove.appendChild(removeIcon);
    tdActions.appendChild(spanEdit);
    tdActions.appendChild(spanRemove);

    newTr.appendChild(tdBookTitle);
    newTr.appendChild(tdAuthorInfo);
    newTr.appendChild(tdBookCategory);
    newTr.appendChild(tdPriority);
    newTr.appendChild(tdActions);
    tBody.appendChild(newTr);

    booksTitle.value = "";
    authorName.value = "";
    authorLastName.value = "";
    addBtn.setAttribute("disabled", true);

});

export default {
  mdb
};
