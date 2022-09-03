window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_elem = document.querySelector("#mangas");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user_input = input.value;
    //crea DOM notes para poner en la pagina
    const task_elem = document.createElement("div");
    //aca le estoy dando una clase a esta nueva DOM note
    task_elem.classList.add("manga-list");

    const task_content_elem = document.createElement("div");
    task_content_elem.classList.add("content");

    task_elem.appendChild(task_content_elem);

    //con estas lineas agrego filas de nueva data que vaya ingresando el usuario pero le faltan los botones
    //ni tampoco se guardan (falta list_elem.appendChild(task_elem))

    const task_input_elem = document.createElement("input");
    task_input_elem.classList.add("text");
    task_input_elem.type = "text";
    task_input_elem.value = user_input;

    //para que no se pueda editar ni borrar sin el boton
    task_input_elem.setAttribute("readonly", "readonly");

    task_content_elem.appendChild(task_input_elem);

    //creo un nuevo elemento como si fuera html, class list actions
    const task_actions_elem = document.createElement("div");
    task_actions_elem.classList.add("actions");

    //creo un boton, le pongo de clase edit y le escribo dentro de el, el texto "Edit"
    const task_edit_elem = document.createElement("button");
    task_edit_elem.classList.add("edit");
    task_edit_elem.innerText = "Edit";

    //creo un boton, le pongo de clase edit y le escribo dentro de el, el texto "Delete"
    const task_delete_elem = document.createElement("button");
    task_delete_elem.classList.add("delete");
    task_delete_elem.innerText = "Delete";

    task_actions_elem.appendChild(task_edit_elem);
    task_actions_elem.appendChild(task_delete_elem);

    task_elem.appendChild(task_actions_elem);

    list_elem.appendChild(task_elem);

    //esto es para que una vez que agregue un nuevo manga el input se vacie sin tener que borrar lo anterior
    input.value = "";

    //hasta aca se entiende casi todo, buscar mejor info de los appendChilds
    //para darle funcionalidad a los botones uso lo que hice en el proy anterior con el eventListener click

    task_edit_elem.addEventListener("click", () => {
      task_input_elem.removeAttribute("readonly");
      task_input_elem.focus();
      //le saco el readonly para poder acceder a la data y editarla
      //el focus solo hace que sea mas comodo ya que al apretar el boton te deja en donde tenes que escribir
      //problema aca, una vez que me deja volver a editarlo tengo que hacer que no se pueda editar mas
      //supongo q con otro eventListener? idk
    });

    task_delete_elem.addEventListener("click", (e) => {
      list_elem.removeChild(task_elem);
    });
  });
});

        /*const sendToDB = document.getElementById("new-task-input");
        sendToDB.addEventListener("click", execFetch);

        let url = "http://localhost:3000/";

        function execFetch() {
            fetch((url), {
                method: "POST",
                body: JSON.stringify(addToDatabase()),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                // Converting to JSON
                .then((response) => response.json())
                .then((json) => console.log(json));
        }

        fetch(url)
            .then(response => response.json())
            .then(data => showDB(data))
            .catch(error => console.log(error)

            )

        const showDB = (data) => {
            console.log(data)
            let body = ""
            for (let i = 0; i < data.length; i++) {
                body += `<tr><td>${data[i].manga}</td></tr>`
            }
            document.getElementById("dbdata").innerHTML = body;
        }


        function addToDatabase(manga) {
            const manga = document.getElementById("new-task-input");
            console.log(manga.value);
            const obj = { manga: manga.value }
            return obj
        }*/