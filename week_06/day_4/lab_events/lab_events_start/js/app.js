document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteButton = document.querySelector("#delete-button");
  deleteButton.addEventListener("click", handleClick);
});

const handleFormSubmit = function (event) {
  event.preventDefault();

  const div = document.createElement("div");

  const listParent = document.querySelector("#reading-list");
  listParent.appendChild(div);

  const newListItem = document.createElement("li");
  div.appendChild(newListItem);

  const title = document.createElement("h2");
  title.textContent = event.target.title.value;
  newListItem.appendChild(title);

  const author = document.createElement("h4");
  author.textContent = event.target.author.value;
  newListItem.appendChild(author);

  const category = document.createElement("p");
  category.textContent = event.target.category.value;
  newListItem.appendChild(category);

  document.getElementById("new-item-form").reset();
};

const handleClick = function () {
  const listParent = document.querySelector("#reading-list");
  while (listParent.firstChild) {
    listParent.removeChild(listParent.lastChild);
  }
};
