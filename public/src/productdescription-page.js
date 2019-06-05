class Productdesc extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = ` <ion-app>
        
        
        <ion-menu side="start" menu-id="first">
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>Start Menu</ion-title>
            </ion-toolbar>
          </ion-header>
          </ion-menu>
              
              
              
              
              <!--Coding starts here-->
        <div class="ion-page" main>
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
      
              <ion-title color="tertiary">BONTERO</ion-title>
      
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
          
          <!---body starts here-->
          <ion-content >
            
             
        <!-- Back arrow . organic produce header and sort icon-->
         
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-icon class="backarrow" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>
          </ion-buttons>
          <ion-title class="orgheader">Avocado</ion-title>
          <ion-buttons slot="end">
            <ion-icon class="sort" ios="ios-funnel" md="md-funnel"></ion-icon>
          </ion-buttons>
        </ion-toolbar>
            
            
            
            <!-- Content starts here-->
            <div class="productdesc">
      
            <ion-card class="imagesizepd">
            <img class= "imagesize" src="./assets/productspage/avocado.jpg" />
          </ion-card>
                <div class= "pdproductdetail">
                  <h1 class="pname"> Avocado</h1>
                  <center>
                  <p class="pdproductname"><span style="text-decoration: line-through;">  2,00&euro; &nbsp;</span> 1,25&euro; 37% OFF</p>
                  <p>&nbsp;</p>
                    </center>
                </div>
              <center>
              <ion-button class="btn_quantity" color="success">-</ion-button>
                <input type="text" name="quantity" value="1" align="center">
                <ion-button class="btn_quantity" color="success">+</ion-button>
                <ion-button class="btn_add" color="success">ADD</ion-button>
            
                </center>
        <!-- Content end here-->
             </div>      
            
          <!-- impact footprint description--> 
            <ion-toolbar>
              <ion-buttons slot="start" class="btndesc">
                Description
              </ion-buttons>
                <center>
                  <label class="btnfootprint" align="center">Footprint</label>  <!--hereeeeee   ion segments-->
                
                </center>
              <ion-buttons slot="end" class="btnproducer">
               Producer
              </ion-buttons>
           </ion-toolbar>
        
              
              <!-- description--> 
            <p class="desccontent">
            Grown in the heartland of Spain, free from pesticides and other harmful chemicals. The Hass avocado contains many nutrients and is considered one of the greatest superfoods on Earth. It’s a perfect snack or addition to a meal that will keep your body happy and healthy. 
              <br><br>
              Produced in: Malaga, Spain by La Nucia Farms
            </p>
        
            
             <ion-footer color="primary"> 
               <p>
              Contact us <br> Privacy policy <br> Accessibility <br> Terms and use <br>2019 BONTERO. All rights reserved.
            </p>
            </ion-footer>
          </ion-content>
                 
           
         </div>
         <br><br>
      </ion-app>`;
	}
}

customElements.define('productdescription-page', Productdesc);
