//global

let url = "http://localhost:3000/";




//post functions

const sendToDB = document.getElementById("new-task-submit");
sendToDB.addEventListener("click", execFetch);

function addToDatabase() {
  const manga = document.getElementById("new-task-input");
  console.log(manga.value);
  const obj = { manga: manga.value };
  return obj;
}

function execFetch() {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(addToDatabase()),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}





// get functions

const showDB = (data) => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement("tr")
    const rowContent = document.createElement("td")
    rowContent.innerHTML = data[i].manga;
    row.appendChild(rowContent)
    row.appendChild(createDeleteButtonID(i));
    document.getElementById("dbdata").appendChild(row);

  }
};

fetch(url)
  .then((response) => response.json())
  .then((data) => showDB(data))
  .catch((error) => console.log(error));





//delete functions wip


const deleteManga = (e) => {
  const idToDelete = e.target.id
  console.log({idToDelete})
  alert(`el id de este boton es: ${idToDelete}`)
  //execFetchDelete(idToDelete);
};


function createDeleteButtonID(id) {
  const newDeleteButton = document.createElement("input");
  newDeleteButton.type = "button";
  newDeleteButton.className = 'button_delete';
  newDeleteButton.id = `${id}`;
  newDeleteButton.value = "Delete";
  newDeleteButton.addEventListener("click", deleteManga);
  return newDeleteButton;  
}

function execFetchDelete(id) {
  fetch(url, {
    method: "DELETE",
    body: JSON.stringify({ id }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}









/*
function deleteFromDatabase() {
  const id = document.getElementsByClassName("button_delete").id;
  const object = { id: id.value };
  return object;
}


function createDeleteButtonID(id) {
  var newDeleteButton = document.createElement("button");
  newDeleteButton.type = "button";
  newDeleteButton.id = `${id}`;
  newDeleteButton.value = "deletetete";
  newDeleteButton.onclick;
}

*/
