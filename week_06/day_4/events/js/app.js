document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript has loaded");

  const button = document.querySelector("#button");
  button.addEventListener("click", handleButtonClick);

  const input = document.querySelector("#input");
  input.addEventListener("input", handleInput);

  const select = document.querySelector("#select");
  select.addEventListener("change", handleSelect);

  const form = document.querySelector("#form");
  form.addEventListener("submit", handleFormSubmit);
});

const handleButtonClick = function () {
  const paragraph = document.querySelector("#button-result");
  paragraph.textContent = "CLICK!!!";
};

const handleInput = function (event) {
  const paragraph = document.querySelector("#input-result");
  paragraph.textContent = `You typed ${event.target.value}`;
};

const handleSelect = function (event) {
  const paragraph = document.querySelector("#select-result");
  paragraph.textContent = `You selected ${event.target.value}`;
};

const handleFormSubmit = function (event) {
  event.preventDefault();
  const paragraph = document.querySelector("#form-result");
  paragraph.textContent = `${event.target.first_name.value} ${event.target.last_name.value}`;
  console.log();
};
