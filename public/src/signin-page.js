class SignIn extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		console.log(`Hey I'am gome and  my cart are wet!!`);
		this.innerHTML = `Sign in`;
	}
}

customElements.define('signin-page', SignIn);
