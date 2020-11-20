const images = [
  {src: 'images/cake-1.jpeg', type: 'cake', name: 'Cake Item', price: '$5'},
  {src: 'images/cake-2.jpeg', type: 'cake', name: 'Cake Item', price: '$5'},
  {src: 'images/cake-3.jpeg', type: 'cake' , name: 'Cake Item', price: '$5'},
  {src: 'images/cupcake-1.jpeg', type: 'cupcake',name: 'Cupcake Item', price: '$5'},
  {src: 'images/cupcake-2.jpeg', type: 'cupcake' ,name: 'Cupcake Item', price: '$10'},
  {src: 'images/cupcake-3.jpeg', type: 'cupcake' ,name: 'Cupcake Item', price: '$15'},
  {src: 'images/doughnut-1.jpeg', type: 'doughnut',name: 'Doughnut Item', price: '$5'},
  {src: 'images/doughnut-2.jpeg', type: 'doughnut',name: 'Doughnut Item', price: '$15'},
  {src: 'images/doughnut-3.jpeg', type: 'doughnut',name: 'Doughnut Item', price: '$10'},
  {src: 'images/sweets-1.jpeg', type: 'sweet',name: 'Sweet Item', price: '$5'},
  {src: 'images/sweets-2.jpeg', type: 'sweet',name: 'Sweet Item', price: '$10'},
  {src: 'images/sweets-3.jpeg', type: 'sweet',name: 'Sweet Item', price: '$15'}
]
const allBtn = document.getElementById('allBtn');
const cakesBtn = document.getElementById('cakesBtn');
const cupcakesBtn = document.getElementById('cupcakesBtn');
const doughnutBtn = document.getElementById('doughnutBtn');
const sweetsBtn = document.getElementById('sweetsBtn');
const imageContainer = document.querySelector('.img-container')


// Event Listeners
allBtn.addEventListener('click', displayAllitems);
window.addEventListener('DOMContentLoaded', displayAllitems);
cakesBtn.addEventListener('click', (e)=>{
  images.forEach(function(image){
    if(image.type === 'cake'){
      console.log(image);
    }
  })
})
// function
function displayAllitems(){
  let displayImages = images.map(function(image){
    return `<div class="img-container">
      <img src="${image.src}" class="img" alt="">
      <h3 id='name'>${image.name}</h3>
      <h3 id='price'>${image.price}</h3>
    </div>`
  })
  displayImages = displayImages.join('');
  // console.log(displayImages);
  imageContainer.parentElement.innerHTML = displayImages;
}
