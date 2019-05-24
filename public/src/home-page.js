class HomePage extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        
        this.innerHTML =` <ion-header>
        <ion-toolbar color="primary">
            <!--Icon on left of bontero-->
         <ion-buttons slot="start">
             <ion-button>
                 <ion-icon name="menu" color="tertiary"></ion-icon>
             </ion-button>
             <ion-button>
                 <ion-icon slot="icon-only" name="search" color="tertiary"></ion-icon>
             </ion-button>
             </ion-buttons>
               <!--Icon on right of bontero-->  
             <ion-title color="tertiary">BONTERO</ion-title>  
                 <!--Icon on left of bontero-->        
               <ion-buttons slot="end">
                 <ion-button color="tertiary">
                   <ion-icon slot="icon-only" name="contact"></ion-icon>
                 </ion-button>
                 <ion-button color="tertiary">
                   <ion-icon name="cart"></ion-icon>
                 </ion-button>
               </ion-buttons>
             </ion-toolbar>
                 </ion-header> `

    }
}

customElements.define('home-page', HomePage)
//connectedCallback
//disconnectedCallback
//attributedChangedCallback
//adoptedcallback