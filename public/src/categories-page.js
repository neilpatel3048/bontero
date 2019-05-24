class Categoriespage extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        console.log(`Hey I'am gome and  my avacodos are wet!!`);
        this.innerHTML =`CAtegory!!!`
    }
}

customElements.define('categories-page', Categoriespage)