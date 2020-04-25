/*
Simple library app. Homework from The Odin Project. 
Do what you want with it. -jitsedefault
*/

let myLibrary = [];

// Book constructor
function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read){
    myLibrary.push(new Book(name, author, pages, read));
}

// Takes input from HTML form
function newBookFromForm(name, author, pages, read){

}

// Displays the books
function renderLibrary(){
    clearLibraryRender();
    for (let i = 0; i < myLibrary.length; i++){
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("id", "book" + i);
        bookDiv.setAttribute("class", "book");

        let title = document.createElement("p");
        title.innerHTML = myLibrary[i].name;
        title.setAttribute("id", "name");
        bookDiv.appendChild(title);

        let author = document.createElement("p");
        author.innerHTML = myLibrary[i].author;
        author.setAttribute("id", "author");
        bookDiv.appendChild(author);

        let pages = document.createElement("p");
        pages.innerHTML = "Pages: " +  myLibrary[i].pages;
        pages.setAttribute("id", "pages");
        bookDiv.appendChild(pages);

        let read = document.createElement("p");
        read.innerHTML = myLibrary[i].read;
        read.setAttribute("id", "read");
        bookDiv.appendChild(read);

        document.getElementById("shelf").appendChild(bookDiv);
    }
}

function clearLibraryRender(){
    return;
}

// test books
addBookToLibrary("totallybook","unnamed",23, "Not read");
addBookToLibrary("yeeehaw","unna333med",235, "Read");
addBookToLibrary("neinenen","unnaddmed",234, "Not read");
addBookToLibrary("raaaaaaaaaaa","unnamedwed",2322, "Read");
addBookToLibrary("testbeeeeeeeeeeeeook5","unnaddmed",232, "Read");

renderLibrary();