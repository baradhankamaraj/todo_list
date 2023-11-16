const boxValue = document.getElementById("box1");
const addButton = document.getElementById("btn_add");
const result = document.getElementById("display");
const arr = [];

addButton.addEventListener("click", () => {
  if (boxValue.value.trim() === "") {
    document.getElementById("error_msg").innerHTML = "please enter the value";
    document.getElementById("error_msg").style.color = "red";

    // console.log("error");
  } else {
    arr.push(boxValue.value);
    addItem(boxValue.value);
    boxValue.value = "";
    document.getElementById("error_msg").innerHTML = "";
  }
});

boxValue.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && boxValue.value.trim() === "") {
    document.getElementById("error_msg").innerHTML = "plz enter the value";
    document.getElementById("error_msg").style.color = "red";
  } else if (event.key !== "Enter") {
    document.getElementById("error_msg").innerHTML = "";
  } else {
    arr.push(boxValue.value);
    addItem(boxValue.value);
    boxValue.value = "";
    document.getElementById("error_msg").innerHTML = "";
  }
});

function addItem(todo) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "dis");

  const newContent = document.createElement("h4");
  newContent.setAttribute("id", "head");
  newContent.innerHTML = todo;
  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "smallDiv");

  const deleteButton = document.createElement("button");
  let icon = document.createElement("i");
  icon.classList.add("bx", "bx-trash");
  deleteButton.appendChild(icon);
  deleteButton.setAttribute("class", "delButton");

  deleteButton.addEventListener("click", () => {
    result.removeChild(newDiv);
    remove(todo);
  });

  const completeButton = document.createElement("button");
  let ico = document.createElement("i");
  ico.classList.add("bx", "bx-check");
  completeButton.appendChild(ico);
  completeButton.setAttribute("class", "comButton");

  completeButton.addEventListener("click", () => {
    if (newContent.style.textDecoration === "none") {
      newContent.style.textDecoration = "line-through";
    } else {
      newContent.style.textDecoration = "none";
      newDiv.style.backgroundColor = "rgb(99, 42, 165)";
    }
  });

  newDiv.appendChild(newContent);
  buttonDiv.appendChild(deleteButton);
  buttonDiv.appendChild(completeButton);
  newDiv.appendChild(buttonDiv);
  result.appendChild(newDiv);
}

function remove(todo) {
  let index = arr.indexOf(todo);
  if (index !== undefined) {
    arr.splice(index, 1);
  }
}
