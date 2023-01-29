/* eslint-disable brace-style */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

const myLibrary = [
  // {
  //   title: 'Eye of the World',
  //   author: 'Robert Jordan',
  //   pages: 1000,
  //   isRead: true,
  // },
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.changeStatus = function (index) {
  const changedStatus = document.querySelector(`[data-index-of-read="${index}"]`);
  const readDiv = document.querySelector(`[data-index3="${index}"]`);
  if (this.isRead === false) {
    this.isRead = true;
    changedStatus.textContent = 'read';
    readDiv.style.cssText = 'background: green;';
  }
  else if (this.isRead === true) {
    this.isRead = false;
    changedStatus.textContent = 'not read';
    readDiv.style.cssText = 'background: red;';
  }
};
// Book.prototype.name = 'name';

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
const covers = document.querySelector('.covers');

function remove(index) {
  // console.log(myLibrary[index].name);
  myLibrary.splice(index, 1);
  const removeElement = document.querySelector(`[data-index="${index}"]`);
  removeElement.remove();
}

function displayNew() {
  const num = myLibrary.length - 1;
  let is;
  // const is = myLibrary[num].isRead === true ? 'Read' : 'not read';

  const bookCard = document.createElement('div');
  const title = document.createElement('div');
  const author = document.createElement('div');
  const pages = document.createElement('div');
  const isRead = document.createElement('div');
  const removeButton = document.createElement('button');
  bookCard.classList.add('item');
  bookCard.dataset.index = [num];
  isRead.dataset.indexOfRead = [num];
  isRead.dataset.index3 = [num];
  removeButton.classList.add('remove');
  removeButton.textContent = 'Remove';
  isRead.classList.add('isRead');

  if (myLibrary[num].isRead === true) {
    is = 'read';
    isRead.style.cssText = 'background: green';
  }
  else if (myLibrary[num].isRead === false) {
    is = 'not read';
    isRead.style.cssText = 'background: red;';
  }

  title.textContent = myLibrary[num].title;
  author.textContent = myLibrary[num].author;
  pages.textContent = myLibrary[num].pages + ' pages';
  isRead.textContent = is;

  content.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(isRead);
  bookCard.appendChild(removeButton);
  removeButton.addEventListener('click', () => remove(bookCard.dataset.index));
  isRead.addEventListener('click', () => myLibrary[bookCard.dataset.index].changeStatus(bookCard.dataset.index));
  covers.addEventListener('click', () => {
    bookCard.classList.remove('coverStyle');
    bookCard.classList.toggle('coverStyle');
  });
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
