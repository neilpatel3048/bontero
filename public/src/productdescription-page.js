class ProductdescriptionPage extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        console.log(`Heyyy I'm Product Page!!!`);
        this.innerHTML = `    <ion-content >
      
       
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
                <img class= "imagesize" src="https://firebasestorage.googleapis.com/v0/b/bontero-50f6a.appspot.com/o/avocado.jpg?alt=media&token=6a141a17-7c6b-4b86-a44d-9ebc1b2dbaa9" />
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
               Producer
              </ion-buttons>
           </ion-toolbar>
        
              
              <!-- description--> 
            <p class="desccontent">
            Grown in the heartland of Spain, free from pesticides and other harmful chemicals. The Hass avocado contains many nutrients and is considered one of the greatest superfoods on Earth. It’s a perfect snack or addition to a meal that will keep your body happy and healthy. 
              <br><br>
              Produced in: Malaga, Spain by La Nucia Farms
            </p>`
    }
}


customElements.define('productdescription-page', ProductdescriptionPage);