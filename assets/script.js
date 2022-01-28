function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
}

let quantity = 1

const numbDown = document.querySelector('#quantity-down')
const numbUp = document.querySelector('#quantity-up')

numbDown.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})

numbUp.addEventListener('click', function(){
        quantity++
    updateQuantity(`Quantity: ${quantity}`)
})