import * as mdb from "mdb-ui-kit";
import render from "./render";

const addBtn = document.querySelector("#add-btn");
addBtn.setAttribute("disabled", true);


const booksTitle = document.querySelector("#books-title");
const authorName = document.querySelector("#author-name");
const authorLastName = document.querySelector("#author-lastname");
const bookCategory = document.querySelector("#book-category");
const priority = document.querySelector("#priority");

const validInputs = document.querySelectorAll("#books-title, #author-name, #author-lastname");


render();

for (let input of validInputs) {
  input.addEventListener("keyup", () => {
    if (booksTitle.value !== "" && authorName.value !== "" && authorLastName.value !== "") {
      addBtn.removeAttribute("disabled");
    } else {
      addBtn.setAttribute("disabled", true);
    }
  });
}

addBtn.addEventListener("click", () => {

  let books = JSON.parse(localStorage.getItem("userBooks"));

  let newBook = {
    id: null,
    title: booksTitle.value,
    authorName: authorName.value,
    authorLastName: authorLastName.value,
    category: bookCategory.value.split(" ")
      .slice(0, -1)
      .join(" "),
    priority: priority.value
  };

  books.length === 0 ? newBook.id = 1 : newBook.id = books[books.length - 1].id + 1;

  books.push(newBook);
  localStorage.setItem("userBooks", JSON.stringify(books));

  booksTitle.value = "";
  authorName.value = "";
  authorLastName.value = "";
  addBtn.setAttribute("disabled", true);

  render();

});



export default {
  mdb
};
