function addBook() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let year = document.querySelector("#year").value;
  let isRead = document.querySelector("#isRead");
  let read = false;
  if (isRead.checked) {
    read = true;
  } else {
    read = false;
  }

  let data = {
    id: +new Date(),
    title: title,
    author: author,
    year: year,
    isRead: read,
  };

  dataBook.push(data);
  saveProgress(SAVE_EVENT);
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function clearForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#year").value = "";
  document.querySelector("#isRead").checked = false;
}

function findIndex(bookId) {
  for (const index in dataBook) {
    if (dataBook[index].id == bookId) {
      return index;
    }
  }
  return -1;
}

function findBook(bookId) {
  for (const bookItem of dataBook) {
    if (bookItem.id == bookId) {
      return bookItem;
    }
  }
  return null;
}

const deleteBook = (bookId) => {
  const bookTarget = findIndex(bookId);

  if (bookTarget === -1) return;

  dataBook.splice(bookTarget, 1);
  saveProgress(DELETE_EVENT);
  document.dispatchEvent(new Event(RENDER_EVENT));
};

function moveToRead(bookId) {
  let tempValue = [...dataBook].map((value) => {
    if (value.id == bookId) {
      value.isRead = true;
      return value;
    }
    return value;
  });
  dataBook = tempValue;
  saveProgress(MOVE_EVENT);
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function moveToUnread(bookId) {
  let tempvalue = [...dataBook].map((value) => {
    if (value.id == bookId) {
      value.isRead = false;
      return value;
    }
    return value;
  });
  dataBook = tempvalue;
  saveProgress(MOVE_EVENT);
  document.dispatchEvent(new Event(RENDER_EVENT));
}
