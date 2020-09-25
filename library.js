let myLibrary=[
  {
    title:'The Secret',
    author:'Shonda Rymes',
    pages:205,
    isRead:true
  },
  {
    title:'Love By Design',
    author:'Jane Sloan',
    pages:300,
    isRead:false
  },
  {
    title:'The Billionaire',
    author:'Fantasy',
    pages:400,
    isRead:false
  }
];

const titleInput= document.querySelector("#title");
const authorInput=document.querySelector("#author");
const pagesInput=document.querySelector("#pages");
const isReadInput=document.querySelector("#yes");
const addButton=document.querySelector("#done");
const bookTable=document.querySelector("#book-list")

addButton.addEventListener('click',addBookToLibrary);
// displayBook
displayBook(myLibrary);
function displayBook(savedOnes){
  for(i=0; i < savedOnes.length; i++){
    const newRow = `<tr>
        <td>${savedOnes[i].title}</td>
        <td>${savedOnes[i].author}</td>
        <td>${savedOnes[i].pages}</td>
        <td>${savedOnes[i].isRead==true ? 'read':'unread' }</td>
        </tr>`
        bookTable.innerHTML+=newRow;

  }
}
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
    
    //display created row
    const newBookrow=document.createElement("tr");
    //title cell
    const newTitleCell=document.createElement('td');
    newTitleCell.innerHTML = titleInput.value;
    newBookrow.appendChild(newTitleCell);
    //author cell
    const newAuthorCell=document.createElement('td');
    newAuthorCell.innerHTML=authorInput.value;
    newBookrow.appendChild(newAuthorCell);
    //pages cell
    const newPagesCell=document.createElement('td');
    newPagesCell.innerHTML=pagesInput.value;
    newBookrow.appendChild(newPagesCell);

    bookTable.appendChild(newBookrow);
    //read
    const newReadCell=document.createElement('td');
    newReadCell.innerHTML='read';
    const newNotReadCell=document.createElement('td')
    newNotReadCell.innerHTML='unread'
    if (isReadInput.checked==true){
      newBookrow.appendChild(newReadCell);
    }else{
      newBookrow.appendChild(newNotReadCell);
     }

   }
   document.querySelector('#form').reset(); //clears form for the next entry
 }


