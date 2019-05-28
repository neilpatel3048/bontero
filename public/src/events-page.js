class EventsPage extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        console.log(`Hey I'am gome and  my avacodos are wet!!`);
        this.innerHTML =`Events`
    }
}

customElements.define('events-page', EventsPage)