class Categoriespage extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        
        this.innerHTML =`
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
     <div class="container1">
       
       
       <!-- These are all the cards within the page-->
       <ion-card>
            <img src="./assets/categoriespage/organicproduce.jpg" />
            <ion-card-header>
              <ion-card-title>Organic Produce</ion-card-title>
            </ion-card-header>
        </ion-card>
       
       
       <ion-card>
            <img src="./assets/categoriespage/drygoods.jpg" />
            <ion-card-header>
              <ion-card-title>Dry Goods</ion-card-title>
            </ion-card-header>
        </ion-card>
       
       
        <ion-card>
            <img src="./assets/categoriespage/drinksanddairy.jpg" />
            <ion-card-header>
              <ion-card-title>Drinks and Dairy</ion-card-title>
            </ion-card-header>
        </ion-card>
       
       
       <ion-card>
            <img src="./assets/categoriespage/homeandbeauty.jpg" />
            <ion-card-header>
              <ion-card-title>Home and Beauty</ion-card-title>
            </ion-card-header>
        </ion-card>
      <!--  End of the categories diferent cards-->
       
       
      <!-- Here starts the part for the products in the category page--> 
       <h1>
         Newest Arrivals
       </h1>
       
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
                <ion-card-title>Coton Bag</ion-card-title>
              </ion-card-header>       
                  <ion-card-content class="cancelprice">
                      € 02.10 
                  </ion-card-content>
          </ion-card>
        </ion-col>
        </ion-row>   
       </ion-grid> 
       
       
       
       
       
       <h1>
         Our Featured Products
       </h1>
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
                <ion-card-title>Coton Bag</ion-card-title>
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
        </ion-content>`
    }
}

customElements.define('categories-page', Categoriespage)