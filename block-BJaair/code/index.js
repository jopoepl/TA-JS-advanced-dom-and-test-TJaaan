let data = {study: "JS", play: "volleyball"};

let cardsCont = document.querySelector(`.cards-cont`)
let form = document.querySelector(`form`)
let inputTitle = document.querySelector(`#InputTitle`)
let inputCat = document.querySelector(`#InputCat`)


function createCard(){
    for(let i = 0; i< Object.keys(data).length; i++){
    let card = document.createElement(`div`);
    card.classList.add(`card`)
    let title = document.createElement(`h3`);
    title.innerText = data[Object.keys(data)[i]]
    let category = document.createElement(`h5`)
    category.innerText = Object.keys(data)[i]
    card.append(category, title);
    cardsCont.append(card)
    }
}

let index = 0;

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    data[inputCat.value] = inputTitle.value;
    inputCat.innerHTML =""
    inputTitle.innerHTML =""
    cardsCont.innerHTML =""
    createCard();
    
})

console.log(data)

cardsCont.addEventListener()



