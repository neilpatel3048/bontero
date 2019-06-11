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
              <ion-button class="btn_quantity" id="btn-remove" color="success">-</ion-button>
                <input type="text" name="quantity" id="product_quantity" value="1" align="center">
                <ion-button class="btn_quantity" id="btn-add" color="success">+</ion-button>
                <ion-button class="btn_add" color="success" (click)="presentAlert()">ADD</ion-button>
            
            
                </center>
        <!-- Content end here-->
             </div>      

             
             <ion-segment>
          <a href="/#/productdescription/:id"><ion-segment-button color="#ffffff">
            <ion-label>Description</ion-label>
          </ion-segment-button>
          </a>

        <ion-segment-button color="#ffffff">
              <ion-label>Footprint</ion-label>
          </ion-segment-button>
          </a>
         
          <a href="/#/productimpact/:id">  <ion-segment-button >
          <ion-label>Producer</ion-label>
      </ion-segment-button>
      </ion-segment>  </a>



          <!-- impact footprint description--> 
      
        
           
              
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

        const inputQuantity = document.querySelector('#product_quantity');

        const addButton = document.querySelector('#btn-add');
    
        const removeButton = document.querySelector('#btn-remove');
    
        addButton.addEventListener('click', function() {
        
        let val = parseInt(inputQuantity.value);
        
        inputQuantity.value = val+1

        
            });
        
        
            removeButton.addEventListener('click', function() {
        
        let val = parseInt(inputQuantity.value);
        
        inputQuantity.value = val-1
        
            });
	}
}

customElements.define('productfootprint-page', FootprintPage);