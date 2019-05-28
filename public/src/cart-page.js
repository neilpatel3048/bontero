class CartPage extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        console.log(`Welcome to the cart`);
        this.innerHTML =`cart`
    }
}

customElements.define('cart-page', CartPage)