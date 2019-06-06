class FooterComponent extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
        this.innerHTML = ` 
        <ion-footer> 
          <h4 class="connectwithus">
            Connect with us
          </h4>
          <div class="socialgroup">
            <ion-icon class="socialmedia" name="logo-facebook" color="secondary"></ion-icon>
            <ion-icon class="socialmedia" name="logo-instagram" color="secondary"></ion-icon>
            <ion-icon class="socialmedia" name="logo-twitter" color="secondary"></ion-icon>
            <ion-icon class="socialmedia" name="logo-youtube" color="secondary"></ion-icon>
          </div>
          
              <p>
             Contact us <br> Privacy policy <br> Accessibility <br> Terms and use <br>2019 BONTERO. All rights reserved.
           </p>
          </ion-footer>
        `;
	}
}

customElements.define('footer-element', FooterComponent);