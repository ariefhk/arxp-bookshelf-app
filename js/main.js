document.addEventListener("DOMContentLoaded", () => {
  let submitForm = document.querySelector("#form");
  let searchBar = document.querySelector("#cari");

  if (isStorageExist()) {
    loadData();
  }

  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
    clearForm();
  });

  searchBar.addEventListener("keyup", (e) => {
    const valueSearch = e.target.value.toLowerCase();
    let dataItem = document.querySelectorAll(".data-item");

    for (const book of dataItem) {
      let dataItemInfo = book.firstChild;
      let dataItemInfoText = dataItemInfo.lastChild;
      let dataItemInfoTextStr = dataItemInfoText.firstChild.textContent;

      if (String(dataItemInfoTextStr).toLowerCase().includes(valueSearch)) {
        book.setAttribute("style", "display:flex;");
      } else {
        book.setAttribute("style", "display:none;");
      }
    }
  });
});
