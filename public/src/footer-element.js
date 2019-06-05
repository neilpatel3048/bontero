class Footer extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        this.innerHTML =`
        <ion-footer> 
        <h3 class="connectwithus">Connect With Us</h3>
        <div class="socialgroup">
          <ion-icon class="media" name="logo-facebook" color="secondary" ></ion-icon>
          <ion-icon class="media" name="logo-instagram" color="secondary" ></ion-icon>
          <ion-icon class="media" name="logo-twitter" color="secondary" ></ion-icon>
          <ion-icon class="media" name="logo-youtube" color="secondary" ></ion-icon>
          </div>
            <p>
           Privacy policy 
           <br> 
           Accessibility 
           <br> 
           Terms and use 
           <br>
           2019 BONTERO. All rights reserved.
         </p>
         </ion-footer>`
    }
}


customElements.define('footer-element', Footer);