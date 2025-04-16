const burger = document.querySelector('.burger_menu');
const menu = document.querySelector('.burger')
let searchMobile = document.querySelector('.search_button')
let mobileInp = document.querySelector('.for-mobile')
let closeLink = document.querySelector('.close_link')
let headerLink = document.querySelector('.header_link')
let arrivalContainer = document.querySelector('.new_arrivals-product')
let topSellingContainer = document.querySelector('.top_selling-product')
let wripper = document.querySelector('.testi-wripper')

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

  

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    verified: true,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    verified: true,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    verified: true,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
  },
  {
    id: 4,
    name: "Emily R.",
    rating: 5,
    verified: true,
    text: "Shop.co has completely transformed my wardrobe. The clothes are trendy, comfortable, and affordable. I always get compliments when I wear them!"
  },
  {
    id: 5,
    name: "Daniel T.",
    rating: 5,
    verified: true,
    text: "Great customer service and even better clothing. Everything fits true to size, and I love how easy it is to shop by style. Highly recommend!"
  },
  {
    id: 6,
    name: "Lily P.",
    rating: 5,
    verified: true,
    text: "The attention to detail in every piece is amazing. I’ve never felt more confident in my outfits. Thank you, Shop.co!"
  },
  {
    id: 7,
    name: "Michael B.",
    rating: 5,
    verified: true,
    text: "Fast shipping, high-quality materials, and stylish choices. I’ve already made three purchases and will definitely be back for more."
  },
  {
    id: 8,
    name: "Olivia C.",
    rating: 5,
    verified: true,
    text: "I used to dread online shopping, but Shop.co made it so simple and enjoyable. Their collection is always fresh and fashion-forward."
  },
  {
    id: 9,
    name: "Noah W.",
    rating: 5,
    verified: true,
    text: "Every item I’ve bought from Shop.co has become a staple in my wardrobe. Great fit, top-notch fabric, and modern designs."
  }
];

function printReviews(arr) {
  wripper.innerHTML = ''
  arr.forEach((review) => {
    let card = document.createElement('div')
    card.classList.add('card-list','swiper-slide')
    card.innerHTML = `
      <div class="testi-card">
          <div class="rating-div">
            ${printStars(review.rating)}
          </div>
          <p class="card-name">${review.name} ${review.verified ? '<img src="icons/green-icon.svg" alt="">' : null} </p>
          <div class='card-text-div' >
            <p class="card-text" >${review.text}</p>
          </div>
      </div>
    `
    wripper.append(card)
  })
}

printReviews(reviews)
