/*
Simple library app. Homework from The Odin Project. 
Do what you want with it. -vilsl
*/

let myLibrary = [];

// Book constructor
class Book{
    constructor(name, author, pages, read){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Librarian{
    addBookToLibrary(name, author, pages, read){
        myLibrary.push(new Book(name, author, pages, read));
    }

    removeBook(clicked_id){
        myLibrary.splice(clicked_id,1);
        renderer.clearLibraryRender();
        renderer.renderLibrary();
    }

    changeToRead(clicked_id){
        myLibrary[clicked_id].read = "Read";
        renderer.clearLibraryRender();
        renderer.renderLibrary();
    }

    changeToUnread(clicked_id){
        myLibrary[clicked_id].read = "Not read";
        renderer.clearLibraryRender();
        renderer.renderLibrary();
    }

    newBookFromForm(){
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
    
        this.addBookToLibrary(name, author, pages, read);
        document.getElementById("newBookForm").reset();
        renderer.clearLibraryRender();
        renderer.renderLibrary();
    }
}

class LibraryRenderer{
    renderLibrary(){
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
                readToggleButton.setAttribute("onclick", "librarian.changeToUnread(this.id)");
            }
            else {
                readToggleButton.innerHTML = "Read";
                readToggleButton.setAttribute("onclick", "librarian.changeToRead(this.id)");  
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
            removeBtn.setAttribute("onclick", "librarian.removeBook(this.id)");
            bookDiv.appendChild(removeBtn);
            
            document.getElementById("shelf").appendChild(bookDiv);
        }
    }
    clearLibraryRender(){
        let bookDiv = document.getElementsByClassName("book");
        while (bookDiv.length > 0){
            bookDiv[0].parentNode.removeChild(bookDiv[0]);
        }
    }
}

// Invoke library
let librarian = new Librarian();
let renderer = new LibraryRenderer();

// test books
librarian.addBookToLibrary("1984","George Orwell",233, "Read");
librarian.addBookToLibrary("Lord of the Rings","J.R.R. Tolkien",999, "Not read");
librarian.addBookToLibrary("Foundation","Isaac Asimov",234, "Read");
librarian.addBookToLibrary("Dune","Frank Herbert",684, "Read");
librarian.addBookToLibrary("Manufacturing Consent","Edward S. Herman",232, "Not read");

renderer.renderLibrary();