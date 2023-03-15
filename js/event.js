document.addEventListener(RENDER_EVENT, () => {
  let finishedBook = document.querySelector("#sudahDibaca");
  finishedBook.innerHTML = "";

  let unfinishedBook = document.querySelector("#belumDibaca");
  unfinishedBook.innerHTML = "";

  let findDataRead = dataBook.find((value) => value.isRead == true);
  let findDataNotRead = dataBook.find((value) => value.isRead == false);

  //Check While non data submitted
  if (dataBook.length == 0 || findDataRead == undefined) {
    finishedBook.append(nonData());
  }
  if (dataBook.length == 0 || findDataNotRead == undefined) {
    unfinishedBook.append(nonData());
  }

  for (const book of dataBook) {
    let element = makeElement(book);
    if (book.isRead) {
      finishedBook.append(element);
    } else {
      unfinishedBook.append(element);
    }
  }
});

document.addEventListener(SAVE_EVENT, () => {
  Swal.fire({
    icon: "success",
    title: "Data Berhasil Disimpan!",
    showConfirmButton: true,
    timer: 1500,
  });
});

document.addEventListener(DELETE_EVENT, () => {
  Swal.fire({
    icon: "success",
    title: "Data Berhasil Dihapus!",
    showConfirmButton: true,
    timer: 1500,
  });
});

document.addEventListener(MOVE_EVENT, () => {
  Swal.fire({
    icon: "success",
    title: "Data Berhasil Dipindahkan!",
    showConfirmButton: true,
    timer: 1500,
  });
});

document.addEventListener(LOAD_EVENT, () => {
  Swal.fire({
    icon: "success",
    title: "Data Berhasil Dimuat!",
    showConfirmButton: true,
    timer: 1500,
  });
});
