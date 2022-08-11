let data = [];
let cardsData = JSON.parse(localStorage.getItem(`cards`)) || [];

let cardsCont = document.querySelector(`.cards-cont`)
let form = document.querySelector(`form`)
let inputTitle = document.querySelector(`#InputTitle`)
let inputCat = document.querySelector(`#InputCat`)


function createCard(data, root){
    root.innerHTML = "";

    data.map((obj, index) => {
        let card = document.createElement(`div`);
        card.classList.add(`card`)
        let title = document.createElement(`h3`);
        let category = document.createElement(`h5`)
        category.addEventListener("dblclick", () => {
            handleEdit(event, obj.category, index, "category")
        })
        title.addEventListener("dblclick", () => {
            handleEdit(event, obj.title, index, "title")
        })
        title.innerText = obj.title
        category.innerText = obj.category
        card.append(category, title);
        root.append(card)
    })
}

let index = 0;

function handleEdit(event, info, id, label){
    let input = document.createElement(`input`);
    input.value = info;
    let ele = event.target;
    let parent = event.target.parentElement;
    parent.replaceChild(input, ele);
    input.addEventListener("keyup", (event) => {
        if(event.keyCode === 13){
        let newValue = event.target.value;
        cardsData[id][label] = newValue;
        createCard(cardsData, cardsCont);
        }
    })
    input.addEventListener("blur", (event) => {
        let newValue = event.target.value;
        cardsData[id][label] = newValue;
        createCard(cardsData, cardsCont);
    })
}

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let title = event.target.elements.InputTitle.value;
    let category = event.target.elements.InputCat.value;
    console.log(title, category)
    cardsData.push({title, category})
    // inputCat.innerHTML =""
    // inputTitle.innerHTML =""
    // cardsCont.innerHTML =""
    localStorage.setItem(`cards`, JSON.stringify(cardsData))
    createCard(cardsData, cardsCont);
    
})

console.log(cardsData)
createCard(cardsData, cardsCont);

// cardsCont.addEventListener("dblclick", handleEdit(event, update, id))




