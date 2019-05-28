class Productdesc extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        console.log(`Hey I'am gome and  my avacodos are wet!!`);
        this.innerHTML =`heyasdasyy`
    }
}

customElements.define('productdescription-page', Productdesc);