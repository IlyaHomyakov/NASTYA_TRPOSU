const cart = []

if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('cartItemsCount', 0)
}
sideCartBackground = document.getElementById('side-cart-background')
closeCartButton = document.getElementById('close-cart-button')
openCartButton = document.getElementById('open-cart-button')
sideCart = document.getElementById('side-cart-background')
cartCounter = document.getElementById('cart-counter')

cartCounter.innerHTML = localStorage.getItem('cartItemsCount')

sideCartItems = document.getElementById('side-cart-items')

storageCart = JSON.parse(localStorage.getItem('cart'))

document.getElementById('side-cart-items').innerHTML = ''

for (let i = 0; i < storageCart.length; i++) {
    let totalCartPriceValue = document.getElementById('total-cart-price-value')
    totalCartPriceValue.innerHTML = Number(totalCartPriceValue.innerHTML) + Number(storageCart[i].price) * Number(storageCart[i].quantity)

    sideCartItems.innerHTML +=
        `
            <div class="flex side-cart-item">
                <div class="flex item-title-price">
                    <h4 class="item-title">Пальто ${storageCart[i].title}</h4>
                    <p class="item-size">${storageCart[i].size}</p>
                    <p class="side-cart-item-price">— ${storageCart[i].totalPrice} BYN</p>
                </div>

                <div class="flex item-counter">
                    <button class="decrement" onclick="decrement(${i})">-</button>
    
                    <input type="text" class="counter" id="${i}c" value="${storageCart[i].quantity}" readonly>
    
                    <button class="increment" onclick="increment(${i})">+</button>
                </div>
            </div>
        <hr>
        `
}


const decrement = cartOrder => {
    const storageCart = JSON.parse(localStorage.getItem('cart'))
    if (storageCart[cartOrder].quantity > 0) {
        let totalCartPriceValue = document.getElementById('total-cart-price-value')
        totalCartPriceValue.innerHTML = 0
        console.log('decrement item ' + storageCart[cartOrder].title)
        storageCart[cartOrder].quantity -= 1
        localStorage.setItem('cart', JSON.stringify(storageCart))
        let itemCounter = document.getElementById(`${cartOrder}c`)
        itemCounter.value = Number(itemCounter.value) - 1
        cartCounter.innerHTML -= 1
        let cartItemsCount = localStorage.getItem('cartItemsCount')
        cartItemsCount -= 1
        localStorage.setItem('cartItemsCount', cartItemsCount)
        updateOrderSummary(storageCart)
    }
}

const increment = cartOrder => {
    const storageCart = JSON.parse(localStorage.getItem('cart'))
    let totalCartPriceValue = document.getElementById('total-cart-price-value')
    totalCartPriceValue.innerHTML = 0
    console.log('increment item ' + storageCart[cartOrder].title)
    storageCart[cartOrder].quantity += 1
    localStorage.setItem('cart', JSON.stringify(storageCart))
    let itemCounter = document.getElementById(`${cartOrder}c`)
    itemCounter.value = Number(itemCounter.value) + 1
    cartCounter.innerHTML = Number(cartCounter.innerHTML) + 1
    let cartItemsCount = localStorage.getItem('cartItemsCount')
    cartItemsCount = Number(cartItemsCount) + 1
    localStorage.setItem('cartItemsCount', cartItemsCount)
    updateOrderSummary(storageCart)

}
const updateOrderSummary = storageCart => {
    for (let i = 0; i < storageCart.length; i++) {
        console.log(storageCart[i])
        let totalCartPriceValue = document.getElementById('total-cart-price-value')
        totalCartPriceValue.innerHTML = Number(totalCartPriceValue.innerHTML) + Number(storageCart[i].price) * Number(storageCart[i].quantity)
    }
}

openCartButton.onclick = e => {
    sideCart.classList.add('side-cart-background-on')
    sideCart.classList.add('side-cart-open')
    const storageCart = JSON.parse(localStorage.getItem('cart'))
    let sideCartItems = document.getElementById('side-cart-items')
    console.log(storageCart)
    sideCartItems.innerHTML = ''

    for (let i = 0; i < storageCart.length; i++) {
        console.log(storageCart[i])
        let totalCartPriceValue = document.getElementById('total-cart-price-value')

        totalCartPriceValue.innerHTML = Number(totalCartPriceValue.innerHTML) + Number(storageCart[i].price) * Number(storageCart[i].quantity)

        sideCartItems.innerHTML +=
            `
            <div class="flex side-cart-item">
                <div class="flex item-title-price">
                    <h4 class="item-title">Пальто ${storageCart[i].title}</h4>
                    <p class="item-size">${storageCart[i].size}</p>
                    <p class="side-cart-item-price">— ${storageCart[i].totalPrice} BYN</p>
                </div>

                <div class="flex item-counter">
                    <button class="decrement" onclick="decrement(${i})">-</button>
    
                    <input type="text" class="counter" id="${i}c" value="${storageCart[i].quantity}" readonly>
    
                    <button class="increment" onclick="increment(${i})">+</button>
                </div>
            </div>  
        <hr>
        `
    }
}

closeCartButton.onclick = e => {
    sideCartBackground.classList.remove('side-cart-background-on')
    sideCart.classList.remove('side-cart-open')

    sideCartItems.innerHTML = ''
    let totalCartPriceValue = document.getElementById('total-cart-price-value')
    totalCartPriceValue.innerHTML = 0
}
