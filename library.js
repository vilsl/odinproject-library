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
    clearLibraryRender();
    renderLibrary();
}

function changeToRead(clicked_id){
    myLibrary[clicked_id].read = "Read";
    clearLibraryRender();
    renderLibrary();
}

function changeToUnread(clicked_id){
    myLibrary[clicked_id].read = "Not read";
    clearLibraryRender();
    renderLibrary();
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
        // Displays information about the book
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("id", "book" + i);
        bookDiv.setAttribute("class", "book");

        let title = document.createElement("p");
        title.innerHTML = myLibrary[i].name;
        title.setAttribute("id", "name");
        bookDiv.appendChild(title);

        let author = document.createElement("p");
        author.innerHTML = "by " + myLibrary[i].author;
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

        // Button to toggle 'read' status of book object
        let readToggleButton = document.createElement("button");
        if (myLibrary[i].read == "Read"){
            readToggleButton.innerHTML = "Not read";
            readToggleButton.setAttribute("onclick", "changeToUnread(this.id)");
        }
        else {
            readToggleButton.innerHTML = "Read";
            readToggleButton.setAttribute("onclick", "changeToRead(this.id)");  
        }
        readToggleButton.setAttribute("id", i);
        readToggleButton.setAttribute("class", "readButton");
        bookDiv.appendChild(readToggleButton);

        let buttonSpacer = document.createElement('br');
        bookDiv.appendChild(buttonSpacer);

        // Button to remove book from library
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
    let bookDiv = document.getElementsByClassName("book");
    while (bookDiv.length > 0){
        bookDiv[0].parentNode.removeChild(bookDiv[0]);
    }
}

// test books
addBookToLibrary("1984","George Orwell",233, "Read");
addBookToLibrary("Lord of the Rings","J.R.R. Tolkien",999, "Not read");
addBookToLibrary("Foundation","Isaac Asimov",234, "Read");
addBookToLibrary("Dune","Frank Herbert",684, "Read");
addBookToLibrary("Manufacturing Consent","Edward S. Herman",232, "Not read");

renderLibrary();