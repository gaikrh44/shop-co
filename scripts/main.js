const burger = document.querySelector('.burger_menu');
const menu = document.querySelector('.burger')
let searchMobile = document.querySelector('.search_button')
let mobileInp = document.querySelector('.for-mobile')
let closeLink = document.querySelector('.close_link')
let headerLink = document.querySelector('.header_link')
let arrivalContainer = document.querySelector('.new_arrivals-product')
let topSellingContainer = document.querySelector('.top_selling-product')

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    menu.classList.toggle('open') 
    mobileInp.classList.remove('come')
})

searchMobile.addEventListener('click', ()=>{
    mobileInp.classList.toggle('come')
    mobileInp.value = ''
})

closeLink.addEventListener('click', () => {
    headerLink.style.display = 'none'
})


const newArrivals = [
    // NEW ARRIVALS
    {
      id: 1,
      category: "New Arrivals",
      name: "T-shirt with Tape Details",
      price: 120,
      oldPrice: null,
      rating: 4.5,
      discount: null, // %
      image: "../images/image-5.png",
    },
    {
      id: 2,
      category: "New Arrivals",
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      rating: 3.5,
      discount: 20, // %
      image: "../images/image-6.png",
    },
    {
      id: 3,
      category: "New Arrivals",
      name: "Checkered Shirt",
      price: 180,
      oldPrice: null,
      rating: 4.5,
      discount: null, // %
      image: "../images/image-7.png",
    },
    {
      id: 4,
      category: "New Arrivals",
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 4.5,
      discount: 30, // %
      image: "../images/image-8.png",
    },
    
  ];


const topSelling = [
    {
        id: 5,
        category: "Top Selling",
        name: "Vertical Striped Shirt",
        price: 212,
        oldPrice: 232,
        rating: 5.0,
        discount: 20, // %
        image: "../images/image-1.png",
      },
      {
        id: 6,
        category: "Top Selling",
        name: "Courage Graphic T-shirt",
        price: 145,
        oldPrice: null,
        rating: 4.0,
        discount: null, // %
        image: "../images/image-2.png",
      },
      {
        id: 7,
        category: "Top Selling",
        name: "Loose Fit Bermuda Shorts",
        price: 80,
        oldPrice: null,
        rating: 3.0,
        discount: null, // %
        image: "../images/image-3.png",
      },
      {
        id: 8,
        category: "Top Selling",
        name: "Faded Skinny Jeans",
        price: 210,
        oldPrice: null,
        rating: 4.5,
        discount: null, // %
        image: "../images/image-4.png",
      }
]


function printStars(rating) {
    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 >= 0.5;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += `<img src="../icons/star-icon.svg" class="star-icon" />`;
    }

    if (halfStar) {
        starsHTML += `<img src="../icons/half-star-icon.svg" class="star-icon" />`;
    }

    return starsHTML;
}


function printProductCards(arr, root) {
    root.innerHTML = ''
    arr.forEach((prod) => {
        let card = document.createElement('div')
        card.innerHTML = `
            <div class="img-div" >
                <img src=${prod.image} />
            </div>
            <div class="card-content" >
                <h2 class='card-title'>${prod.name}</h2>
                <div class="rating-div" >
                    ${printStars(prod.rating)}
                    <span>${prod.rating}/5</span>
                </div>
                <div class="prices" >
                    <h3>${prod.price} $</h3>
                    ${prod.oldPrice ? `<p class="old-price">${prod.oldPrice} $</p>` : ''}
                    ${prod.discount ? `<button class="discount-btn">${prod.discount}%</button>` : ''} 
                </div>
            </div>
        `
        card.classList.add('product-card')
        root.appendChild(card)
    })
}


printProductCards(newArrivals, arrivalContainer)
printProductCards(topSelling, topSellingContainer)

  