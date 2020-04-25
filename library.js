/*
Simple library app. Homework from The Odin Project. 
Do what you want with it. -vilsl
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

function removeBook(clicked_id){
    myLibrary.splice(clicked_id,1);
}

// Takes new book info from HTML form
function newBookFromForm(){
    let name = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read;
    if (document.getElementById("read").checked == true){
        read = "Read";
    }
    else {
        read = "Not read";
    }

    addBookToLibrary(name, author, pages, read);
    document.getElementById("newBookForm").reset();
    clearLibraryRender();
    renderLibrary();
}

// Displays the books
function renderLibrary(){
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

        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.setAttribute("id", i);
        removeBtn.setAttribute("class", "removeButton");
        removeBtn.setAttribute("onclick", "removeBook(this.id)");
        bookDiv.appendChild(removeBtn);

        document.getElementById("shelf").appendChild(bookDiv);
    }
}

function clearLibraryRender(){
    for (let i = 0; i < myLibrary.length-1; i++){
        let bookDiv = document.getElementById("book" + i);
        bookDiv.parentNode.removeChild(bookDiv);
    }    
}

// test books
addBookToLibrary("totallybook","unnamed",23, "Not read");
addBookToLibrary("yeeehaw","unna333med",235, "Read");
addBookToLibrary("neinenen","unnaddmed",234, "Not read");
addBookToLibrary("raaaaaaaaaaa","unnamedwed",2322, "Read");
addBookToLibrary("testbeeeeeeeeeeeeook5","unnaddmed",232, "Read");

renderLibrary();