/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
    // carousel
    let carousel = createElement('div', {className:'carousel'})
    // left button
    let leftButton = createElement('div', {className:'left-button', textContent:' < '})
    // imgs
    let imgs = ['mountains', 'computer', 'trees', 'turntable'].map(e=>createElement('img', {src:`./assets/carousel/${e}.jpeg`}))
    // right button
    let rightButton = createElement('div', {className:'right-button', textContent:' > '})
    // append elements
    carousel.append(leftButton, ...imgs, rightButton)

    // counter
    let counter = 0
    imgs[counter].style.display = 'unset'
    // event listeners
    leftButton.addEventListener('click', ()=>{
        imgs[counter].removeAttribute('style')
        counter--
        if (counter < 0) counter = imgs.length-1
        imgs[counter].style.display = 'unset' 
    })
    rightButton.addEventListener('click', ()=>{
        imgs[counter].removeAttribute('style')
        counter++
        if (counter >= imgs.length) counter = 0
        imgs[counter].style.display = 'unset'
    })
    
    return carousel
}

document.querySelector('.carousel-container').appendChild(createCarousel())