export default function renderBooks() {
  const tBody = document.querySelector("#table-body");

  let books = JSON.parse(localStorage.getItem("userBooks"));

  if (books !== null) {
    for (let book of books) {
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

      tdBookTitle.innerText = book.title;
      tdAuthorInfo.innerText = book.authorName + " " + book.authorLastName;
      tdBookCategory.innerText = book.category;
      tdPriority.innerText = book.priority;
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
    }
  }
}
