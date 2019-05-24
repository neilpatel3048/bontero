class CategoriesPage extends HTMLElement {
    constructor(){
        super();
    }


    connectedCallback(){
        console.log("Hey I am categories page!!");
        this.innerHTML = "I'm an avocado"


    }

}

customElements.define("categories-page",CategoriesPage);