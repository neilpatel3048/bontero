class Categoriespage extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
       <ion-content>
        
         <!-- Here starts the picture with the text above it -->
     <header>
       <div class="categories-header">
        <div class="hero-text">
        <h1>Shop</h1>
        <p>Shop our freshest and local products delivered to your doorstep </p>
        </div>
      </div>
    </header>  
     <br>
         <!-- Here finishes the lines for the image with text over it -->
         
         
         
         <!-- This class is for all the page, it is only used to create a space
              between the image and the first content --> 
     <div class="container2">
       
       <span id="categories-api"></span>
       
       
       
      <!-- Here starts the part for the products in the category page--> 
       <h2>
         Newest Arrivals
       </h2>
       
        <ion-grid>
          <ion-row>
            <ion-col size="6">
              <ion-card class="cardpadding">
                <img class= "imagesize" src="./assets/productspage/almonds.jpg" />
                  <ion-card-header class="productname">
                    <ion-card-title>Almonds</ion-card-title>
                  </ion-card-header>
                    <ion-card-content class="cancelprice">
                        € 00.90
                    </ion-card-content>
              </ion-card>
            </ion-col>
            
         <ion-col size="6">
          <ion-card class="cardpadding">
            <img class="imagesize" src="./assets/productspage/cottonproducebag.jpg" />
               <ion-card-header class="productname">  
                <ion-card-title>Cotton Bag</ion-card-title>
              </ion-card-header>       
                  <ion-card-content class="cancelprice">
                      € 02.10 
                  </ion-card-content>
          </ion-card>
        </ion-col>
        </ion-row>   
       </ion-grid> 
       
       
       
       
       
       <h2>
         Our Featured Products
       </h2>
         <ion-grid>
          <ion-row id="featured-products">
            <ion-col size="6">
              <ion-card class="cardpadding">
                <img class= "imagesize" src="./assets/productspage/almonds.jpg" />
                  <ion-card-header class="productname">
                    <ion-card-title>Almonds</ion-card-title>
                  </ion-card-header>
                    <ion-card-content class="cancelprice">
                        € 00.90
                    </ion-card-content>
              </ion-card>
            </ion-col>
            
         <ion-col size="6">
          <ion-card class="cardpadding">
            <img class="imagesize" src="./assets/productspage/cottonproducebag.jpg" />
               <ion-card-header class="productname">  
                <ion-card-title>Cotton Bag</ion-card-title>
              </ion-card-header>       
                  <ion-card-content class="cancelprice">
                      € 02.10 
                  </ion-card-content>
          </ion-card>
        </ion-col>
        </ion-row>   
       </ion-grid> 
       <!-- Here finishes the part for the products showcased in category-->
       
      </div> 
      <footer-element></footer-element>
        </ion-content>`;

        function template(data){
          return `
          <a href="/#/organicproducts"> <img src="../assets/categoriespage/${data.category_name}.jpg" />
               <ion-card-header>
                 <ion-card-title>${data.category_name}</ion-card-title>
               </ion-card-header></a>
         `
        }

        const catCategories = document.querySelector('#categories-api');

        const categories = fetch('http://localhost:5001/bontero-50f6a/us-central1/getCategories')
          .then(response => response.json())
          .then(data => {
            
            data.forEach((item) => { 
              console.log(item)
              const card = document.createElement('ion-card');
              card.innerHTML = template(item);
              catCategories.appendChild(card , catCategories.nextSibling);
            });
        });
      }
    }

customElements.define('categories-page', Categoriespage);
