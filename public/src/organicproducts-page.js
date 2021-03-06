class OrganicProducts extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		console.log(`Welcome to the Products`);
		this.innerHTML = `
        <ion-menu side="start" menu-id="first">
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>Start Menu</ion-title>
            </ion-toolbar>
          </ion-header>
          </ion-menu>
              
              
              
              
              
              <!--Coding starts here-->

          
          <!---body starts here-->
          
          <ion-content >
            
             
        <!-- Back arrow . organic produce header and sort icon-->
         
        <ion-toolbar class="padding-top">
          <ion-buttons slot="start">
            <ion-icon class="backarrow" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>
          </ion-buttons>
          <ion-title class="orgheader">Organic Produce</ion-title>
          <ion-buttons slot="end">
            <ion-icon class="sort" ios="ios-funnel" md="md-funnel"></ion-icon>
          </ion-buttons>
        </ion-toolbar>
            
           
          <!-------------Grid starts here-------------------------------------------------------------------------------------------------------->
           <ion-grid>
              
            <ion-row>
              <ion-col size="6">
                <ion-card class="cardpadding">
                <a href="/#/productdescription/:id"> <img class= "imagesize" src="./assets/productspage/avocado.jpg" /></a>
              <ion-card-header class="productname">
            
                <ion-card-title class="smallfont1">Avocado</ion-card-title>
              </ion-card-header></a>
                 
              <ion-card-content class="cancelprice">
                € 02.10       
              </ion-card-content>
              <ion-card-content class="lastprice">
                € 1.50       
              </ion-card-content>
              
          
                  
            </ion-card>
              </ion-col>
              
               <ion-col size="6">
                <ion-card class="cardpadding">
              <img class="imagesize" src="./assets/productspage/greenpepper.jpg" />
             <ion-card-header class="productname">
            
                <ion-card-title class="smallfont1">Pepper</ion-card-title>
              </ion-card-header>
                 
              <ion-card-content class="cancelprice">
                € 3.10 
              </ion-card-content>
                <ion-card-content class="lastprice">
                € 2.10       
               </ion-card-content>
            
                  </ion-card>
              </ion-col>
           
            </ion-row>
             
            </ion-grid> 
         
            <ion-grid>
              
            <ion-row>
              <ion-col size="6">
                <ion-card class="cardpadding">
              <img class= "imagesize" src="./assets/productspage/beet.jpg" />
              
                  <ion-card-header class="productname">
            
                <ion-card-title class="smallfont1">Beet</ion-card-title>
              </ion-card-header>
                 
              <ion-card-content class="cancelprice">
                € 4.10 
              </ion-card-content>
                <ion-card-content class="lastprice">
                € 3.75       
               </ion-card-content>
                
          
            </ion-card>
              </ion-col>
              
             
               <ion-col size="6">
                <ion-card class="cardpadding">
              <img class="imagesize" src="./assets/productspage/kale.jpg" />
             <ion-card-header class="productname">
            
                <ion-card-title class="smallfont1">Kale</ion-card-title>
              </ion-card-header>
                 
              <ion-card-content class="cancelprice">
                € 02.10 
              </ion-card-content>
              <ion-card-content class="lastprice">
                € 1.20       
               </ion-card-content>
                
            </ion-card>
              </ion-col>
              
              
            </ion-row>
             
            </ion-grid> 
            
            <!---------------------------------------------------------------->
      
            <ion-grid>
              
            <ion-row>
              <ion-col size="6">
                <ion-card class="cardpadding">
              <img class= "imagesize" src="./assets/productspage/pear.jpg" />
              <ion-card-header class="productname">
            
                <ion-card-title class="smallfont1">Pear</ion-card-title>
              </ion-card-header>
                 
              <ion-card-content class="cancelprice">
                € 9.23     
              </ion-card-content>
               <ion-card-content class="lastprice">
                € 8.20       
               </ion-card-content>
                
          
                  
            </ion-card>
              </ion-col>
              
               <ion-col size="6">
                <ion-card class="cardpadding">
              <img class="imagesize" src="./assets/productspage/orange.jpg" />
             <ion-card-header class="productname">
            
                <ion-card-title class="smallfont1">Orange</ion-card-title>
              </ion-card-header>
                 
              <ion-card-content class="cancelprice">
                € 5.20
              </ion-card-content>
                <ion-card-content class="lastprice">
                € 4.10       
               </ion-card-content>
                  
            </ion-card>
              </ion-col>
           
            </ion-row>
             
            </ion-grid> 
         
            <ion-grid>
              
            <ion-row>
              <ion-col size="6">
                <ion-card class="cardpadding">
              <img class= "imagesize" src="./assets/productspage/apple.jpg" />
              <ion-card-header class="productname">
            
                <ion-card-title class="smallfont1">Apple</ion-card-title>
              </ion-card-header>
                 
              <ion-card-content class="cancelprice">
                € 6.00 
              </ion-card-content>
                
                <ion-card-content class="lastprice">
                € 5.00       
               </ion-card-content>
          
            </ion-card>
              </ion-col>
              
             
               <ion-col size="6">
                <ion-card class="cardpadding">
              <img class="imagesize" src="./assets/productspage/cucumber.jpg" />
             <ion-card-header class="productname">
            
                <ion-card-title class="smallfont1">Cucumber</ion-card-title>
              </ion-card-header>
                 
              <ion-card-content class="cancelprice">
                € 7.80 
              </ion-card-content>
              <ion-card-content class="lastprice">
                € 6.00       
               </ion-card-content>
                  
            </ion-card>
              </ion-col>
              
              
            </ion-row>
             
            </ion-grid> 
            
             <footer-element></footer-element>
           </ion-content>

          `;
	}
}

customElements.define('organicproducts-page', OrganicProducts);
