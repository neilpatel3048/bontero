class SignIn extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		console.log(`Hey I'am gome and  my cart are wet!!`);
		this.innerHTML = `
		<ion-content >

  <div padding>
    
      <span class="backtocart"><ion-icon name="arrow-back"></ion-icon> back to cart
      </span>
      </div>

    <div>
        <p>
            Are you a member? Log in to check out
        </p>
    </div>
    
    <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input></ion-input>
    </ion-item>
    
    <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input></ion-input>
    </ion-item>
    
    <ion-button padding expand="block" color="secondary">Sign In and Checkout</ion-button>
    
    <div>
        <p>
            or
        </p>
    </div>
    
    <button class="loginBtn loginBtn--facebook">
        Login with Facebook
    </button>
    
    <button class="loginBtn loginBtn--google">
        Login with Google
    </button>
    <div>
        <p>
            <u>forgot your username and password?</u>
        </p>
    </div>
    <div class="customer">
        <h2>
          New Customer?
        </h2>
        <p>
            You can create an account later.
            <br>Accounts allow you to check out faster.
        </p>
    </div>
    <ion-button padding expand="block" color="secondary">Checkout as guest</ion-button>
        <footer-element></footer-element>
</ion-content>`;
	}
}

customElements.define('signin-page', SignIn);
