class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
            <link rel="stylesheet" href="header/header-style.css">
            <div class="header">
            <img height="70" width="70" src = "./logo_transparent.png" alt="logo">
            <div class="header-right">
              <a class="active" href="/frontend/home">Home</a>
              <a href="/frontend/user-profile">My Account</a>
              <a href="/frontend/shopping-cart">My Cart</a>
              <a href="/frontend/map">Notifications</a>
              <a href="#leave">L</a>
            </div>
          </div>
          `;
    }
  }
  
  customElements.define("header-component", HeaderComponent);
  