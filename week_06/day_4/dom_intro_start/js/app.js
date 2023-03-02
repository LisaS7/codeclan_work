document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  title.textContent = "JavaScript says 'Hello World!' :)";

  const welcomeParagraph = document.getElementById("welcome-paragraph");
  //   console.log(welcomeParagraph);

  const redElement = document.querySelector(".red");
  //   console.log(redElement);

  const redListItem = document.querySelector("li.red");
  redListItem.textContent = "RED!!!";
  redListItem.classList.add("bold");
  //   console.log(redListItem);

  const allRedElements = document.querySelectorAll(".red");
  //   console.log(allRedElements);

  const newListItem = document.createElement("li");
  newListItem.textContent = "cheese";
  newListItem.classList.add("purple");
  document.querySelector("ul").append(newListItem);
});
