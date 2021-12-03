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
sideCartFooter = document.getElementById('side-cart-footer')
sideCartTitle = document.getElementById('side-cart-title')
orderSummary = document.getElementById('order-summary')
cartCounter.innerHTML = localStorage.getItem('cartItemsCount')
// orderSummary.innerHTML = 0
sideCartItems = document.getElementById('side-cart-items')

storageCart = JSON.parse(localStorage.getItem('cart'))

document.getElementById('side-cart-items').innerHTML = ''

orderConfirmedModal = document.getElementById('order-confirmed-modal')
customerDataInputBlock = document.getElementById('customer-data-input-block')

for (let i = 0; i < storageCart.length; i++) {
    let totalCartPriceValue = document.getElementById('total-cart-price-value')
    totalCartPriceValue.innerHTML = 0
    totalCartPriceValue.innerHTML = Number(totalCartPriceValue.innerHTML) + Number(storageCart[i].price) * Number(storageCart[i].quantity)
    sideCartItems.innerHTML = ''

    if (storageCart[i].quantity !== 0) {

        sideCartItems.innerHTML +=
            `
            <div class="flex side-cart-item" id="cart-item-info-${i}">
                <div class="flex item-title-price">
                    <h4 class="item-title">Пальто ${storageCart[i].title}</h4>
                    <p class="item-size">${storageCart[i].size}</p>
                    <p class="side-cart-item-price">— ${storageCart[i].totalPrice} BYN</p>
                </div>

                <div class="flex item-counter" >
                    <button class="decrement" onclick="decrement(${i})">-</button>
    
                    <input type="text" class="counter" id="${i}c" value="${storageCart[i].quantity}" readonly>
    
                    <button class="increment" onclick="increment(${i})">+</button>
                </div>
            </div>
        `
    }

}
if (sideCartItems.innerHTML !== '') {
    sideCartTitle.innerHTML = 'Корзина'
    customerDataInputBlock.style.display = 'flex'
    sideCartFooter.style.display = 'flex'

} else {
    sideCartTitle.innerHTML = 'Корзина пуста'
    customerDataInputBlock.style.display = 'none'
    sideCartFooter.style.display = 'none'

}


const decrement = cartOrder => {
    let storageCart = JSON.parse(localStorage.getItem('cart'))
    let itemCounter = document.getElementById(`${cartOrder}c`)

    if (storageCart[cartOrder].quantity > 0) {
        let totalCartPriceValue = document.getElementById('total-cart-price-value')
        totalCartPriceValue.innerHTML = 0
        console.log('decrement item ' + storageCart[cartOrder].title)
        storageCart[cartOrder].quantity -= 1
        localStorage.setItem('cart', JSON.stringify(storageCart))
        itemCounter.value = Number(itemCounter.value) - 1
        cartCounter.innerHTML -= 1
        let cartItemsCount = localStorage.getItem('cartItemsCount')
        cartItemsCount -= 1
        localStorage.setItem('cartItemsCount', cartItemsCount)
        updateOrderSummary(storageCart)
    }
    if (storageCart[cartOrder].quantity === 0) {
        console.log('got zero')
        document.getElementById(`cart-item-info-${cartOrder}`).remove()
        let cartCount = localStorage.getItem('cartItemsCount')
        if (cartCount === '0') sideCartTitle.innerHTML = 'Корзина пуста'
    }

    if (localStorage.getItem('cartItemsCount') === '0') {
        sideCartTitle.innerHTML = 'Корзина пуста'
        customerDataInputBlock.style.display = 'none'
        sideCartFooter.style.display = 'none'
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
    let totalCartPriceValue = document.getElementById('total-cart-price-value')
    totalCartPriceValue.innerHTML = 0
    for (let i = 0; i < storageCart.length; i++) {
        console.log(storageCart[i])

        totalCartPriceValue.innerHTML = Number(totalCartPriceValue.innerHTML) + Number(storageCart[i].price) * Number(storageCart[i].quantity)

        if (storageCart[i].quantity !== 0) {

            sideCartItems.innerHTML +=
                `
            <div class="flex side-cart-item" id="cart-item-info-${i}">
                <div class="flex item-title-price">
                    <h4 class="item-title">Пальто ${storageCart[i].title}</h4>
                    <p class="item-size">${storageCart[i].size}</p>
                    <p class="side-cart-item-price">— ${storageCart[i].totalPrice} BYN</p>
                </div>

                <div class="flex item-counter" >
                    <button class="decrement" onclick="decrement(${i})">-</button>
    
                    <input type="text" class="counter" id="${i}c" value="${storageCart[i].quantity}" readonly>
    
                    <button class="increment" onclick="increment(${i})">+</button>
                </div>
            </div>
        `
        }
    }

    if (sideCartItems.innerHTML !== '') {
        sideCartTitle.innerHTML = 'Корзина'
        customerDataInputBlock.style.display = 'flex'
        sideCartFooter.style.display = 'flex'

    } else {
        sideCartTitle.innerHTML = 'Корзина пуста'
        customerDataInputBlock.style.display = 'none'
        sideCartFooter.style.display = 'none'
    }
}

closeCartButton.onclick = e => {
    sideCartBackground.classList.remove('side-cart-background-on')
    sideCart.classList.remove('side-cart-open')

    sideCartItems.innerHTML = ''
    sideCartTitle.innerHTML = 'Корзина'
    let totalCartPriceValue = document.getElementById('total-cart-price-value')
    totalCartPriceValue.innerHTML = 0
}
