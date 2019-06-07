class SideMenu extends HTMLElement {
	constructor() {
		super();
	}

	closeButton() {
		console.log('close-button-pressed');
	}


	connectedCallback() {
		const css = `
		<style>
			.sidenav {
			height: 100%;
			width: 0;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			background-color: #FFDD80;
			overflow-x: hidden;
			transition: 0.5s;
			padding-top: 60px;
			font-family: Avenir;
		}
		  
			.sidenav a {
			padding: 8px 8px 8px 32px;
			text-decoration: none;
			font-size: 25px;
			color: #000000;
			display: block;
			transition: 0.3s;
		}
		  
			.sidenav a:hover {
			color: #009E71;
		}
		  
			.sidenav .closebtn {
		 	position: absolute;
			top: 0;
			right: 25px;
			font-size: 36px;
			margin-left: 50px;
		}
		  
			@media screen and (max-height: 450px) {
			.sidenav {padding-top: 15px;}
			.sidenav a {font-size: 18px;}
		 </style> 
		  `;

		this.innerHTML = `
			${css}  
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="menuToggle()">&times;</a>
  <a  onclick="menuToggle()" href="#/organicproducts">Shop</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>


		`;
	}
}

customElements.define('side-menu', SideMenu);
