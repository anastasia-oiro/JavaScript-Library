const titleInput= document.querySelector("#title");
const authorInput=document.querySelector("#author");
const pagesInput=document.querySelector("#pages");
const isReadInput=document.querySelector("#yes");
const addButton=document.querySelector("#done");

addButton.addEventListener('click',addBookToLibrary);

let myLibrary = [];
let id =0;

function Book(title,author,pages,isRead){ 
    this.title=title
    this.author=author
    this.pages=pages
    this.isRead=isRead
     }
 function addBookToLibrary() {
  if (titleInput.value=="" && authorInput.value=="" && pagesInput.value=="") {
    alert("Enter all fields") ; 
  }
  else{
    const newEntry = new Book(titleInput.value,authorInput.value,pagesInput.value,isReadInput.value)
    myLibrary.push(newEntry);
    console.log(myLibrary)
    document.querySelector('#form').reset(); //clears form for the next entry

  }
 }

