const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book)
}

function displayBooks() {
    const library = document.getElementById('library');
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
myLibrary.forEach((book) => {
  const card = document.createElement('div');
  card.classList.add('book-card');
  card.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
  library.appendChild(card);
});
}

const addBookBtn =document.getElementById('add-book-btn');
const dialog = document.getElementById('add-book-dialog');
const form = document.getElementById('add-book-form');
const cancelBtn = document.getElementById('cancel-btn');

addBookBtn.addEventListener('click', () => {
  dialog.showModal();
});

cancelBtn.addEventListener('click', () => {
  dialog.close();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();
  form.reset();
  dialog.close();
});