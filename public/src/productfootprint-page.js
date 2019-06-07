class FootprintPage extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
        this.innerHTML = `
        <ion-content>
         
        <ion-toolbar class="padding-top" >
          <ion-buttons slot="start">
            <ion-icon class="backarrow" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>
          </ion-buttons>
          <ion-title class="orgheader">Avocado</ion-title>
          <ion-buttons slot="end">
            <ion-icon class="sort" ios="ios-funnel" md="md-funnel"></ion-icon>
          </ion-buttons>
        </ion-toolbar>
            

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
            <div class="desccontent">
                  <ion-list>
                          <ion-item>
                                  <ion-icon src="../assets/productspage/feather.svg"></ion-icon>
                            <ion-label>Organic and Additive Free</ion-label>
                          </ion-item>
                          <ion-item>
                              <ion-icon src="../assets/productspage/nopesticides.svg"></ion-icon>
                            <ion-label>No pesticides have been used</ion-label>
                          </ion-item>
                          <ion-item>
                              <ion-icon src="../assets/productspage/noplastic.svg"></ion-icon>
                            <ion-label>No plastic involved in the process</ion-label>
                          </ion-item>
                          <ion-item>
                              <ion-icon src="../assets/productspage/Vector.svg"></ion-icon>
                            <ion-label>120 liters of water per Avocado
                                  <ion-progress-bar value="0.8" color="secondary"></ion-progress-bar>
                            </ion-label>
                          </ion-item>
                          <ion-item>
                              <ion-icon src="../assets/productspage/Group.svg"></ion-icon>
                            <ion-label>500 kilometers from your city
                                  <ion-progress-bar value="1" color="secondary"></ion-progress-bar>
                            </ion-label>
                          </ion-item>
                        </ion-list>
              </div>

              <footer-element></footer-element>
          </ion-content>
        `;
	}
}

customElements.define('productfootprint-page', FootprintPage);