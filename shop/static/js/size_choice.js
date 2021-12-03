selectSize = (size, itemId, itemTitle, itemPrice) => {
    const button = document.getElementById(size)
    const sizeButtons = document.getElementsByClassName('size-choice')

    button.classList.add('size-choice-selected')

    for (let i = 0; i < sizeButtons.length; i++) {
        if (sizeButtons[i].id !== size) {
            sizeButtons[i].classList.remove('size-choice-selected')
        }
    }

    const itemObject = {
        id: itemId,
        size: size,
        quantity: 1,
        title: itemTitle,
        price: itemPrice,
        totalPrice: 0
    }

    localStorage.setItem(`item${itemId}`, JSON.stringify(itemObject))
}