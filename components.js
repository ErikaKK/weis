class Top extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <div  class="flex items-center h-14 bg-black text-white justify-center">
                <p class="blink-text">MTW Limited Offer for $12.99</p>
            </div>
        `
    }
}
class Popup extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <div id="popup-div" class="bg-gray-200 z-50 bg-opacity-80 h-screen w-full fixed top-0 text-red-600 hidden">reveal</div>
        `
    }
}
class Header extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
      <header>
      <div id="logo-div" class="header-top relative flex">
        <div class="logo"><h1>Odin Recipes</h1></div>

        <div class="toggle-btn" onclick="burgerTrans(this);openMenu()">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <nav id="header-nav">
        <div class="header-nav_menu p-4">
          <ul class="header-nav_list">
            <li><a class="header-nav_list-item selected" href="">Home</a></li>
            <li><a class="header-nav_list-item" href="menu.html">Menu</a></li>
            <li>
              <a class="header-nav_list-item" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div class="language-selector">
          <a class="language selected" href="">EN</a>
          ｜
          <a class="language" href="">中文</a>
        </div>
      </nav>
    </header>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer>
      <div class="info">
        <div class="info-card">Address</div>
        <div class="info-card">Opening Hour</div>
        <div class="info-card">Contact Us</div>
      </div>
      <div class="info-horizontal-line"></div>
      <div class="info-bottom">
        <span>© Wei's Dumpling Hut</span><span>Designed By Erica Kong</span>
      </div>
    </footer>
        `
    }
}

customElements.define("app-top",Top)
customElements.define("app-popup",Popup)
customElements.define("app-header",Header)
customElements.define("app-footer",Footer)