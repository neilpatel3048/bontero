

class HomePage extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        console.log(`Heyyy I'm Home Page!!!`);
        this.innerHTML = `Heyyy HOLA`
    }
}


customElements.define('home-page', HomePage);
