let body = document.querySelector(`body`)
let text = document.querySelector(`.text`)

let allBoxes = document.querySelectorAll(`.drag`)

let box = document.querySelector(`.drag`)
let icons = document.querySelectorAll(`.receiver`)


var dragSrcElm = null;

function handleDragStart(e) {
    this.style.border = "dotted";

    dragSrcElm = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('html', this.innerHTML);
}

function handleDragEnd(e) {
    this.style.border = "4px solid green";
}

function handleDragOver(event) {
    event.preventDefault();
    return false;
  }

  function handleDrop(event) {
    event.stopPropagation();
    console.log(dragSrcElm.innerText)
    console.log(this.dataset.id)
    
    if(dragSrcElm.innerText === this.dataset.id){
        this.innerHTML = event.dataTransfer.getData('html');
        dragSrcElm.style.border = "4px solid greenyellow";

    }
    return false;
  }



allBoxes.forEach((box) => {
    box.addEventListener(`dragstart`, handleDragStart)

    // box.addEventListener(`dragover`, handleDragOver)
    // box.addEventListener(`drop`, handleDrop)
} ) 

icons.forEach((icon)=>{
    icon.addEventListener(`dragover`, handleDragOver)
    icon.addEventListener(`drop`, handleDrop)
    

})


