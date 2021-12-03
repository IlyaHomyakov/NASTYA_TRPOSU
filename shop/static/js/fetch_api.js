confirmButton = document.getElementById('confirm-button')
const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
const order = JSON.parse(localStorage.getItem('cart'))


confirmButton.onclick = e =>

    fetch('http://127.0.0.1:8000/confirm-order/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
        },
        body: JSON.stringify(order)
    }).then(r => console.log(r))

