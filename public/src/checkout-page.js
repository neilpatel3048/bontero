class CheckoutPage extends HTMLElement 
{
	constructor() 
	{
		super();
	}
	connectedCallback() 
	{
		console.log(`Hey I'am gome and  my checkout are wet!!`);
		this.innerHTML = `checkout`;
	}
}




customElements.define('checkout-page', CheckoutPage);