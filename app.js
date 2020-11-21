const imagesArray = [
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

const imageContainer = document.querySelector('.img-container')
const btns = document.querySelectorAll('.button')
const parentContainer = document.querySelector('.container')
const input = document.querySelector('.searchbar');
window.addEventListener('DOMContentLoaded', displayItems(imagesArray));

input.addEventListener('input',(e)=>{
  const imgCategory = imagesArray.filter(function(item){
      if(input.value === item.type){
        console.log(123)
      }
  })
})
// Event Listeners
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // console.log(e.currentTarget.dataset.name);
    const imgCategory = imagesArray.filter(function(img){
      const name = e.currentTarget.dataset.name
      const type = img.type;
      if(name === type){
        return img;
      }
    });
    if(e.currentTarget.dataset.name === 'all'){
        displayItems(imagesArray);
    }else{
      displayItems(imgCategory);
    }
  });
});
// function
function displayItems(imageItems){
  let displayImages = imageItems.map(function(image){
    return `<div class="img-container">
      <img src="${image.src}" class="img" alt="">
      <h3 id='name'>${image.name}</h3>
      <h3 id='price'>${image.price}</h3>
    </div>`
  })
  displayImages = displayImages.join('');
  parentContainer.innerHTML = displayImages;
}
