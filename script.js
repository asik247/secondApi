let btnCard = document.getElementById("btnCard");
btnCard.addEventListener("click", () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showCard(data)
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

