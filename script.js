let myLibrary = [];

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
  card.dataset.id = book.id;

  const info = document.createElement('p');
  info.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';

  removeBtn.addEventListener('click', () => {
    myLibrary = myLibrary.filter((b) => b.id !== book.id);
    displayBooks();
  });
  
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = book.read ? 'Read' : 'Not Read';

  toggleBtn.addEventListener('click', () => {
    book.read = !book.read;
    displayBooks();
  });

  card.appendChild(info);
  card.appendChild(toggleBtn);
  card.appendChild(removeBtn);
  library.appendChild(card);
});
}

const addBookBtn = document.getElementById('add-book-btn');
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