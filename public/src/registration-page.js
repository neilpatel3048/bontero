class RegistrationPage extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        console.log(`Hey I'am sa and  my cart are wet!!`);
        this.innerHTML =`Registrate`
    }
}

customElements.define('registration-page', RegistrationPage)