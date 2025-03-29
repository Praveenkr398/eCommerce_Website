const addCartButtons = document.querySelectorAll('.add-cart')
addCartButtons.forEach(button => {
    button.addEventListener('click', event =>{
        const productBox = event.target.closest('.product-list')
        addtoCart(productBox)
    })
})

const cartContent = document.querySelector('.cart-content')
const addtoCart = productBox =>{
    const productImgSrc = productBox.querySelector('img').src
    const productTitle = productBox.querySelector('.ptitle').textContent
    const productPrice = productBox.querySelector('.price').textContent

    const cartBox = document.createElement('div')
    cartBox.classList.add('cart-box')
    cartBox.innerHTML = `
     <img src="${productImgSrc}" class="cart-img">
                <div class="cart-detail">
                    <h2 class="cart-product-title ff-montserrat bold-500">${productTitle}</h2>
                    <span class="cart-price">${productPrice}</span>
                    <div class="cart-quantity">
                        <button id="descrement"><i class="fa-solid fa-minus"></i></button>
                        <span class="number">1</span>
                        <button id="increment"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <i class="fa-solid fa-trash cart-remove"></i>
    `
cartContent.appendChild(cartBox)

cartBox.querySelector('.cart-remove').addEventListener('click',() =>{
    cartBox.remove()
    updateTotalPrice()
    updateCount(-1)
})

cartBox.querySelector('.cart-quantity').addEventListener('click' , event  => {
    const numberelemnt =cartBox.querySelector('.number')
    const descrementbutton = cartBox.querySelector('#descrement')
    let quantity = numberelemnt.textContent;

    if(event.target.id === 'descrement' && quantity > 1){
        quantity--;
        if(quantity === 1){
            descrementbutton.style.color= '#99'
        }
    }else if(event.target.id === 'increment'){
        quantity++;
        descrementbutton.style.color = '#333'
    }
    numberelemnt.textContent = quantity
    updateTotalPrice()
})
updateCount(1)
updateTotalPrice()
}

const updateTotalPrice = ()=>{
    const totalPriceELemt = document.querySelector('.total-price')
    const cartBoxes = cartContent.querySelectorAll('.cart-box')
    let total = 0;
    cartBoxes.forEach(cartbox =>{
        const priceElemt = cartbox.querySelector('.cart-price')
        const quantityElemt = cartbox.querySelector('.number')
        const price =priceElemt.textContent.replace('$',"")
        const quantity = quantityElemt.textContent
        total += price * quantity;
    })

    totalPriceELemt.textContent = `$${total}`
}

let cartItemCount = 0
const updateCount = change =>{
    const cartBadge = document.querySelector('.cart-badge')
    cartItemCount += change
    if(cartItemCount > 0){
        cartBadge.style.visibility = 'visible'
        cartBadge.textContent = cartItemCount
    }
    else{cartBadge.style.visibility = 'hidden'
        cartBadge.textContent = ''
    }
}