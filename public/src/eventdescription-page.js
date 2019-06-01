class EventsPage extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        this.innerHTML = `
        <ion-content>
        <div class="eventDescHead"> 
            <ion-fab class="heart" vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button><ion-icon name="heart"></ion-icon></ion-fab-button>
            </ion-fab>
    
                <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button><ion-icon name="share"></ion-icon></ion-fab-button>
                <ion-fab-list side="bottom">
                <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
                <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
                <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>
                </ion-fab-list>
                </ion-fab> 
            </div>
            <h1 class="banner">
                Cleaning Beach Day
            </h1>
            <div class="volunteerBtn">
                <ion-button padding expand="block" color="secondary">Volunteer</ion-button>
            </div>
    
    
    <br>
    <hr style="height:1px; border:none; color:#000; background-color:#000; width:80%; text-align:center; margin: 0 auto;">
    <br> 
    
            <div class="container2">
        <ul>
       <li> <span><ion-icon class="eventDesc" name="time" size="medium" vertical="bottom"></ion-icon> July 10 2019, 10:00am </span></li>
       <li><span> <ion-icon class="eventDesc" name="pin"></ion-icon> Meet at Barceloneta metro station</span></li>
        </ul>
    
        <div class="details">
            <h4>Details</h4>
            <br>
            <h5>Join us as we get together on our monthly clean up of San Sebastia beach. We want to keep our beach beautiful and special for locals and visitors to this beautiful part of town! Come for a few hours to clean, meet new friends, and enjoy some refreshments afterwards. </h5>
            <br>
            <h5>Note: Where comfortable clothes and sandals</h5>
            <br>
            <h5>See you there! </h5>
        </div>
        <br>
        <hr style="height:1px; border:none; color:#000; background-color:#000; width:80%; text-align:center; margin: 0 auto;">
        <br>
        
        <div class="volunteerBtn">
            <ion-button padding expand="block" color="secondary">Volunteer</ion-button>
        </div>
            </div>
    
    </ion-content>
    </ion-app>`

    }
}

customElements.define('events-page', EventsPage)