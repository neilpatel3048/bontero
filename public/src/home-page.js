

class HomePage extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        console.log(`Heyyy I'm Home Page!!!`);
        this.innerHTML = `        <ion-content>
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
    <img src="https://cdn.glitch.com/62308f07-7e5c-4e0b-b423-e20d18091413%2Ffresh%20produce.jpg?1557852582588" style="width:100%;">
    <div class="text-block">
      <h4>Shop our products</h4>
      <ion-icon name="arrow-dropright"></ion-icon>
    </div>
  </div>
        
            <div class="container">
              <img src="https://cdn.glitch.com/62308f07-7e5c-4e0b-b423-e20d18091413%2Fvolunteer.jpg?1558100516328" style="width:100%;">
              <div class="text-block"> 
      <h4>Volunteer at local event</h4>
    </div>
  </div>
        
              <div class="container">
                <img src="https://cdn.glitch.com/62308f07-7e5c-4e0b-b423-e20d18091413%2Fblog_recycle.jpg?1558100706884" style="width:100%;">
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
          <img src="https://cdn.glitch.com/62308f07-7e5c-4e0b-b423-e20d18091413%2Fseed.jpg?1558102672861" style="width:100%;">
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
      <img class= "imagesize" src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/avocado.jpg?alt=media&token=6a141a17-7c6b-4b86-a44d-9ebc1b2dbaa9" />
      <ion-card-header class="productname">
    
        <ion-card-title>Avocado</ion-card-title>
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
      <img class="imagesize" src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/onions.png?alt=media&token=59663134-a7b3-4f8f-94b6-d4cbf28bf64a" />
     <ion-card-header class="productname">
    
        <ion-card-title>Avocado</ion-card-title>
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
          <img class= "imagesize" src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/avocado.jpg?alt=media&token=6a141a17-7c6b-4b86-a44d-9ebc1b2dbaa9" />
          <ion-card-header class="productname">
        
            <ion-card-title>Clean Beach</ion-card-title>
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
          <img class="imagesize" src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/Group%205.png?alt=media&token=2daf90be-2798-4f79-b338-0cbae2fd1983" />
         <ion-card-header class="productname">
        
            <ion-card-title>Plant trees</ion-card-title>
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
        </div>`
    }
}


customElements.define('home-page', HomePage);
