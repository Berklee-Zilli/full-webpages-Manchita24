
document.title = "Task 1 by Rousse Chavez :)";

const headerTitle = document.querySelector("header h1"); {
headerTitle.textContent = "TASK 1";
}

const introParagraph = document.getElementById("intro");
{
    introParagraph.textContent = "I am a music student who wish to become a well known producer and Engineer";
}

const listTitle = document.querySelector("#list-of-things-i-like h2");
if (listTitle) {
    listTitle.textContent = "List of things I like";
}

const list = document.querySelector("#list-of-things-i-like ul");
list.innerHTML = "";
const favoriteThings = [
    "Playing games",
    "Reading Books",
    "Running",
   
];

favoriteThings.forEach(thing => {
    const newItem = document.createElement("li");
    newItem.textContent = thing; 
    newItem.classList.add("list-item"); 
    list.appendChild(newItem); 
});
