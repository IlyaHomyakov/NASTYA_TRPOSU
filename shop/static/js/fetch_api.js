confirmButton = document.getElementById('confirm-button')
const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
const order = JSON.parse(localStorage.getItem('cart'))

let customerNameInput = document.getElementById('customer-name-input')
let customerPhoneInput = document.getElementById('customer-phone-input')

customerNameInput.onchange = e => {
    customerNameInput.classList.remove('customer-data-input-invalid')
}
customerPhoneInput.onchange = e => {
    customerPhoneInput.classList.remove('customer-data-input-invalid')
}

confirmButton.onclick = e => {

    if (customerNameInput.value === '') {
        customerNameInput.placeholder = 'Введите ФИО'
        customerNameInput.classList.add('customer-data-input-invalid')
    }
    if (customerPhoneInput.value === '') {
        customerPhoneInput.placeholder = 'Введите номер телефона'
        customerPhoneInput.classList.add('customer-data-input-invalid')
    } else {

        let orderObject = {
            customer: {
                name: customerNameInput.value,
                phone: customerPhoneInput.value
            },
            cart: order
        }


        fetch('http://127.0.0.1:8000/confirm-order/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(orderObject)
        }).then(r => console.log(r))
    }


}