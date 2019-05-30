class SearchPage extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        console.log(`Hey I'am gome and  my checkout are wet!!`);
        this.innerHTML =`     
        <ion-app>
    
            <ion-content color="primary"> 
                <div class="btncancel" style="background-color: #ffca36">
                  
                        <ion-buttons  slot="end">
            
                                <ion-button href="home.html" color="tertiary">
                                        <ion-icon name="close"></ion-icon>
                         </ion-button>
                        </ion-buttons>
      
                    </div>

          
        
            <div class="divsearch">
                    <ion-searchbar show-cancel-button cancel-button-text="Custom Cancel"></ion-searchbar>

            </div>
               
            <div class="searchtextdiv">
                <a class="searchtext" href="organicproducts.html">Popular Product</a>
                <br>
                <br>
                <br>
                <a class="searchtext" href="productdescription.html"> Avacado</a>
                <br>
                <br>
                <br>
                <a class="searchtext" href="productdescription.html"> Shampoo</a>
            </div>    
            </ion-content>
    </ion-app>
        `
    }
}


customElements.define('search-page', SearchPage);