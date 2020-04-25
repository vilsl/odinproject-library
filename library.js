/*
Simple library app. Homework from The Odin Project. 
Do what you want with it. -jitsedefault
*/

let myLibrary = [];

// Book constructor
function Book(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(name, author, pages){
    myLibrary.push(new Book(name, author, pages));
    render();
}

// Displays the books
function render(){
    for (let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}