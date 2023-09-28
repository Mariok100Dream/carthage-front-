export const css_navbar3 = `

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&amp;family=Play:wght@400;700&amp;family=Syne:wght@400;500;600;700&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,600&amp;display=swap");

.ul-li ul {
  margin: 0;
  padding: 0;
}
.ul-li ul li {
  list-style: none;
  display: inline-block;
}

.ul-li-block ul {
  margin: 0;
  padding: 0;
}
.ul-li-block ul li {
  display: block;
  list-style: none;
}

/*---------------------------------------------------- */
/*Header area*/
/*----------------------------------------------------*/
.in-header-NavbarType3-section {
  top: 0;
  left: 0%;
  z-index: 10;
  width: 100%;
  position: absolute;
}
.in-header-NavbarType3-section.sticky-on {
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 0;
  position: fixed;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-name: slideInDown;
          animation-name: slideInDown;
  background-color: #171717;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
  -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1);
}
.in-header-NavbarType3-section.sticky-on .in-header-NavbarType3-top-content-area {
  display: none;
}
.in-header-NavbarType3-section.sticky-on .in-header-NavbarType3-top-content {
  display: none !important;
}
.in-header-NavbarType3-section.sticky-on.header-style-one_NavbarType3 .sticky-logo {
  display: block;
  margin-right: 40px;
}
.in-header-NavbarType3-section .in-sidebar-btn {
  width: 15px;
  height: 15px;
  cursor: pointer;
  position: relative;
}
.in-header-NavbarType3-section .in-sidebar-btn span {
  width: 6px;
  height: 6px;
  position: absolute;
}

.in-header-NavbarType3-section .in-sidebar-btn span:nth-child(2) {
  top: 0;
  right: 0;
  background-color: #000000;
}
.in-header-NavbarType3-section .in-sidebar-btn span:nth-child(3) {
  left: 0;
  bottom: 0;
  background-color: #000000;
}
.in-header-NavbarType3-section .in-sidebar-btn span:nth-child(4) {
  right: 0;
  bottom: 0;
  background-color:#FFB966;
}
.in-header-NavbarType3-section .in-main-navigation-area .navbar-nav {
  display: inherit;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown {
  position: relative;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown:after {
  top: 2px;
  right: -14px;
  font-size: 14px;
  color: #fff;
  font-weight: 300;
  content: "";
  font-weight: 900;
  position: absolute;
  font-family: "Font Awesome 5 Pro";
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
  clip: inherit;
  -webkit-transform: scaleY(1);
  -khtml-transform: scaleY(1);
  transform: scaleY(1);
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu {
  left: 0;
  top: 48px;
  z-index: 100;
  margin: 0px;
  padding: 20px 0;
  height: auto;
  min-width: 250px;
  display: block;
  border: none;
  border-radius: 0;
  position: absolute;
  opacity: 0;
  background: #fff;
  border-radius: 2px;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
  transform-origin: 0 0 0;
  -webkit-transform-origin: 0 0 0;
  -ms-transform-origin: 0 0 0;
  -o-transform-origin: 0 0 0;
  text-align: left;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.07);
          box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.07);
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu .dropdown-menu {
  top: 0px;
  left: 100%;
  -webkit-transform: scaleY(0) !important;
          transform: scaleY(0) !important;
  opacity: 0 !important;
  transform-origin: 0 0 0;
  -webkit-transform-origin: 0 0 0;
  -ms-transform-origin: 0 0 0;
  -o-transform-origin: 0 0 0;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu .dropdown-menu a {
  font-size: 14px;
  font-weight: 400;
  color: #101010;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu .dropdown-menu a:hover {
  color: #FFB966;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu li {
  display: block;
  margin: 0 !important;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu li:last-child {
  border-bottom: none;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu li:after {
  top: 10px;
  color: #000;
  right: 15px;
  -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu li:hover .dropdown-menu {
  top: 0;
  -webkit-transform: scaleY(1) !important;
          transform: scaleY(1) !important;
  opacity: 1 !important;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu a {
  width: 100%;
  display: block;
  position: relative;
  padding: 10px 30px !important;
  color: #101010 !important;
  font-size: 15px !important;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu a:before {
  display: none;
}

.in-header-NavbarType3-section .in-megamenu {
  position: static !important;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu {
  left: 0;
  right: 0;
  top: 100%;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  max-width: 1170px;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-megamenu-item {
  margin: 10px;
  position: relative;
  -webkit-box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
          box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-megamenu-item .in-megamenu-item-btn:before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  content: "";
  position: absolute;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
  background-color: rgba(0, 0, 0, 0.5);
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-megamenu-item h3 {
  color: #000;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding-top: 15px;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-megamenu-item:hover .in-megamenu-item-btn:before {
  opacity: 1;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-megamenu-item:hover .in-menu-btn-grp {
  top: 50%;
  opacity: 1;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-menu-btn-grp {
  left: 0;
  top: 60%;
  right: 0;
  z-index: 2;
  opacity: 0;
  position: absolute;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-menu-btn-grp a {
  width: 100px;
  color: #fff !important;
  margin: 0 auto;
  white-space: nowrap;
  margin-bottom: 8px;
  font-size: 16px !important;
  font-weight: 500 !important;
  padding: 8px 10px !important;
  background: linear-gradient(to right,#0163ea,#00bcf9);;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-menu-btn-grp a:hover {
  color: #fff !important;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-menu-btn-grp a:last-child {
  margin-bottom: 0;
}
.in-header-NavbarType3-section.header-style-one_NavbarType3 {
  background-color: #fff;
}
.in-header-NavbarType3-section.header-style-one_NavbarType3 .header-top-content {
  padding: 23px 0px;
}


.in-header-NavbarType3-section.header-style-one_NavbarType3 .in-header-NavbarType3-main-menu-wrapper {
  padding: 15px 0px;
  background: linear-gradient(to right,#0163ea,#00bcf9);;
}
.in-header-NavbarType3-section.header-style-one_NavbarType3 .sticky-logo {
  display: none;
}



.in-header-NavbarType3-section.header-style-two {
  background-color: #262e3d;
}
.in-header-NavbarType3-section.header-style-two .in-header-NavbarType3-top-content {
  padding: 12px 145px;
  margin-bottom: 20px;
  border-bottom: 1px solid #3c4351;
}
.in-header-NavbarType3-section.header-style-two .header-top-info li {
  color: #fff;
  font-size: 15px;
  margin-right: 80px;
  position: relative;
}
.in-header-NavbarType3-section.header-style-two .header-top-info li i {
  margin-right: 10px;
}
.in-header-NavbarType3-section.header-style-two .header-top-info li:last-child {
  margin-right: 0;
}
.in-header-NavbarType3-section.header-style-two .header-top-info li:last-child:before {
  display: none;
}
.in-header-NavbarType3-section.header-style-two .header-top-info li:before {
  top: 0;
  width: 1px;
  content: "";
  right: -40px;
  height: 20px;
  position: absolute;
  background-color: #515864;
}
.in-header-NavbarType3-section.header-style-two .header-top-social span {
  color: #fff;
  font-size: 15px;
}
.in-header-NavbarType3-section.header-style-two .header-top-social li {
  margin-left: 20px;
}
.in-header-NavbarType3-section.header-style-two .header-top-social li a {
  color: #fff;
  font-size: 15px;
}

.in-header-NavbarType3-section.header-style-two .in-header-NavbarType3-main-menu-wrapper {
  padding: 0px 145px;
}


.in-header-NavbarType3-section.header-style-four .in-header-NavbarType3-main-menu-content {
  z-index: 1;
  padding: 28px 25px;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.in-header-NavbarType3-section.header-style-four .in-header-NavbarType3-main-menu-content:before, .in-header-NavbarType3-section.header-style-four .in-header-NavbarType3-main-menu-content:after {
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: linear-gradient(to right,#0163ea,#00bcf9);;
}
.in-header-NavbarType3-section.header-style-four .in-header-NavbarType3-main-menu-content:before {
  top: auto;
  bottom: -5px;
}
.in-header-NavbarType3-section.header-style-four .in-header-NavbarType3-main-menu-content:after {
  background: #fff;
}
.in-header-NavbarType3-section.header-style-four .in-main-navigation-area li a {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
}
.in-header-NavbarType3-section.header-style-four .in-main-navigation-area li {
  margin: 0px 22px;
}


.in-header-NavbarType3-section.header-style-four.sticky-on {
  background-color: #fff;
}
.in-header-NavbarType3-section.header-style-four.sticky-on .in-header-NavbarType3-main-menu-content:before {
  display: none;
}
.in-header-NavbarType3-section.header-style-four.sticky-on .in-header-NavbarType3-main-menu-content {
  z-index: 1;
  padding: 15px 0px;
}
.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-top-content {
  color: #fff;
  font-size: 16px;
  line-height: 18px;
  padding: 10px 145px;
  font-family: var(--meta-font);
  background-color: var(--theme-color);
}

.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-top-content .top-slug-more img {
  margin-right: 5px;
}
.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-top-content .top-language-login .top-language img {
  margin-right: 5px;
}
.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-top-content .top-language-login .top-language select {
  border: none;
  background-color: var(--theme-color);
}
.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-top-content .top-language-login .top-login button {
  color: #fff;
  border: none;
  margin-left: 18px;
  background-color: transparent;
}
.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-main-menu-content {
  padding: 0px 140px;
}
.in-header-NavbarType3-section.header-style-five .in-main-navigation-area li {
  margin: 0px 33px;
}
.in-header-NavbarType3-section.header-style-five .in-main-navigation-area li a {
  color: #000000;
  font-weight: 500;
  position: relative;
}

.in-header-NavbarType3-section.header-style-five .in-main-navigation-area li:hover a:before {
  opacity: 1;
  left: -20px;
}
.in-header-NavbarType3-section.header-style-five .in-main-navigation-area .dropdown-menu li:hover {
  padding-left: 10px !important;
}

.in-header-NavbarType3-section.header-style-five .in-sidebar-btn {
  margin-left: 30px;
}

.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-search {
  margin-left: 25px;
}
.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-search button {
  border: none;
  background-color: transparent;
}


.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-cart-get-btn .in-header-NavbarType3-cart span {
  top: 0;
  right: 0;
  width: 18px;
  color: #000;
  height: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-weight: 500;
  font-size: 12px;
  position: absolute;
  border-radius: 100%;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  background-color: #fff;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.0901960784);
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.0901960784);
}

.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-cart-get-btn .in-header-NavbarType3-get-btn {
  margin-left: 60px;
}
.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-cart-get-btn .in-header-NavbarType3-get-btn a {
  color: #000000;
  font-weight: 500;
  display: inline-block;
  padding-bottom: 12px;
  border-bottom: 1px solid #ECE5DF;
}
.in-header-NavbarType3-section.header-style-five .in-header-NavbarType3-cart-get-btn .in-header-NavbarType3-get-btn a i {
  margin-left: 15px;
}
.in-header-NavbarType3-section.header-style-five.sticky-on {
  padding: 0;
  background-color: #fff;
}

.in-header-NavbarType3-section.header-style-six {
  background-color: #fff;
}
.in-header-NavbarType3-section.header-style-six:before {
  top: 0;
  left: 70px;
  width: 1px;
  height: 100%;
  content: "";
  position: absolute;
  background-color: #EDE8E4;
}
.in-header-NavbarType3-section.header-style-six .in-header-NavbarType3-top-content {
  padding: 0px 190px;
  border-bottom: 1px solid #EDE8E4;
}

.in-header-NavbarType3-section.header-style-six .in-header-NavbarType3-top-content .ins-header-top-search {
  margin-left: 80px;
}
.in-header-NavbarType3-section.header-style-six .in-header-NavbarType3-top-content .top-search {
  margin-left: 25px;
}

.in-header-NavbarType3-section.header-style-six .in-header-NavbarType3-top-content .top-search input::-webkit-input-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-NavbarType3-section.header-style-six .in-header-NavbarType3-top-content .top-search input::-moz-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-NavbarType3-section.header-style-six .in-header-NavbarType3-top-content .top-search input:-ms-input-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-NavbarType3-section.header-style-six .in-header-NavbarType3-top-content .top-search input::-ms-input-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-NavbarType3-section.header-style-six .in-header-NavbarType3-top-content .top-search input::placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-NavbarType3-section.header-style-six .in-header-NavbarType3-top-content .top-search button {
  top: 15px;
  right: 25px;
  color: #fff;
  border: none;
  font-size: 20px;
  position: absolute;
  background-color: transparent;
}

.in-header-NavbarType3-section.header-style-six .ins-header-main-navigation-area {
  padding: 25px 190px;
}
.in-header-NavbarType3-section.header-style-six .in-main-navigation-area li {
  margin: 0px 33px;
}
.in-header-NavbarType3-section.header-style-six .in-main-navigation-area li a {
  color: #000000;
  font-weight: 500;
  position: relative;
}

.in-header-NavbarType3-section.header-style-six .in-main-navigation-area li:hover a:before {
  opacity: 1;
  left: -20px;
}
.in-header-NavbarType3-section.header-style-six .in-main-navigation-area .dropdown-menu li:hover {
  padding-left: 10px !important;
}

.in-header-NavbarType3-section.header-style-six .top-language-login .top-language img {
  margin-right: 5px;
}
.in-header-NavbarType3-section.header-style-six .top-language-login .top-language select {
  border: none;
}

.in-main-navigation-area li {
  margin-right: 65px;
}
.in-main-navigation-area li a {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  padding-bottom: 40px;
}

/*---------------------------------------------------- */
.in-header-NavbarType3-section {
  top: 0;
  left: 0%;
  z-index: 10;
  width: 100%;
  position: absolute;
}
.in-header-NavbarType3-section.sticky-on {
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 0;
  position: fixed;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-name: slideInDown;
          animation-name: slideInDown;
  background-color: #171717;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
  -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1);
}
.in-header-NavbarType3-section.sticky-on .in-header-NavbarType3-top-content-area {
  display: none;
}
.in-header-NavbarType3-section.sticky-on .in-header-NavbarType3-top-content {
  display: none !important;
}
.in-header-NavbarType3-section.sticky-on.header-style-one_NavbarType3 .sticky-logo {
  display: block;
  margin-right: 40px;
}
.in-header-NavbarType3-section.header-style-landing.sticky-on .in-header-NavbarType3-main-menu-wrapper {
  padding: 20px 30px;
}
.in-header-NavbarType3-section .in-main-navigation-area .navbar-nav {
  display: inherit;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown {
  position: relative;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
  clip: inherit;
  -webkit-transform: scaleY(1);
  -khtml-transform: scaleY(1);
  transform: scaleY(1);
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu {
  left: 0;
  top: 48px;
  z-index: 100;
  margin: 0px;
  padding: 20px 0;
  height: auto;
  min-width: 250px;
  display: block;
  border: none;
  border-radius: 0;
  position: absolute;
  opacity: 0;
  background: #fff;
  border-radius: 2px;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
  transform-origin: 0 0 0;
  -webkit-transform-origin: 0 0 0;
  -ms-transform-origin: 0 0 0;
  -o-transform-origin: 0 0 0;
  text-align: left;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.07);
          box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.07);
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu .dropdown-menu {
  top: 30px;
  left: 100%;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
  opacity: 0 !important;
}

.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu .dropdown-menu a:before {
  display: none;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu li {
  display: block;
  margin: 0 !important;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu li:last-child {
  border-bottom: none;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu li:after {
  display: none;
}
.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu li:hover .dropdown-menu {
  top: 0;
  opacity: 1 !important;
}

.in-header-NavbarType3-section .in-main-navigation-area .dropdown-menu a:before {
  display: none;
}

.in-header-NavbarType3-section .in-megamenu {
  position: static !important;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu {
  left: 0;
  right: 0;
  top: 100%;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  max-width: 1170px;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-megamenu-item {
  margin: 10px;
  position: relative;
  -webkit-box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
          box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-megamenu-item .in-megamenu-item-btn:before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  content: "";
  position: absolute;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
  background-color: rgba(0, 0, 0, 0.5);
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-megamenu-item h3 {
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding-top: 15px;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-megamenu-item:hover .in-megamenu-item-btn:before {
  opacity: 1;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-megamenu-item:hover .in-menu-btn-grp {
  top: 50%;
  opacity: 1;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-menu-btn-grp {
  left: 0;
  top: 60%;
  right: 0;
  z-index: 2;
  opacity: 0;
  position: absolute;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-menu-btn-grp a {
  width: 100px;
  color: #fff !important;
  margin: 0 auto;
  white-space: nowrap;
  margin-bottom: 8px;
  font-size: 16px !important;
  font-weight: 500 !important;
  padding: 8px 10px !important;
  background:  linear-gradient(to right,#0163ea,#00bcf9);
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-menu-btn-grp a:hover {
  color: #fff !important;
}
.in-header-NavbarType3-section .in-megamenu .dropdown-menu .in-menu-btn-grp a:last-child {
  margin-bottom: 0;
}
.in-header-NavbarType3-section.header-style-landing .in-header-NavbarType3-main-menu-wrapper {
  padding: 40px 60px;
}


.in-main-navigation-area li {
  margin-right: 65px;
}
.in-main-navigation-area li a {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  padding-bottom: 40px;
}

/*Mobile area*/
/*----------------------------------------------------*/
.mobile_logo {
  top: 10px;
  left: 15px;
  display: none;
  position: absolute;
}

.mobile_menu_content {
  top: 0px;
  bottom: 0;
  left: -350px;
  height: 100vh;
  z-index: 101;
  position: fixed;
  width: 310px;
  overflow-y: scroll;
  background-color: #fff;
  padding: 20px 35px 35px 35px;
  -webkit-box-shadow: 0px 3px 5px rgba(100, 100, 100, 0.19);
          box-shadow: 0px 3px 5px rgba(100, 100, 100, 0.19);
  -webkit-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
}
.mobile_menu_content .mobile-main-navigation {
  width: 100%;
}
.mobile_menu_content .mobile-main-navigation .navbar-nav {
  width: 100%;
}
.mobile_menu_content .dropdown:after {
  display: none;
}
.mobile_menu_content .navbar-nav .dropdown-menu {
  position: static !important;
  -webkit-transform: none !important;
          transform: none !important;
}
.mobile_menu_content .mobile-main-navigation .navbar-nav li {
  width: 100%;
  display: block;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.mobile_menu_content .mobile-main-navigation .navbar-nav li a {
  padding: 0;
  width: 100%;
  color: #000;
  display: block;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px 30px 10px 0;
}


.mobile_menu_wrap.mobile_menu_on .mobile_menu_content {
  left: 0px;
  -webkit-transition: all 0.7s ease-out;
  transition: all 0.7s ease-out;
}

.mobile_menu_overlay {
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  right: 0%;
  height: 120vh;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.mobile_menu_overlay_on {
  overflow: hidden;
}

.mobile_menu_wrap.mobile_menu_on .mobile_menu_overlay {
  opacity: 1;
  visibility: visible;
}

.mobile_menu_button {
  right: 0px;
  top: -40px;
  z-index: 5;
  color: #fff;
  display: none;
  font-size: 24px;
  cursor: pointer;
  line-height: 38px;
  position: absolute;
  text-align: center;
}

.mobile_menu .mobile-main-navigation .navbar-nav li a:after {
  display: none;
}
.mobile_menu .mobile-main-navigation .dropdown > .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.mobile_menu .mobile_menu_content .mobile-main-navigation .navbar-nav .dropdown-menu {
  border: none;
  display: none;
  -webkit-transition: none;
  transition: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  padding: 5px 0px;
  width: 100%;
  background-color: transparent;
}
.mobile_menu .mobile_menu_content .mobile-main-navigation .navbar-nav .dropdown-menu li {
  border: none;
  padding: 0 10px;
  line-height: 1;
}
.mobile_menu .mobile_menu_content .mobile-main-navigation .navbar-nav .dropdown-menu li:hover {
  background-color: transparent;
}
.mobile_menu .mobile_menu_content .mobile-main-navigation .navbar-nav .dropdown-menu li a {
  color: #000 !important;
}
.mobile_menu .mobile_menu_content .mobile-main-navigation .navbar-nav .dropdown-menu li a:hover {
  background-color: transparent;
}
.mobile_menu .dropdown {
  position: relative;
}
.mobile_menu .dropdown .dropdown-btn {
  top: 3px;
  right: 0;
  height: 30px;
  color: #000;
  padding: 5px 10px;
  position: absolute;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.mobile_menu .dropdown .dropdown-btn.toggle-open {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.mobile_menu .mobile_menu_close {
  top: 25px;
  right: 25px;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
}

.in-header-NavbarType3-section .mobile_menu .in-megamenu {
  position: relative !important;
}

.in-header-NavbarType3-section .mobile_menu .in-megamenu .dropdown-menu .in-megamenu-item h3 {
  color: #000;
}



/*Responsive area*/
/*----------------------------------------------------*/
@media screen and (max-width: 1100px) {
  .header-style-landing .in-main-navigation-area li {
    margin: 0px 15px;
  }
  .in-header-NavbarType3-section.header-style-landing .in-header-NavbarType3-main-menu-wrapper {
    padding: 20px 25px;
  }

}
@media screen and (max-width: 991px) {
  .header-style-landing .in-main-navigation-area li {
    display: none;
  }


}
@media screen and (max-width: 570px) {
 
  .header-style-landing .mobile_menu_button {
    top: -34px;
  }
 


}






/*---------------------------------------------------- */
/*Responsive area*/
/*----------------------------------------------------*/
@media screen and (max-width: 1750px) {

  .in-header-NavbarType3-section.header-style-two .in-header-NavbarType3-top-content {
    padding: 12px 20px;
  }
  .in-header-NavbarType3-section.header-style-two .in-header-NavbarType3-main-menu-wrapper {
    padding: 0px 20px;
  }


}




@media screen and (max-width: 1200px) {
  .in-main-navigation-area li {
    margin-right: 40px;
  }
 
 
}
@media screen and (max-width: 1024px) {
  .in-main-navigation-area li {
    margin-right: 30px;
  }
  .in-header-NavbarType3-section.header-style-four .in-main-navigation-area li {
    margin: 0px 10px;
  }
  .in-header-NavbarType3-section.header-style-four .in-header-NavbarType3-main-menu-content {
    padding: 25px 0px;
  }
  .in-header-NavbarType3-section.header-style-four .in-header-NavbarType3-main-menu-content:before {
    display: none;
  }
  .in-header-NavbarType3-section.header-style-four .in-header-NavbarType3-main-menu-content:after {
    display: none;
  }
  .in-header-NavbarType3-section.header-style-four {
    background-color: #fff;
  }

}
@media screen and (max-width: 991px) {
  .in-header-NavbarType3-top-content-area {
    display: none;
  }
  .in-main-navigation-area {
    display: none;
  }
  .in-header-NavbarType3-section.header-style-one_NavbarType3 .sticky-logo {
    display: block;
  }
  .in-header-NavbarType3-search {
    display: none;
  }


  .mobile_menu_button {
    display: block;
  }

 
  .in-header-NavbarType3-section.header-style-two .in-header-NavbarType3-top-content {
    display: none !important;
  }

  .in-header-NavbarType3-section.header-style-two .mobile_menu_button {
    right: 15px;
    top: -60px;
  }

  .in-header-NavbarType3-section.header-style-four .in-header-NavbarType3-main-menu-content {
    padding: 15px 0px;
  }
  

 
 
}


/*---------------------------------------------------- */
/*Header area*/
/*----------------------------------------------------*/
.in-sv-header-logo {
  top: 0;
  left: 0;
  z-index: 3;
}


.in-sv-header-top-content-main-navigation {
  z-index: 2;
  width: 100%;
  position: relative;
}

.in-sv-header-top-content {
  background-color: #f4f3ef;
  padding: 0px 60px 0px 355px;
}




.in-sv-header-main-navigation {
  padding: 22px 60px 22px 355px;
}

.in-sv-header-section {
  top: 0;
  left: 0%;
  z-index: 10;
  width: 100%;
  position: absolute;
  background-color: #fff;
}
.in-sv-header-section.sticky-on {
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 0;
  position: fixed;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-name: slideInDown;
          animation-name: slideInDown;
  background-color: #171717;
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
  -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1);
}
.in-sv-header-section .in-sv-main-navigation-area .navbar-nav {
  display: inherit;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdown {
  position: relative;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdown:after {
  top: 2px;
  right: -14px;
  font-size: 14px;
  color: #202020;
  font-weight: 300;
  content: "\f149";
  font-weight: 900;
  position: absolute;
  font-family: "Font Awesome ";
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdown:hover:after {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.in-sv-header-section .in-sv-main-navigation-area .dropdown:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
  clip: inherit;
  -webkit-transform: scaleY(1);
  -khtml-transform: scaleY(1);
  transform: scaleY(1);
}
.in-sv-header-section .in-sv-main-navigation-area .dropdown-menu {
  left: 0;
  top: 62px;
  z-index: 100;
  margin: 0px;
  padding: 20px 0;
  height: auto;
  min-width: 250px;
  display: block;
  border: none;
  border-radius: 0;
  position: absolute;
  opacity: 0;
  background: #fff;
  border-radius: 2px;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
  transform-origin: 0 0 0;
  -webkit-transform-origin: 0 0 0;
  -ms-transform-origin: 0 0 0;
  -o-transform-origin: 0 0 0;
  text-align: left;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.07);
          box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.07);
}
.in-sv-header-section .in-sv-main-navigation-area .dropdown-menu .dropdown-menu {
  top: 0px;
  left: 100%;
  -webkit-transform: scaleY(0) !important;
          transform: scaleY(0) !important;
  opacity: 0 !important;
  transform-origin: 0 0 0;
  -webkit-transform-origin: 0 0 0;
  -ms-transform-origin: 0 0 0;
  -o-transform-origin: 0 0 0;
}

.in-sv-header-section .in-sv-main-navigation-area .dropdown-menu li {
  display: block;
  margin: 0 !important;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdown-menu li:last-child {
  border-bottom: none;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdown-menu li:after {
  display: none;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdown-menu li:hover .dropdown-menu {
  top: 0;
  -webkit-transform: scaleY(1) !important;
          transform: scaleY(1) !important;
  opacity: 1 !important;
}

.in-sv-header-section .in-sv-main-navigation-area .dropdown-menu a:before {
  display: none;
}

.in-sv-header-section .in-sv-main-navigation-area li {
  margin: 0px 42px;
}
.in-sv-header-section .in-sv-main-navigation-area li:first-child {
  margin-left: 15px;
}
.in-sv-header-section .in-sv-main-navigation-area li a {
  font-size: 16px;
  font-weight: 600;
  position: relative;
  padding-bottom: 40px;
}

.in-sv-header-section .in-sv-main-navigation-area li:hover a:before {
  width: 100%;
}




/*---------------------------------------------------- */
/*Responsive area*/
/*----------------------------------------------------*/
@media screen and (max-width: 1630px) {
  .in-sv-header-section .in-sv-main-navigation-area li {
    margin: 0px 30px;
  }

}
@media screen and (max-width: 1500px) {


  .in-sv-header-main-navigation {
    padding: 22px 15px 22px 355px;
  }
  .in-sv-header-top-content {
    padding: 0px 15px 0px 355px;
  }
}
@media screen and (max-width: 1440px) {
 
  .in-sv-header-section .in-sv-main-navigation-area li {
    margin: 0px 22px;
  }


}
@media screen and (max-width: 1340px) {
 
  .in-sv-header-main-navigation {
    padding: 22px 15px 22px 300px;
  }
  .in-sv-header-top-content {
    padding: 0px 15px 0px 300px;
  }
}
@media screen and (max-width: 1200px) {

  .in-sv-header-top-content {
    display: none !important;
  }
 
  .in-sv-header-main-navigation {
    padding: 22px 15px 22px 200px;
  }
  .in-sv-header-section .in-sv-main-navigation-area li {
    margin: 0px 20px;
  }
  .in-sv-header-section .in-sv-main-navigation-area li a {
    font-size: 14px;
  }
  
 
}
@media screen and (max-width: 1024px) {
  .in-sv-header-section .in-sv-main-navigation-area li {
    margin: 0px 15px;
  }

 
}
@media screen and (max-width: 991px) {

  .in-sv-header-menu {
    display: none;
  }
  .in-sv-header-main-navigation {
    -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
            justify-content: end !important;
  }
  
  .in-sv-header-main-navigation {
    padding: 17px 15px 17px 200px;
  }


  .in-sv-header-section .mobile_menu .dropdown {
    position: relative !important;
  }

}

@media screen and (max-width: 380px) {

  .in-sv-header-main-navigation {
    padding: 14px 15px 14px 130px;
  }
 
}


`