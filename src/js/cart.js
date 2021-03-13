const cart = document.getElementById('link-to-cart');
const cartLink = document.getElementById('link-for-cart');
const headerCart = document.querySelector('.header__navbar-cart');

cartLink.addEventListener('click', function() {
    let cartItems = cart.getAttribute('data-cart');
    let cartItemsNum = parseInt(cartItems);
    let cartItemsMore = cartItemsNum + 1;
    headerCart.classList.add('active');
    setTimeout(() => {
        headerCart.classList.remove('active');
    }, 5000);
    
    return cart.setAttribute('data-cart', cartItemsMore);
});

const productItems = document.querySelectorAll('.cart__table-row');

function quantityRes() {
    productItems.forEach( function(item) {
        let quantity = item.querySelector('[data-quantity]'),
            quantityMin = item.querySelector('[data-min]'),
            quantityPlus = item.querySelector('[data-plus]'),
            quantityResult,
            productCost = item.querySelector('[data-cost]'),
            productPrice = item.querySelector('[data-price]').innerHTML;
            productCost.innerHTML = productPrice;

            cartTotalFunc ();

        quantityMin.addEventListener('click', () => {
            quantityResult = quantity.innerHTML - 1;

            if (parseInt(quantityResult) == 0) {
                item.remove();
            }

            return productCost.innerHTML = parseInt((quantityResult * productPrice)),
             quantity.innerHTML = quantityResult, productCost, cartTotalFunc ();
        });

        quantityPlus.addEventListener('click', () => {
            quantityResult = parseInt(quantity.innerHTML) + 1;

            return productCost.innerHTML = parseInt((quantityResult * productPrice)),
            quantity.innerHTML = quantityResult, productCost, cartTotalFunc ();
        });
    })
}

quantityRes();

function cartTotalFunc () {
    const cartTotal = document.querySelector('[data-cart-total]');
    const allCost = document.querySelectorAll('[data-cost]');
    const massAllCost = Array.from(allCost);
    let massResCost = [];

    massAllCost.forEach( (e) => {
        return massResCost.push(e.innerHTML);
    })

    let costSum = 0;

    for (let i = 0; i < massResCost.length; i++) {
         costSum = costSum + parseInt(massResCost[i]);
    }

    cartTotal.innerHTML = ` ${costSum}$`;
}
