document.getElementById("btn").addEventListener("click", (event) => {
  event.preventDefault();
  loadUsers();
});

let loadUsers = async () => {
  try {
    const response = await fetch(`https://api.github.com/users?$login`);
    let users = await response.json();
    renderData(users);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

let renderData = async (users) => {
  users.forEach((user) => {
    let output = document.querySelector("#output");
    let userCard = document.createElement("div");
    userCard.setAttribute("id", "user-card");
    let img = document.createElement("img");
    img.src = user.avatar_url;
    img.style.width = "30rem";
    userCard.append(img, user.login);
    output.append(userCard);
    let message = document.querySelector("#message");
    message.style.display = "none";
  });
};

/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
