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
// todoFunk()

const specifiqueData = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}
// specifiqueData(5)

// parameter a specifique id code end here;

// filter kore specifique data load code start here;
const filterSpecifiqueData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?id=5")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}
// filterSpecifiqueData()

// filter kore specifique data load code end here;

// Asynic await + try catch code start here;
const mordernFetch = async () => {
    // console.log("morder fetch usigin asynic try");
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        displayAllPost(data);
    } catch (error) {
        console.log("Error message:", error);
    }

}
// display all posts code;
const displayAllPost = (posts) => {
    posts.forEach(post => {
        // console.log(post);
    })
}
// mordernFetch()
const runCode = async () => {
    await mordernFetch()
    console.log("to do next stpe code output");
    console.log("step next code run before");
    console.log("to do next stpe code output");

}
// runCode()

// Repetated code start here;
const commentsAll = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await res.json();
        showComments(data);
    } catch (error) {
        console.log("Error Message", error);
    }
}
const showComments = (comments) => {
    comments.forEach(comment => {
        // console.log(comment);
    })
}
// commentsAll()
// Repetated code end here;

// commentsAll after some console code here;

const aferSomeCode = async () => {
    await commentsAll();
    // console.log("Then successfullo run");
}
aferSomeCode()
console.log("hello coditionally rendreing code");

// Conditionally Rendering Code usign if else and variable;
const condtionallyRendering = async () => {
    // console.log("funk");
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await res.json();
        displayShowComments(data)
    } catch (error) {
        console.log("Error Message:", error);
    }
}
// show display;
// {
// "postId": 1,
// "id": 1,
// "name": "id labore ex et quam laborum",
// "email": "Eliseo@gardner.biz",
// "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// },
const displayShowComments = (allComments) => {
    const renderingContainer = document.getElementById("renderingContainer");
    renderingContainer.innerHTML = '';
    allComments.forEach(element => {
        const div2 = document.createElement("div");
        // rendering code ;
        let render;
        if (element.email5) {
            render = "yes email find it"
        } else {
            render = "email not find"
        }

        div2.innerHTML = `
            <p>${element.name}</p>
            <h1 class = 'text-2xl font-bold'>${render}</h1>
        `
        // console.log(element);
        renderingContainer.appendChild(div2)

    })
}
// condtionallyRendering()


