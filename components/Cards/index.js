// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(obj=>{
    //console.log(obj)
    let cardsContainer = document.querySelector('.cards-container')
    for (let topic of Object.values(obj.data.articles)) {
        let articles = topic.map(createCard)
        cardsContainer.append(...articles)
    }
})

function createCard(article) {
    // card
    let card = createElement('div', {className:'card'})
    // headline
    let headline = createElement('div',{className:'headline', textContent:article.headline})
    // author
    let author = createElement('div',{className:'author'})
    // img-container
    let imgContainer = createElement('div',{className:'img-container'})
    // img
    let img = createElement('img', {src:article.authorPhoto})
    imgContainer.appendChild(img)
    // span
    let span = createElement('span', {textContent:`By ${article.authorName}`})
    author.append(imgContainer, span)
    card.append(headline, author)

    return card
}