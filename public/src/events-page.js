class EventsPage extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
                 <ion-content>
                   
                   <!-- Here starts the picture with the text above it -->
                 
                    <div class="events-header">
                      <div class="hero-text">
                       <h1>Events</h1>
                       <p>Your source to the local community. Find an event to volunteer and share the love. </p>
                      </div>
                     </div>
                   
                   
                  <br>
                  <!-- Here finishes the lines for the image with text over it -->
                   
                    
                  <!-- This class is for all the page, it is only used to create a space
                       between the image and the first content --> 
              <div class="container1">
                
                <div class="eventstext">
                    <p class="events">
                      Events are currently only open in Barcelona. Stay tuned for opening cities!   
                    </p>
                </div>
                
                
                
                <h1 class= "banner">
                  Events Coming Up
                </h1>
                
                
                
                <!-- These are all the cards within the page-->
                   <ion-card>
                   <a href="/#/events/:description/:id"><ion-img src="./assets/eventspage/cleaningbeach.jpeg"></ion-img>
                     <ion-card-header>
                          <ion-card-subtitle>May 10, Friday 10:00 at Barcelonneta</ion-card-subtitle> 
                           <ion-card-title>Cleaning Beach Day</ion-card-title>
                     </ion-card-header>
                     </a>
                      <ion-card-content>
                         10+ people attending
                  
                  <!-- The heart button-->      
                        <button class="heart-button">
                             <ion-icon name="heart" size="large"></ion-icon>
                        </button>
                        
                   <!-- The share button-->         
                       <ion-fab vertical="bottom" horizontal="end">
                       <ion-fab-button><ion-icon name="share"></ion-icon></ion-fab-button>
             
                       <ion-fab-list side="top">
                       <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
                       <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
                       <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>
                       </ion-fab-list>
             
                       </ion-fab>
                     </ion-card-content>
                   </ion-card>
                 
                
                
                
                 <ion-card>
                     <ion-card-header>
                       <ion-img src="./assets/eventspage/events_planting.jpg"></ion-img>
                          <ion-card-subtitle>May 15, Wednesday  16:00 at Parc Ciutadella</ion-card-subtitle> 
                           <ion-card-title>Cituadella’s 200th celebration </ion-card-title>
                     </ion-card-header>
                      <ion-card-content>
                         10+ people attending
                        
                        <button class="heart-button">
                             <ion-icon name="heart" size="large"></ion-icon>
                        </button>
                        
                        
                       <ion-fab vertical="bottom" horizontal="end">
                       <ion-fab-button><ion-icon name="share"></ion-icon></ion-fab-button>
             
                       <ion-fab-list side="top">
                       <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
                       <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
                       <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>
                       </ion-fab-list>
             
                       </ion-fab>
                     </ion-card-content>
                   </ion-card>
                
                
                
                
                  <ion-card>
                     <ion-card-header>
                       <ion-img src="./assets/eventspage/events_planting(1).jpg"></ion-img>
                          <ion-card-subtitle>June 2, Sunday  10:00 Plaza Gracia</ion-card-subtitle> 
                           <ion-card-title>Help us make the Plaza Gracia look pretty!</ion-card-title>
                     </ion-card-header>
                      <ion-card-content>
                         10+ people attending
                        <button class="heart-button">
                             <ion-icon name="heart" size="large"></ion-icon>
                        </button>
                        
                       <ion-fab vertical="bottom" horizontal="end">
                       <ion-fab-button><ion-icon name="share"></ion-icon></ion-fab-button>
             
                       <ion-fab-list side="top">
                       <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
                       <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
                       <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>
                       </ion-fab-list>
             
                       </ion-fab>
                     </ion-card-content>
                   </ion-card>
                
                
                
                
                     <ion-card>
                     <ion-card-header>
                       <ion-img src="./assets/eventspage/teacherclass.jpg"></ion-img>
                          <ion-card-subtitle>June 7, Friday  14:00 at Escola Sant Felip Neri</ion-card-subtitle> 
                           <ion-card-title>Tutor kids on how to reduce, reuse, recycle</ion-card-title>
                     </ion-card-header>
                      <ion-card-content>
                         2 people needed
                        
                        <button class="heart-button">
                             <ion-icon name="heart" size="large"></ion-icon>
                        </button>
                        
                        
                       <ion-fab vertical="bottom" horizontal="end">
                       <ion-fab-button><ion-icon name="share"></ion-icon></ion-fab-button>
             
                       <ion-fab-list side="top">
                       <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
                       <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
                       <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>
                       </ion-fab-list>
             
                       </ion-fab>
                     </ion-card-content>
                   </ion-card>
                <!--  End of all the diferent cards-->

             </div>

             <footer-element></footer-element>
             </ion-content>`;
	}
}

customElements.define('events-page', EventsPage);
