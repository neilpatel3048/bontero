class ProductImpact extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `<ion-app>
        
        
         <ion-menu side="start" menu-id="first">
           <ion-header>
             <ion-toolbar color="primary">
               <ion-title>Start Menu</ion-title>
             </ion-toolbar>
           </ion-header>
           </ion-menu>
               
               
               
               
               <!--Coding starts here-->
         <div class="ion-page" main>
 
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
                Impact
               </ion-buttons>
            </ion-toolbar>
         
               
               <!-- description--> 
             <p class="desccontent">
                   La Nucia Farms is a family-owned business based in outskirts of Malaga. They are committed to producing the finest possible fresh vegetables and fruits which has been grown using the most sustainable methods. 
                   They are committed to operate in the most environmentally-friendly way possible. Their approach so far has produced fruits and vegetables that are fresher, tastier, and more nutritious!
             </p>

           </ion-content>
                  
            
          </div>
        
          </ion-app>`;
	}
}

customElements.define('productimpact-page', ProductImpact);
//connectedCallback
//disconnectedCallback
//attributedChangedCallback
//adoptedcallback
