class HomePage extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        
         this.innerHTML =` <ion-app>
         <ion-content>
           <div class="hero-image">
       <div class="hero-text">
         <h1>Be the Change you want to see</h1>
         <p>Shop Responsibly</p>
         <p>Act with love</p>
         <p>Change the world</p>
       </div>
     </div>
           <div>    
           <p>
             A new ecommerce and lifestyle platform for the eco-conscious
           </p>
           </div>
           
           <div class="container">
       <img src="./assets/homepage/freshproduce.jpg">
       <div class="text-block">
         <h4>Shop our products</h4>
         <ion-icon name="arrow-dropright"></ion-icon>
       </div>
     </div>
           
               <div class="container">
                 <img src="./assets/homepage/volunteer.jpg">
                 <div class="text-block"> 
         <h4>Volunteer at local event</h4>
       </div>
     </div>
           
                 <div class="container">
                   <img src="./assets/homepage/blog_recycle.jpg">
                   <div class="text-block"> 
         <h4>Read our blog</h4>
       </div>
     </div>
           
           <div>    
           <p>
     Sign up to get discounts, rewards, and be part of the eco community here.       
           </p>
           </div>
           
           <div class="container">
             <img src="./assets/homepage/seed.jpg" style="width:100%;">
             <div class="text-block"> 
         <h4>Our mission and vision</h4>
       </div>
     </div>
           
           <div>
             <h2>
               Featured Products
             </h2>
           </div>
     
    <!-------------Grid starts here-------------------------------------------------------------------------------------------------------->
      <ion-grid>
         
       <ion-row>
         <ion-col size="6">
           <ion-card class="cardpadding">
         <img class= "imagesize" src="./assets/productspage/avocado.jpg" />
         <ion-card-header class="productname">
       
           <ion-card-title class="smallfont1">Avocado</ion-card-title>
         </ion-card-header>
            
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
         <img class="imagesize" src="./assets/productspage/soap.jpg" />
        <ion-card-header class="productname">
       
           <ion-card-title class="smallfont1">Soap</ion-card-title>
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
    
           
           <div>
             <h2>
               Featured Events
             </h2>
           </div>
     
        <ion-grid>
             
           <ion-row>
             <ion-col size="6">
               <ion-card class="cardpadding">
             <img class= "imagesize" src="./assets/eventspage/cleaningbeach.jpeg" />
             <ion-card-header class="productname">
           
               <ion-card-title  class="smallfont">Clean Beach</ion-card-title>
             </ion-card-header>
                
             <ion-card-content class="date">
              May 10 
             </ion-card-content>
             <ion-card-content class="place">
              Cituadella
             </ion-card-content>
               
         
                 
           </ion-card>
             </ion-col>
             
              <ion-col size="6">
               <ion-card class="cardpadding">
             <img class="imagesize" src="./assets/eventspage/events_planting.jpg" />
            <ion-card-header class="productname">
           
               <ion-card-title  class="smallfont">Plant trees</ion-card-title>
             </ion-card-header>
                
             <ion-card-content class="date">
               June 1
             </ion-card-content>
             <ion-card-content class="place">
              Gracia
             </ion-card-content>
           </ion-card>
             </ion-col>
          
           </ion-row>
            
           </ion-grid> 
           
           
           <div>
             <h2>
               Featured Events
             </h2>
           </div>

           
     </ion-content>
     
     </ion-app>`

    }
}

customElements.define('home-page', HomePage)
//connectedCallback
//disconnectedCallback
//attributedChangedCallback
//adoptedcallback