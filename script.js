/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

const myLibrary = [
  {
    title: 'Eye of the World',
    author: 'Robert Jordan',
    pages: 1000,
    isRead: true,
  },
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  myLibrary.push(new Book(title, author, pages, isRead));
}

const content = document.querySelector('.content');
const button = document.querySelector('.new');
const container = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const sub = document.querySelector('.sub');
const titleValue = document.querySelector('#title');
const authorValue = document.querySelector('#author');
const pagesValue = document.querySelector('#pages');
const read = document.querySelector('#read');
const close = document.querySelector('.close');

function remove(index) {
  myLibrary.splice(index, 1);
  const removeElement = document.querySelector(`[data-index="${index}"]`);
  removeElement.remove();
}

function displayNew() {
  const num = myLibrary.length - 1;
  const is = myLibrary[num].isRead === true ? 'Read' : 'not read';

  const bookCard = document.createElement('div');
  const title = document.createElement('div');
  const author = document.createElement('div');
  const pages = document.createElement('div');
  const isRead = document.createElement('div');
  const removeButton = document.createElement('button');
  bookCard.classList.add('item');
  bookCard.dataset.index = [num];
  removeButton.classList.add('remove');
  removeButton.textContent = 'Remove';

  title.textContent = myLibrary[num].title;
  author.textContent = myLibrary[num].author;
  pages.textContent = myLibrary[num].pages;
  isRead.textContent = is;

  content.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(isRead);
  bookCard.appendChild(removeButton);

  removeButton.addEventListener('click', () => remove(bookCard.dataset.index));
}
function showMenu() {
  menu.style.cssText = 'display: block;';
}
function hideMenu() {
  menu.style.cssText = 'display: none';
}
function showAndAddBook() {
  addBookToLibrary(
    titleValue.value,
    authorValue.value,
    pagesValue.value,
    read.checked,
  );
  hideMenu();
  displayNew();
}
displayNew();

button.addEventListener('click', () => showMenu());
sub.addEventListener('click', () => showAndAddBook());
container.addEventListener('click', () => hideMenu());
close.addEventListener('click', () => hideMenu());
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideMenu();
  else if (e.key === 'Enter') {
    e.preventDefault();
    showAndAddBook();
    hideMenu();
  }
});
