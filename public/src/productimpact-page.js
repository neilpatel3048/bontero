class ProductImpact extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
          <ion-menu side="start" menu-id="first">
           <ion-header>
             <ion-toolbar color="primary">
               <ion-title>Start Menu</ion-title>
             </ion-toolbar>
           </ion-header>
           </ion-menu> 
               
         
           <ion-content >
             
              
         <!-- Back arrow . organic produce header and sort icon-->
          
         <ion-toolbar class="padding-top">
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
               <ion-button class="btn_quantity" id="btn-remove" color="success">-</ion-button>
                <input type="text" name="quantity" id="product_quantity" value="1" align="center">
                <ion-button class="btn_quantity" id="btn-add" color="success">+</ion-button>
                <ion-button class="btn_add" color="success" (click)="presentAlert()">ADD</ion-button>
            
             
                 </center>
         <!-- Content end here-->
              </div>      
             
           <!-- impact footprint description--> 
                          <ion-segment>
                      <a href="/#/productdescription/:id"><ion-segment-button color="#ffffff">
                        <ion-label>Description</ion-label>
                      </ion-segment-button>
                      </a>

                    <a href="/#/productfootprint/:id"> <ion-segment-button color="#ffffff">
                          <ion-label>Footprint</ion-label>
                      </ion-segment-button></a>

                      <ion-segment-button >
                      <ion-label>Producer</ion-label>
                  </ion-segment-button>
                  </ion-segment>  
         
               
               <!-- description--> 
              <img src="./assets/farmer.jpg"> 
             <div class="producercontent">
                   <p class="producertext"> La Nucia Farms is a family-owned business based in outskirts of Malaga. They are committed to producing the finest possible fresh vegetables and fruits which has been grown using the most sustainable and environmentally-friendly way possible.</p> 
                
                   <p class="producertext"> Their approach so far has produced fruits and vegetables that are fresher, tastier, and more nutritious!</p>
             </div>
             
             <img class="farmerimage" src="./assets/farmaward.svg">

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

customElements.define('productimpact-page', ProductImpact);
//connectedCallback
//disconnectedCallback
//attributedChangedCallback
//adoptedcallback
