class CartPage extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        console.log(`Welcome to the cart`);
        this.innerHTML =` <ion-app>

      
        <ion-menu side="start" menu-id="first">
          <ion-header>
            <ion-toolbar color="secondary">
              <ion-title>Start Menu</ion-title>
            </ion-toolbar>
          </ion-header>
        </ion-menu>
            <!--Coding starts here-->
        <ion-header>
          <ion-toolbar color="primary">
            <!--Icon on left of bontero-->
            <ion-buttons slot="start">
              <ion-button>
                <ion-icon name="menu" color="tertiary"></ion-icon>
              </ion-button>
              <ion-button>
                <ion-icon slot="icon-only" name="search" color="tertiary"></ion-icon>
              </ion-button>
            </ion-buttons>   
            <!--Icon on right of bontero-->    
            <ion-title><img class="logosize" src="./assets/bonterologo.svg" alt="Bontero"></ion-title>
            <!--Icon on left of bontero-->       
                <ion-buttons slot="end">
                  <ion-button color="tertiary">
                    <ion-icon slot="icon-only" name="contact"></ion-icon>
                  </ion-button>
                  <ion-button color="tertiary">
                    <ion-icon name="cart"></ion-icon>
                  </ion-button>
                </ion-buttons>
          </ion-toolbar>
        </ion-header>
    
       <ion-content>
          <ion-toolbar>
              <ion-buttons slot="start">
                <ion-icon class="backarrow" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>
              </ion-buttons>
              <ion-title class="orgheader">Shopping Cart</ion-title>
             
            </ion-toolbar>
         
         <div class="progressbar">
             <img class="progressbarimg" src="../assets/cart/Progress 1.svg">
         </div>
         
         
         
         
         
         
         
         
         
         
         
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
  
        </ion-content>
      </ion-app>`
    }
}

customElements.define('cart-page', CartPage)