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
  let body = "";
  for (let i = 0; i < data.length; i++) {
    body += `<tr><td>${data[i].manga}</td></tr>`;
    body += createDeleteButtonID(data[i].id);
  }
  document.getElementById("dbdata").innerHTML = body;
};

fetch(url)
  .then((response) => response.json())
  .then((data) => showDB(data))
  .catch((error) => console.log(error));

//delete functions wip
//const idFromDeleteButton = document.getElementsByClassName("button_delete").id;

//crea boton con class "button_delete" y con un id numerico diferente para cada uno
//y lo pongo en el body

function createDeleteButtonID(id) {
  const newDeleteButton = document.createElement("button");
  newDeleteButton.type = "button";
  newDeleteButton.id = `${id}`;
  newDeleteButton.value = "deletetete";
}


//const deleteToDB = document.getElementById(`${id}`)
//deleteToDB.addEventListener("click", execFetchDelete);

//tengo que buscar manera de acceder al id UNICO de un boton para que cuando lo aprete
//segun el id que tiene, uso ese mismo id para eliminar de la db









//deleteToDB.addEventListener("click", execFetchDelete);



function deleteFromDatabase() {
  const id = document.getElementsByClassName("button_delete").id;
  const object = { id: id.value };
  return object;
}

function execFetchDelete() {
  fetch(url, {
    method: "DELETE",
    body: JSON.stringify(deleteFromDatabase()),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
