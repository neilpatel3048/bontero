class CategoriesPage extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        console.log(`Heyyy I'm Categories Page!!!`);
        this.innerHTML = `<ion-content>
      
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
           <img src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/Organicproduce.png?alt=media&token=4f1ccca6-ebb2-4ec6-a23e-089e5394e168" />
           <ion-card-header>
             <ion-card-title>Organic Produce</ion-card-title>
           </ion-card-header>
       </ion-card>
      
      
      <ion-card>
           <img src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/dry%20goods.png?alt=media&token=ebd931b5-2a03-4102-9d11-87cfa0d30593" />
           <ion-card-header>
             <ion-card-title>Dry Goods</ion-card-title>
           </ion-card-header>
       </ion-card>
      
      
       <ion-card>
           <img src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/drinksanddairy.png?alt=media&token=438ca155-58b4-4e8b-acb6-75c55c7d9375" />
           <ion-card-header>
             <ion-card-title>Drinks and Dairy</ion-card-title>
           </ion-card-header>
       </ion-card>
      
      
      <ion-card>
           <img src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/home%20and%20beauty.png?alt=media&token=da648bd9-da9c-4925-a3f4-5b576950b2f2" />
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
               <img class= "imagesize" src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/almonds.jpg?alt=media&token=1296dbf7-3714-428b-b927-84b9c31895bc" />
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
           <img class="imagesize" src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/shampoo%20bar.jpg?alt=media&token=64def9e3-27e1-4411-9ccd-20e22f4c3f76" />
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
               <img class= "imagesize" src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/almonds.jpg?alt=media&token=1296dbf7-3714-428b-b927-84b9c31895bc" />
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
           <img class="imagesize" src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/cotton%20produce%20bag.jpg?alt=media&token=2bcea879-9ffe-4b3e-b338-c654d60f964e" />
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


customElements.define('categories-page', CategoriesPage);