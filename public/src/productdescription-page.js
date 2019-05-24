class ProductdescriptionPage extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        console.log(`Heyyy I'm Product Page!!!`);
        this.innerHTML = `Heyyy HOLA`
    }
}


customElements.define('productdescription-page', ProductdescriptionPage);