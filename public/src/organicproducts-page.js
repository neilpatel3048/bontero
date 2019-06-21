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
              
              
              
              
              
            

          
         
          
          <ion-content >
            
             
       
         
        <ion-toolbar class="padding-top">
          <ion-buttons slot="start">
            <ion-icon class="backarrow" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>
          </ion-buttons>
          <ion-title class="orgheader">Organic Produce</ion-title>
          <ion-buttons slot="end">
            <ion-icon class="sort" ios="ios-funnel" md="md-funnel"></ion-icon>
          </ion-buttons>
        </ion-toolbar>
            
           
           <ion-grid>
              
            <ion-row id="featured-products">
        

              
            </ion-row>
             
            </ion-grid> 
            
             <footer-element></footer-element>
           </ion-content>
           `;

           function template (data){
            return  `
            <ion-card class="cardpadding">
            <img class="imagesize" src="./assets/productspage/${data.product_name}.jpg" />
            <ion-card-header class="productname"> 
            <ion-card-title>${data.product_name}</ion-card-title>
            </ion-card-header> 
            <ion-card-content class="cancelprice">
            € ${data.product_price}
            </ion-card-content>
            <ion-card-content class="lastprice">
                € ${data.product_price}  
               </ion-card-content>
            </ion-card>
            `
            }
            
            const fPContainers = document.querySelector('#featured-products');

            const organicProducts = fetch('http://localhost:5001/bontero-50f6a/us-central1/getProducts')
            .then(response => response.json())
            .then(data => {
            data.forEach((item) => {
            const card = document.createElement('ion-col');
            card.setAttribute('size', 6);
            card.innerHTML = template(item);
            fPContainers.appendChild(card , fPContainers.nextSibling)
           
            });
            });
    }
}

customElements.define('organicproducts-page', OrganicProducts);
