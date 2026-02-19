let btnCard = document.getElementById("btnCard");
btnCard.addEventListener("click", () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showCard(data)
        })
        .catch((error) => {
            console.log("Error Message:", error);
        })
})
// function for forEach;
const showCard = (cards) => {
    let cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";
    cards.forEach((card) => {
        // console.log(card);
        let div = document.createElement("div");
        div.innerHTML = `
            <div class="card bg-primary text-primary-content w-full h-full">
            <div class="card-body">
                <h1>${card.id}</h1>
                <h2 class="card-title">${card.title}</h2>
                <p>${card.body}</p>
                <div class="card-actions justify-end">
                    <button class="btn">Buy Now</button>
                </div>
            </div>
        </div>
        `
        cardsContainer.appendChild(div)

    })
}


// To do api code start here;
const todoFunk = () => {
    // console.log("to do funk");
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => {
            displayToDo(data);
        })
        .catch((error) => {
            console.log("Error Message:", error);
        })
}
// to do show ui funk;
const displayToDo = (lists) => {
    // console.log(lists);
    const toDoContainer = document.getElementById("toDoContainer");
    toDoContainer.innerHTML = '';
    lists.forEach(list => {
        // console.log(list);
        const div = document.createElement("div");
        div.innerHTML = `
       
        <div class="border-2 border-gray-500 mb-4 p-4 round-l ">
            <div class = "flex gap-4">
                 <p>${list.completed == true ? `<i class="fa-solid fa-circle-check"></i>` : `<i class="fa-solid fa-check"></i>`}</p>
                 <h2 class="font-extrabold">${list.title}</h2>
            </div>
        
        </div>
        `
        toDoContainer.append(div)
    })
}
todoFunk()