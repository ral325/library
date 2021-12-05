let Library = [];

class Book {
    constructor(title, author, datePub, readStatus) {
        this.title = title;
        this.author = author;
        this.datePub = datePub;
        this.readStatus = readStatus;
    }
}

let LibraryTable = document.querySelector("table");
let addButton = document.querySelector(".add-book");
addButton.addEventListener("click", openBookCreationWindow);
let popup = document.querySelector(".popup");

function addBookToLibrary(book) {
    console.log("Adding book: " + book.title)
    Library.push(book);
    let newRow = LibraryTable.insertRow(1);
    populateTableRow(book,newRow);
}

function populateTableRow(book,row) {
    let cells = Array(Object.keys(book).length);
    for (let i = 0; i <= Object.keys(book).length; i++) {
        cells[i] = row.insertCell(i);
    }
    cells[0].textContent = book.title;
    cells[1].textContent = book.author;
    cells[2].textContent = book.datePub;
    cells[3].textContent = book.readStatus;

    let newBtn = document.createElement("button");
    newBtn.textContent = "-";
    newBtn.classList.add("delete-button");
    cells[4].appendChild(newBtn);
    newBtn.addEventListener("click", deleteBook);
}

function deleteBook() {
    console.log("Deleting book: " + this.title);
    let rowIndexToDelete = this.parentElement.parentElement.rowIndex; // button -> cell -> row
    LibraryTable.deleteRow(rowIndexToDelete);
}

function openBookCreationWindow() {
    popup.classList.toggle("show");
}

// test items

function AddBooksToLibrary(bookArray) {
    for (let i = 0; i < bookArray.length; i++) {
        addBookToLibrary(bookArray[i]);
    }
}

let book1 = new Book("Game of Thrones", "George RR Martin", "1996", true);
let book2 = new Book("Ender's Game", "Scott Card", "1985", true);
let test_array = [book1, book2];
AddBooksToLibrary(test_array);