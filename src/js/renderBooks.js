import allOptionsSelected from "mdb-ui-kit/src/mdb/js/pro/select/util";
import superToggle from "./superToggle";

export default function renderBooks() {
  let books = JSON.parse(localStorage.getItem("userBooks"));
  const tBody = document.querySelector("#table-body");
  const bookCounter = document.querySelector("#counter");

  tBody.innerHTML = "";
  bookCounter.innerText = `Books in your bookshelf: ${books.length}`;


  if (books !== null) {
    for (let book of books) {
      let newTr = document.createElement("tr");
      let tdId = document.createElement("td");
      let tdBookTitle = document.createElement("td");
      let tdAuthorInfo = document.createElement("td");
      let tdBookCategory = document.createElement("td");
      let tdPriority = document.createElement("td");
      tdId.classList.add("d-none");

      tdBookTitle.classList.add("editable");
      tdAuthorInfo.classList.add("editable");
      tdBookCategory.classList.add("editable");
      tdPriority.classList.add("editable");

      let tdActions = document.createElement("td");
      tdActions.classList.add("d-flex", "justify-content-around");

      let spanEdit = document.createElement("span");
      let editIcon = document.createElement("i");
      editIcon.classList.add("far", "fa-edit", "text-warning", "edit-button");
      let spanRemove = document.createElement("span");
      let removeIcon = document.createElement("i");
      removeIcon.classList.add("far", "fa-trash-alt", "text-danger", "remove-button");


      tdId.innerText = book.id;
      tdBookTitle.innerText = book.title;
      tdAuthorInfo.innerText = book.authorName + " " + book.authorLastName;
      tdBookCategory.innerText = book.category;
      tdPriority.innerText = book.priority;
      spanEdit.appendChild(editIcon);
      spanRemove.appendChild(removeIcon);
      tdActions.appendChild(spanEdit);
      tdActions.appendChild(spanRemove);

      newTr.appendChild(tdId);
      newTr.appendChild(tdBookTitle);
      newTr.appendChild(tdAuthorInfo);
      newTr.appendChild(tdBookCategory);
      newTr.appendChild(tdPriority);
      newTr.appendChild(tdActions);
      tBody.appendChild(newTr);

      const editButton = newTr.querySelector(".edit-button");
      const removeButton = newTr.querySelector(".remove-button");

      removeButton.addEventListener("click", () => {
        const bookId = parseInt(removeButton.parentElement.parentElement.parentElement.firstChild.innerText);

        let filteredBooks = books.filter(book => {
          return book.id !== bookId;
        })

        localStorage.setItem("userBooks", JSON.stringify(filteredBooks));

        renderBooks();

      });

      editButton.addEventListener("click", () => {
        const bookId = parseInt(editButton.parentElement.parentElement.parentElement.firstChild.innerText);
        const editableContent = newTr.querySelectorAll(".editable");


        superToggle(editButton, "far", "fa-edit", "text-warning", "edit-button", "fas", "fa-check", "text-success", "save-button");
        [...editableContent].map(el => {
          el.setAttribute("contentEditable", true);
          el.focus();
        });

        const saveButton = newTr.querySelector(".save-button");
        saveButton != null && saveButton.addEventListener("click", () => {

          books.map(book => {
            if (book.id === bookId) {
              const authorName = tdAuthorInfo.innerText.split(" ").slice(0,-1).join(" ");
              const authorLastName = tdAuthorInfo.innerText.split(" ").pop();

              book.title = tdBookTitle.innerText;
              book.authorName = authorName;
              book.authorLastName = authorLastName;
              book.category = tdBookCategory.innerText;
              book.priority = tdPriority.innerText;
            }
          })
          localStorage.setItem("userBooks", JSON.stringify(books));
          renderBooks();
        })

      })

    }
  }
}
