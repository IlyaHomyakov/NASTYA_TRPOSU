addToCart = (itemId) => {
    const item = localStorage.getItem(`item${itemId}`)

    if (item !== null) {
        let storageCart = JSON.parse(localStorage.getItem('cart'))
        let cartItemsCount = localStorage.getItem('cartItemsCount')
        const addedToCartModal = document.getElementById('added-to-cart-modal')
        const item = JSON.parse(localStorage.getItem(`item${itemId}`))

        document.getElementById(item.size).classList.remove('size-choice-selected')
        cartItemsCount = Number(cartItemsCount) + 1
        localStorage.setItem('cartItemsCount', cartItemsCount)
        addedToCartModal.classList.remove('modal-hidden')

        const cartCounter = document.getElementById('cart-counter')
        cartCounter.innerHTML = localStorage.getItem('cartItemsCount')

        for (let i = 0; i < storageCart.length; i++) {
            if (storageCart[i].size === item.size && storageCart[i].id === item.id) {
                console.log('you are trying to add an existing coat')
                storageCart[i].quantity += 1
                storageCart[i].totalPrice = storageCart[i].quantity * storageCart[i].price
                localStorage.setItem('cart', JSON.stringify(storageCart))
                localStorage.removeItem(`item${itemId}`)
                return
            }
        }
        item.totalPrice = item.quantity * item.price

        storageCart.push(item)
        localStorage.setItem('cart', JSON.stringify(storageCart))
        localStorage.removeItem(`item${itemId}`)
    } else {
        const chooseSizeModal = document.getElementById('choose-size-modal')
        chooseSizeModal.classList.remove('modal-hidden')
    }
}