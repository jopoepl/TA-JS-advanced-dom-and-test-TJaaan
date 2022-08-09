let body = document.querySelector(`body`);
body.style = "background-color: lightgrey"


document.addEventListener(`DOMContentLoaded`, ()=>{
    for(i=0; i< 3; i++){
        let blockQuote = document.createElement(`div`)
        blockQuote.classList.add(`blockQuote`)
        let quote = document.createElement(`q`);
        quote.classList.add(`quote`)
        let author = document.createElement(`h3`);
        author.classList.add(`h3`)
        quote.innerText = quotes[i].quoteText;
        author.innerText = quotes[i].quoteAuthor;
        blockQuote.append(quote, author)
        body.append(blockQuote)
    }

    // if(window.pageYOffset > 50) {
    //     quote.innerText = quotes[i].quoteText;
    //     author.innerText = quotes[i].quoteAuthor;
    // }
   

})

let k = 3;

document.addEventListener("scroll", ()=> {
        let blockQuote = document.createElement(`div`)
        blockQuote.classList.add(`blockQuote`)
        let quote = document.createElement(`q`);
        quote.classList.add(`quote`)
        let author = document.createElement(`h3`);
        author.classList.add(`h3`)
        quote.innerText = quotes[k].quoteText;
        author.innerText = quotes[k].quoteAuthor;
        blockQuote.append(quote, author)
        body.append(blockQuote);
        k++
})