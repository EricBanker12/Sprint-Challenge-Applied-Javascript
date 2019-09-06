// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // header
    let header = createElement('div', {className:'header'})
    // date
    let date = createElement('span', {className:'date',textContent:'SMARCH 28, 2019'})
    // h1
    let h1 = createElement('h1', {textContent:'Lambda Times'})
    // temp
    let temp = createElement('span', {textContent:'98°'})
    // append elements
    header.append(date,h1,temp)

    return header
}

document.querySelector('.header-container').appendChild(Header())