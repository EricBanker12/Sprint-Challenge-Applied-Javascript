// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(obj=>{
    //console.log(obj)
    let tabs = obj.data.topics.map(createTab)
    let topics = document.querySelector('.topics')
    topics.append(...tabs)
    // add filter
    topics.addEventListener('click', event => {
        let tab = event.target.closest('.tab')
        for (let card of document.getElementsByClassName('card')) {
            if (card.getAttribute('topic') == tab.textContent.replace('.js','')) {
                card.removeAttribute('style')
            }
            else {
                card.style.display = 'none'
            }
        }
    })
})

function createTab(topic) {
    return createElement('div', {className:'tab', textContent:topic})
}

// helper function
function createElement(tag, attributes={}) {
    let temp = document.createElement(tag)
    for (let attribute of Object.keys(attributes)) {
        temp[attribute] = attributes[attribute]
    }
    return temp
}