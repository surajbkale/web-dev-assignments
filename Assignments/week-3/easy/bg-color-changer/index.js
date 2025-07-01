window.changeColor = function (color) {
  const body = document.querySelector("body");
  body.style.backgroundColor = color;
};

window.addNewColor = function () {
  const colorInput = document.getElementById("colorInput");
  const colorValue = colorInput.value.trim();

  if (colorValue === "") {
    alert("Please Enter a color name or hex code!");
    return;
  }

  // Create button container
  const newButtonDiv = document.createElement("div");
  newButtonDiv.className = "flex flex-col items-center";

  // Create button element
  const newButton = document.createElement("button");
  newButton.innerText = colorValue;
  newButton.className = `text-white font-bold py-2 px-4 rounded-xl mb-2`;
  newButton.style.backgroundColor = colorValue;

  // Attack click event
  newButton.onclick = function () {
    changeColor(colorValue);
  };

  // Add Button to grid container
  const gridContainer = document.querySelector(".grid");
  gridContainer.appendChild(newButtonDiv);
  newButtonDiv.appendChild(newButton);

  // clear input
  colorInput.value = "";
};
