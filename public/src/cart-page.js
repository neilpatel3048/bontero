class CartPage extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		console.log(`Welcome to the cart`);
		this.innerHTML = ` 
        <ion-content>

        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button href= "productdescription.html">
              <ion-icon class="backarrow1" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>
              </ion-button>
            </ion-buttons>
            <ion-title class="orgheader">Organic Produce</ion-title>
            </ion-toolbar>
            
     <center>
     <div class="progressbar">
         <img class="progressbarimg" src="../assets/cart/Progress 1.svg">
     </div>
  </center>
    
     <div class="cardproduct1">
      
       
          <ion-grid>
            
              <ion-row>
                  <ion-col class="col1cart" size="3">
                     <ion-card class= "imagesizecart" >
                       <img src="./assets/productspage/avocado.jpg" />
                      </ion-card>
                  </ion-col>
                  
                   <ion-col size="3" class="col2cart">
                    <h5>Avocado</h5>
                  </ion-col>
                 
                  <ion-col size="5" class="col3cart">
                      <ion-button color="secondary" class="btnsizecart1">+</ion-button>
                      <input class="inputcart" type="text" name="quantity" value="1" align="center">
                      <ion-button color="secondary" class="btnsizecart2">-</ion-button>
                      <ion-row class="cartprice">
                          <ion-card-content class="lastprice">
                                  8.20   €     
                          </ion-card-content>
                  </ion-row>
                    </ion-col>
                </ion-row>
           
          </ion-grid> 
      </div>
      <div class="cardproduct2">
          <ion-grid>  
           <ion-row>
              <ion-col class="col1cart" size="3">
                 <ion-card class= "imagesizecart" >
                   <img src="./assets/productspage/beet.jpg">
                  </ion-card>
                  
              </ion-col>
              
               <ion-col size="3" class="col2cart">
                <h5>Beet</h5>
              </ion-col>
             
              <ion-col size="5" class="col3cart">
                  <ion-button color="secondary" class="btnsizecart1">+</ion-button>
                  <input class="inputcart" type="text" name="quantity" value="1" align="center">
                  <ion-button color="secondary" class="btnsizecart2">-</ion-button>
                  <ion-row class="cartprice">
                          <ion-card-content class="lastprice">
                                  € 8.20       
                          </ion-card-content>
                  </ion-row>
                </ion-col>
            </ion-row>
      
           </ion-grid> 
      </div>

 
   
      <ion-grid>
        <ion-row>
          <ion-col>
            <input class="promocode" type="text" name="quantity" value="1" align="center">
          </ion-col>
          <ion-col>
            <ion-button class="btnpromo" color="secondary" >Apply</ion-button> 
          </ion-col>
         
        </ion-row>
      </ion-grid> 

     
    <ion-toolbar >
   
      <ion-lable class="toolbarpadl" slot="start">Subtotal</ion-lable>
      <ion-lable class="toolbarpadr" slot="end">€ 10.20</ion-lable>
    </ion-toolbar>

    <ion-button class="btnquickpay" onclick="pay()"expand="full" color="primary">QUICKPAY</ion-button>
    <ion-button class="btncheckout" expand="full" color="secondary">CHECKOUT</ion-button>

    <ion-footer> 
    <div class="socialgroup1">
        <ion-icon class="socialmedia" name="logo-facebook" color="secondary"></ion-icon>
        <ion-icon class="socialmedia" name="logo-instagram" color="secondary"></ion-icon>
        <ion-icon class="socialmedia" name="logo-twitter" color="secondary"></ion-icon>
        <ion-icon class="socialmedia" name="logo-youtube" color="secondary"></ion-icon>
      </div>
   
          <p class="pfooter">
         Contact us <br> Privacy policy <br> Accessibility <br> Terms and use <br>2019 BONTERO. All rights reserved.
       </p>
       </ion-footer>
    </ion-content>
        `;
	}
}

customElements.define('cart-page', CartPage);
