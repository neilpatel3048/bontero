class Productdesc extends HTMLElement {
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
              
              
              
              
              <!--Coding starts here-->
       
          <!---body starts here-->
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
              <ion-button class="btn_quantity" color="success">-</ion-button>
                <input type="text" name="quantity" value="1" align="center">
                <ion-button class="btn_quantity" color="success">+</ion-button>
                <ion-button class="btn_add" color="success">ADD</ion-button>
            
                </center>
        <!-- Content end here-->
             </div>      
            
             <ion-segment>
             <ion-segment-button color="#ffffff">
                <ion-label>Description</ion-label>
             </ion-segment-button>
   
            <a href="/#/productfootprint/:id"> <ion-segment-button color="#ffffff">
                 <ion-label>Footprint</ion-label>
             </ion-segment-button></a>
   
             <a href="/#/productimpact/:id"><ion-segment-button >
             <ion-label>Producer</ion-label>
          </ion-segment-button>
        </a>  
           
            </ion-segment>
        
              
              <!-- description--> 
            <p class="desccontent">
            Grown in the heartland of Spain, free from pesticides and other harmful chemicals. The Hass avocado contains many nutrients and is considered one of the greatest superfoods on Earth. It’s a perfect snack or addition to a meal that will keep your body happy and healthy. 
              <br><br>
              Produced in: Malaga, Spain by La Nucia Farms
            </p>
        
            <footer-element></footer-element>
          </ion-content>
                 `;
	}
}

customElements.define('productdescription-page', Productdesc);
