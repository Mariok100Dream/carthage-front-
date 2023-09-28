export const css_navbartype6 = `

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&amp;family=Play:wght@400;700&amp;family=Syne:wght@400;500;600;700&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,600&amp;display=swap");


.allPegeNavbarType6{
 
 
  overflow-x: hidden;

}







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


.in-header-sectionNavbarType6 {
  top: 0;
  left: 0%;
  z-index: 10;
  width: 99%;
  position: absolute;
}
.in-header-sectionNavbarType6.sticky-on {
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
.in-header-sectionNavbarType6.sticky-on .in-header-top-content-area {
  display: none;
}
.in-header-sectionNavbarType6.sticky-on .in-header-top-content {
  display: none !important;
}
.in-header-sectionNavbarType6.sticky-on.header-style-one .sticky-logo {
  display: block;
  margin-right: 40px;
}
.in-header-sectionNavbarType6 .in-sidebar-btn {
  width: 15px;
  height: 15px;
  cursor: pointer;
  position: relative;
}
.in-header-sectionNavbarType6 .in-sidebar-btn span {
  width: 6px;
  height: 6px;
  position: absolute;
}
.in-header-sectionNavbarType6 .in-sidebar-btn span:nth-child(1) {
  top: 0;
  left: 0;
  background-color: #FFB966;
}
.in-header-sectionNavbarType6 .in-sidebar-btn span:nth-child(2) {
  top: 0;
  right: 0;
  background-color: #000000;
}
.in-header-sectionNavbarType6 .in-sidebar-btn span:nth-child(3) {
  left: 0;
  bottom: 0;
  background-color: #000000;
}
.in-header-sectionNavbarType6 .in-sidebar-btn span:nth-child(4) {
  right: 0;
  bottom: 0;
  background-color: #FFB966;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .navbar-navNavbarType6 {
  display: inherit;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6 {
  position: relative;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6:after {
  top: 2px;
  right: -14px;
  font-size: 14px;
  color: #fff;
  font-weight: 300;
  content: "\f107";
  font-weight: 900;
  position: absolute;
  font-family: 'Font Awesome\ 5 Free';
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6:hover .dropdownNavbarType6-menu {
  visibility: visible;
  opacity: 1;
  clip: inherit;
  -webkit-transform: scaleY(1);
  -khtml-transform: scaleY(1);
  transform: scaleY(1);
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu {
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
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu .dropdownNavbarType6-menu {
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
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu .dropdownNavbarType6-menu a {
  font-size: 14px;
  font-weight: 400;
  color: #101010;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu .dropdownNavbarType6-menu a:hover {
  color: #FFB966;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li {
  display: block;
  margin: 0 !important;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li:last-child {
  border-bottom: none;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li:after {
  top: 10px;
  color: #000;
  right: 15px;
  -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li:hover .dropdownNavbarType6-menu {
  top: 0;
  -webkit-transform: scaleY(1) !important;
          transform: scaleY(1) !important;
  opacity: 1 !important;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu a {
  width: 100%;
  display: block;
  position: relative;
  padding: 10px 30px !important;
  color: var(--black-color) !important;
  font-size: 15px !important;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu a:before {
  display: none;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu a:hover {
  color: var(--base-color-1) !important;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 {
  position: static !important;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu {
  left: 0;
  right: 0;
  top: 100%;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  max-width: 1170px;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6 {
  margin: 10px;
  position: relative;
  -webkit-box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
          box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6 .in-megamenuNavbarType6-itemNavbarType6-btn:before {
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
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6 h3 {
  color: #000;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding-top: 15px;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6:hover .in-megamenuNavbarType6-itemNavbarType6-btn:before {
  opacity: 1;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6:hover .in-menu-btn-grpNavbarType6 {
  top: 50%;
  opacity: 1;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-menu-btn-grpNavbarType6 {
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
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-menu-btn-grpNavbarType6 a {
  width: 100px;
  color: #fff !important;
  margin: 0 auto;
  white-space: nowrap;
  margin-bottom: 8px;
  font-size: 16px !important;
  font-weight: 500 !important;
  padding: 8px 10px !important;
  background: var(--base-color);
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-menu-btn-grpNavbarType6 a:hover {
  color: #fff !important;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-menu-btn-grpNavbarType6 a:last-child {
  margin-bottom: 0;
}
.in-header-sectionNavbarType6.header-style-one {
  background-color: #fff;
}
.in-header-sectionNavbarType6.header-style-one .header-top-content {
  padding: 23px 0px;
}
.in-header-sectionNavbarType6.header-style-one .header-top-cta .cta-info-item {
  margin-left: 70px;
}
.in-header-sectionNavbarType6.header-style-one .header-top-cta .cta-info-item:before {
  top: 0;
  width: 1px;
  content: "";
  height: 40px;
  right: -35px;
  position: absolute;
  background-color: #dae0f2;
}
.in-header-sectionNavbarType6.header-style-one .header-top-cta .cta-info-item .inner-icon {
  margin-right: 15px;
}
.in-header-sectionNavbarType6.header-style-one .header-top-cta .cta-info-item .inner-icon i {
  font-size: 40px;
}
.in-header-sectionNavbarType6.header-style-one .header-top-cta .cta-info-item .inner-text h4 {
  font-size: 17px;
  font-weight: 700;
  padding-bottom: 3px;
  color: var(--black-color);
}
.in-header-sectionNavbarType6.header-style-one .header-top-cta .cta-info-item .inner-text span {
  color: #0a0a0a;
  font-size: 15px;
}
.in-header-sectionNavbarType6.header-style-one .header-top-cta .cta-info-item:last-child:before {
  display: none;
}
.in-header-sectionNavbarType6.header-style-one .in-header-main-menu-wrapper {
  padding: 15px 0px;
  background: var(--base-color);
}
.in-header-sectionNavbarType6.header-style-one .sticky-logo {
  display: none;
}
.in-header-sectionNavbarType6.header-style-one .in-header-search-cta-btn .in-header-search button {
  color: #fff;
  border: none;
  background-color: transparent;
}
.in-header-sectionNavbarType6.header-style-one .in-header-search-cta-btn .in-header-cta-btn {
  margin-left: 40px;
}
.in-header-sectionNavbarType6.header-style-one .in-header-search-cta-btn .in-header-cta-btn a {
  font-size: 15px;
  font-weight: 500;
  padding: 10px 22px;
  border-radius: 5px;
  display: inline-block;
  background-color: #fff;
  color: var(--main-color);
}
.in-header-sectionNavbarType6.header-style-one .in-header-search-cta-btn .in-header-cta-btn a:hover {
  color: #fff;
  background-color: var(--main-color);
}
.in-header-sectionNavbarType6.header-style-two {
  background-color: #262e3d;
}
.in-header-sectionNavbarType6.header-style-two .in-header-top-content {
  padding: 12px 145px;
  margin-bottom: 20px;
  border-bottom: 1px solid #3c4351;
}
.in-header-sectionNavbarType6.header-style-two .header-top-info li {
  color: #fff;
  font-size: 15px;
  margin-right: 80px;
  position: relative;
}
.in-header-sectionNavbarType6.header-style-two .header-top-info li i {
  margin-right: 10px;
}
.in-header-sectionNavbarType6.header-style-two .header-top-info li:last-child {
  margin-right: 0;
}
.in-header-sectionNavbarType6.header-style-two .header-top-info li:last-child:before {
  display: none;
}
.in-header-sectionNavbarType6.header-style-two .header-top-info li:before {
  top: 0;
  width: 1px;
  content: "";
  right: -40px;
  height: 20px;
  position: absolute;
  background-color: #515864;
}
.in-header-sectionNavbarType6.header-style-two .header-top-social span {
  color: #fff;
  font-size: 15px;
}
.in-header-sectionNavbarType6.header-style-two .header-top-social li {
  margin-left: 20px;
}
.in-header-sectionNavbarType6.header-style-two .header-top-social li a {
  color: #fff;
  font-size: 15px;
}
.in-header-sectionNavbarType6.header-style-two .header-top-social li a:hover {
  color: var(--main-color);
}
.in-header-sectionNavbarType6.header-style-two .in-header-main-menu-wrapper {
  padding: 0px 145px;
}
.in-header-sectionNavbarType6.header-style-two .in-header-main-menu-wrapper .brand-logo {
  margin-right: 75px;
}
.in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn {
  width: 100%;
  max-width: 1100px;
  padding: 20px 30px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .in-main-navigation-areaNavbarType6 li {
  margin-right: 45px;
}
.in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .in-main-navigation-areaNavbarType6 li a {
  font-size: 16px;
  position: relative;
  z-index: 1;
  color: var(--black-color);
  text-transform: uppercase;
}
.in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .in-main-navigation-areaNavbarType6 li a:before {
  left: 0;
  right: 0;
  top: 12px;
  width: 0%;
  z-index: -1;
  content: "";
  height: 4px;
  margin: 0 auto;
  position: absolute;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
  background: var(--base-color);
}
.in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .in-main-navigation-areaNavbarType6 li a:hover:before {
  width: 100%;
}
.in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .header-cta-btn a {
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
  padding: 12px 40px;
  display: inline-block;
  background: -webkit-gradient(linear, left top, right top, from(#0163ea), color-stop(50%, #00bcf9), to(#0163ea));
  background: linear-gradient(90deg, #0163ea 0%, #00bcf9 50%, #0163ea);
  background-size: 200%, 1px;
  -webkit-transition: all 200ms linear 0ms;
  transition: all 200ms linear 0ms;
}
.in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .header-cta-btn a:hover {
  background-position: 120%;
}
.in-header-sectionNavbarType6.header-style-two .header-cta-info {
  margin-left: 40px;
}
.in-header-sectionNavbarType6.header-style-two .header-cta-info .inner-icon {
  color: #fff;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 100%;
  background: var(--base-color);
}
.in-header-sectionNavbarType6.header-style-two .header-cta-info .inner-text {
  color: #fff;
  max-width: 150px;
}
.in-header-sectionNavbarType6.header-style-two .header-cta-info .inner-text h4 {
  font-size: 18px;
}
.in-header-sectionNavbarType6.header-style-four .in-header-main-menu-content {
  z-index: 1;
  padding: 28px 25px;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.in-header-sectionNavbarType6.header-style-four .in-header-main-menu-content:before, .in-header-sectionNavbarType6.header-style-four .in-header-main-menu-content:after {
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: var(--base-color);
}
.in-header-sectionNavbarType6.header-style-four .in-header-main-menu-content:before {
  top: auto;
  bottom: -5px;
}
.in-header-sectionNavbarType6.header-style-four .in-header-main-menu-content:after {
  background: #fff;
}
.in-header-sectionNavbarType6.header-style-four .in-main-navigation-areaNavbarType6 li a {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
}
.in-header-sectionNavbarType6.header-style-four .in-main-navigation-areaNavbarType6 li {
  margin: 0px 22px;
}
.in-header-sectionNavbarType6.header-style-four .in-header-cta-btn a {
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  padding: 12px 40px;
  display: inline-block;
  background: -webkit-gradient(linear, left top, right top, from(#0163ea), color-stop(50%, #00bcf9), to(#0163ea));
  background: linear-gradient(90deg, #0163ea 0%, #00bcf9 50%, #0163ea);
  background-size: 200%, 1px;
  -webkit-transition: all 200ms linear 0ms;
  transition: all 200ms linear 0ms;
}
.in-header-sectionNavbarType6.header-style-four .in-header-cta-btn a:hover {
  background-position: 120%;
}
.in-header-sectionNavbarType6.header-style-four.sticky-on {
  background-color: #fff;
}
.in-header-sectionNavbarType6.header-style-four.sticky-on .in-header-main-menu-content:before {
  display: none;
}
.in-header-sectionNavbarType6.header-style-four.sticky-on .in-header-main-menu-content {
  z-index: 1;
  padding: 15px 0px;
}
.in-header-sectionNavbarType6.header-style-five .in-header-top-content {
  color: #fff;
  font-size: 16px;
  line-height: 18px;
  padding: 10px 145px;
  font-family: 'Play', sans-serif;
  background-color: #056251;
}
.in-header-sectionNavbarType6.header-style-five .in-header-top-content .top-cta-info img {
  margin-right: 5px;
}
.in-header-sectionNavbarType6.header-style-five .in-header-top-content .top-slug-more img {
  margin-right: 5px;
}
.in-header-sectionNavbarType6.header-style-five .in-header-top-content .top-languageNavbarType6-loginNavbarType6 .top-languageNavbarType6 img {
  margin-right: 5px;
}
.in-header-sectionNavbarType6.header-style-five .in-header-top-content .top-languageNavbarType6-loginNavbarType6 .top-languageNavbarType6 select {
  border: none;
  background-color: #056251;
}
.in-header-sectionNavbarType6.header-style-five .in-header-top-content .top-languageNavbarType6-loginNavbarType6 .top-loginNavbarType6 button {
  color: #fff;
  border: none;
  margin-left: 18px;
  background-color: transparent;
}
.in-header-sectionNavbarType6.header-style-five .in-header-main-menu-content {
  padding: 0px 140px;
}
.in-header-sectionNavbarType6.header-style-five .in-main-navigation-areaNavbarType6 li {
  margin: 0px 33px;
}
.in-header-sectionNavbarType6.header-style-five .in-main-navigation-areaNavbarType6 li a {
  color: #000000;
  font-weight: 500;
  position: relative;
}
.in-header-sectionNavbarType6.header-style-five .in-main-navigation-areaNavbarType6 li a:before {
  top: -3px;
  left: 0px;
  opacity: 0;
  content: "\f178";
  font-weight: 400;
  position: absolute;
  color: #FFB966;
  font-family: 'Font Awesome\ 5 Free';
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.in-header-sectionNavbarType6.header-style-five .in-main-navigation-areaNavbarType6 li:hover a:before {
  opacity: 1;
  left: -20px;
}
.in-header-sectionNavbarType6.header-style-five .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li:hover {
  padding-left: 10px !important;
}
.in-header-sectionNavbarType6.header-style-five .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li a:hover {
  color: #056251 !important;
}
.in-header-sectionNavbarType6.header-style-five .in-sidebar-btn {
  margin-left: 30px;
}
.in-header-sectionNavbarType6.header-style-five .in-header-menu-cta-sidebar {
  padding: 35px 50px;
  background-color: #fff;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  -webkit-box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.0117647059);
          box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.0117647059);
}
.in-header-sectionNavbarType6.header-style-five .in-header-search {
  margin-left: 25px;
}
.in-header-sectionNavbarType6.header-style-five .in-header-search button {
  border: none;
  background-color: transparent;
}
.in-header-sectionNavbarType6.header-style-five .in-header-cta {
  margin-left: 20px;
}
.in-header-sectionNavbarType6.header-style-five .in-header-cta span {
  display: block;
}
.in-header-sectionNavbarType6.header-style-five .in-header-cta .hd-title {
  color: #828A8D;
  font-size: 13px;
}
.in-header-sectionNavbarType6.header-style-five .in-header-cta .hd-value {
  color: #DD1D26;
  font-size: 14px;
  font-weight: 500;
}
.in-header-sectionNavbarType6.header-style-five .in-header-cart-get-btn .in-header-cart span {
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
.in-header-sectionNavbarType6.header-style-five .in-header-cart-get-btn .in-header-cart button {
  color: #000;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  background-color: #FFB966;
}
.in-header-sectionNavbarType6.header-style-five .in-header-cart-get-btn .in-header-get-btn {
  margin-left: 60px;
}
.in-header-sectionNavbarType6.header-style-five .in-header-cart-get-btn .in-header-get-btn a {
  color: #000000;
  font-weight: 500;
  display: inline-block;
  padding-bottom: 12px;
  border-bottom: 1px solid #ECE5DF;
}
.in-header-sectionNavbarType6.header-style-five .in-header-cart-get-btn .in-header-get-btn a i {
  margin-left: 15px;
}
.in-header-sectionNavbarType6.header-style-five.sticky-on {
  padding: 0;
  background-color: #fff;
}
.in-header-sectionNavbarType6.header-style-five.sticky-on .in-header-menu-cta-sidebar {
  padding: 20px 35px;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6NavbarType6 {
  background-color: #fff;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6:before {
  top: 0;
  left: 70px;
  width: 1px;
  height: 100%;
  content: "";
  position: absolute;
  background-color: #EDE8E4;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content {
  padding: 0px 190px;
  border-bottom: 1px solid #EDE8E4;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .ins-header-top-slug {
  color: #000000;
  font-family: var(--meta-font);
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-mail-cta a {
  color: #000000;
  font-family: "Syne", sans-serif;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-mail-cta a i {
  margin-right: 8px;
  color: #FFB966;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .ins-header-top-search {
  margin-left: 80px;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search {
  margin-left: 25px;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search input {
  color: #fff;
  width: 185px;
  height: 70px;
  border: none;
  padding-left: 25px;
  text-transform: uppercase;
  background-color: #FFB966;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search input::-webkit-input-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search input::-moz-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search input:-ms-input-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search input::-ms-input-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search input::placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search button {
  top: 15px;
  right: 25px;
  color: #fff;
  border: none;
  font-size: 20px;
  position: absolute;
  background-color: transparent;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .ins-header-sidenav-ctaNavbarType6 .in-sidebar-btn {
  margin-right: 45px;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .ins-header-sidenav-ctaNavbarType6 .ins-nav-ctaNavbarType6 {
  color: #000000;
  font-weight: 500;
  font-family: var(--meta-font);
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .ins-header-sidenav-ctaNavbarType6 .ins-nav-ctaNavbarType6 span {
  width: 50px;
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: 12px;
  border-radius: 100%;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  background-color: #056251;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .ins-header-main-navigation-areaNavbarType6 {
  padding: 25px 190px;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-main-navigation-areaNavbarType6 li {
  margin: 0px 33px;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-main-navigation-areaNavbarType6 li a {
  color: #000000;
  font-weight: 500;
  position: relative;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-main-navigation-areaNavbarType6 li a:before {
  top: -3px;
  left: 0px;
  opacity: 0;
  content: "\f007";
  font-weight: 400;
  position: absolute;
  color: #FFB966;
  font-family: 'Font Awesome\ 5 Free';
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-main-navigation-areaNavbarType6 li:hover a:before {
  opacity: 1;
  left: -20px;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li:hover {
  padding-left: 10px !important;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li a:hover {
  color: #056251 !important;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .top-languageNavbarType6-loginNavbarType6 .top-languageNavbarType6 img {
  margin-right: 5px;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .top-languageNavbarType6-loginNavbarType6 .top-languageNavbarType6 select {
  border: none;
}
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .top-languageNavbarType6-loginNavbarType6 .top-loginNavbarType6 button {
  padding: 0;
  color: #000000;
  border: none;
  margin-left: 50px;
  font-family: var(--meta-font);
  background-color: transparent;
}

.in-main-navigation-areaNavbarType6 li {
  margin-right: 65px;
}
.in-main-navigation-areaNavbarType6 li a {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  padding-bottom: 40px;
}



.mobile_menuNavbarType6_contentNavbarType6 {
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
.mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 {
  width: 100%;
}
.mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 {
  width: 100%;
}
.mobile_menuNavbarType6_contentNavbarType6 .dropdownNavbarType6:after {
  display: none;
}
.mobile_menuNavbarType6_contentNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu {
  position: static !important;
  -webkit-transform: none !important;
          transform: none !important;
}
.mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 li {
  width: 100%;
  display: block;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 li a {
  padding: 0;
  width: 100%;
  color: #000;
  display: block;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px 30px 10px 0;
}
.mobile_menuNavbarType6_contentNavbarType6 .m-brand-logoNavbarType6 {
  width: 120px;
  margin: 50px auto;
}

.mobile_menuNavbarType6_wrapNavbarType6.mobile_menuNavbarType6_on .mobile_menuNavbarType6_contentNavbarType6 {
  left: 0px;
  -webkit-transition: all 0.7s ease-out;
  transition: all 0.7s ease-out;
}

.mobile_menuNavbarType6_overlayNavbarType6 {
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

.mobile_menuNavbarType6_overlayNavbarType6_on {
  overflow: hidden;
}

.mobile_menuNavbarType6_wrapNavbarType6.mobile_menuNavbarType6_on .mobile_menuNavbarType6_overlayNavbarType6 {
  opacity: 1;
  visibility: visible;
}

.mobile_menuNavbarType6_buttonNavbarType6 {
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

.mobile_menuNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 li a:after {
  display: none;
}
.mobile_menuNavbarType6 .mobile-main-navigationNavbarType6 .dropdownNavbarType6 > .dropdownNavbarType6-menu {
  opacity: 1;
  visibility: visible;
}
.mobile_menuNavbarType6 .in-m-searchNavbarType6 {
  position: relative;
  margin-bottom: 35px;
margin-top: 14%;
}
.mobile_menuNavbarType6 .in-m-searchNavbarType6 input {
  width: 100%;
  height: 50px;
  padding-left: 20px;
  border: 1px solid #d5d5d5;
}
.mobile_menuNavbarType6 .in-m-searchNavbarType6 button {
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  color: #fff;
  border: none;
  position: absolute;
  background-color: transparent;
}
.mobile_menuNavbarType6 .mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu {
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
.mobile_menuNavbarType6 .mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu li {
  border: none;
  padding: 0 10px;
  line-height: 1;
}
.mobile_menuNavbarType6 .mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu li:hover {
  background-color: transparent;
}
.mobile_menuNavbarType6 .mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu li a {
  color: #000 !important;
}
.mobile_menuNavbarType6 .mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu li a:hover {
  background-color: transparent;
}
.mobile_menuNavbarType6 .dropdownNavbarType6 {
  position: relative;
}
.mobile_menuNavbarType6 .dropdownNavbarType6 .dropdownNavbarType6-btn {
  top: 3px;
  right: 0;
  height: 30px;
  color: #000;
  padding: 5px 10px;
  position: absolute;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.mobile_menuNavbarType6 .dropdownNavbarType6 .dropdownNavbarType6-btn.toggle-open {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.mobile_menuNavbarType6 .mobile_menuNavbarType6_closeNavbarType6 {
  top: 25px;
  right: 25px;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
}

.in-header-sectionNavbarType6 .mobile_menuNavbarType6 .in-megamenuNavbarType6 {
  position: relative !important;
}

.in-header-sectionNavbarType6 .mobile_menuNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6 h3 {
  color: #000;
}



/*---------------------------------------------------- */
.in-header-sectionNavbarType6 {
  top: 0;
  left: 0%;
  z-index: 10;
  width: 99%;
  position: absolute;
}
.in-header-sectionNavbarType6.sticky-on {
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
.in-header-sectionNavbarType6.sticky-on .in-header-top-content-area {
  display: none;
}
.in-header-sectionNavbarType6.sticky-on .in-header-top-content {
  display: none !important;
}
.in-header-sectionNavbarType6.sticky-on.header-style-one .sticky-logo {
  display: block;
  margin-right: 40px;
}
.in-header-sectionNavbarType6.header-style-landing.sticky-on .in-header-main-menu-wrapper {
  padding: 20px 30px;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .navbar-navNavbarType6 {
  display: inherit;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6 {
  position: relative;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6:hover .dropdownNavbarType6-menu {
  visibility: visible;
  opacity: 1;
  clip: inherit;
  -webkit-transform: scaleY(1);
  -khtml-transform: scaleY(1);
  transform: scaleY(1);
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu {
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
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu .dropdownNavbarType6-menu {
  top: 30px;
  left: 100%;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
  opacity: 0 !important;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu .dropdownNavbarType6-menu a {
  font-size: 14px;
  font-weight: 400;
  color: var(--black-color);
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu .dropdownNavbarType6-menu a:before {
  display: none;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li {
  display: block;
  margin: 0 !important;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li:last-child {
  border-bottom: none;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li:after {
  display: none;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu li:hover .dropdownNavbarType6-menu {
  top: 0;
  opacity: 1 !important;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu a {
  width: 100%;
  display: block;
  position: relative;
  padding: 10px 30px !important;
  color: var(--black-color) !important;
  font-size: 15px !important;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu a:before {
  display: none;
}
.in-header-sectionNavbarType6 .in-main-navigation-areaNavbarType6 .dropdownNavbarType6-menu a:hover {
  color: var(--base-color-1) !important;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 {
  position: static !important;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu {
  left: 0;
  right: 0;
  top: 100%;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  max-width: 1170px;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6 {
  margin: 10px;
  position: relative;
  -webkit-box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
          box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6 .in-megamenuNavbarType6-itemNavbarType6-btn:before {
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
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6 h3 {
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding-top: 15px;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6:hover .in-megamenuNavbarType6-itemNavbarType6-btn:before {
  opacity: 1;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6:hover .in-menu-btn-grpNavbarType6 {
  top: 50%;
  opacity: 1;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-menu-btn-grpNavbarType6 {
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
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-menu-btn-grpNavbarType6 a {
  width: 100px;
  color: #fff !important;
  margin: 0 auto;
  white-space: nowrap;
  margin-bottom: 8px;
  font-size: 16px !important;
  font-weight: 500 !important;
  padding: 8px 10px !important;
  background: var(--base-color);
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-menu-btn-grpNavbarType6 a:hover {
  color: #fff !important;
}
.in-header-sectionNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-menu-btn-grpNavbarType6 a:last-child {
  margin-bottom: 0;
}
.in-header-sectionNavbarType6.header-style-landing .in-header-main-menu-wrapper {
  padding: 40px 60px;
}
.in-header-sectionNavbarType6.header-style-landing .in-header-cta-btn a {
  color: #fff;
  padding: 12px 30px;
  border-radius: 30px;
  display: inline-block;
}
.in-header-sectionNavbarType6.header-style-landing .in-header-cta-btn a i {
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.in-header-sectionNavbarType6.header-style-landing .in-header-cta-btn a:hover i {
  margin-left: 5px;
}

.in-main-navigation-areaNavbarType6 li {
  margin-right: 65px;
}
.in-main-navigation-areaNavbarType6 li a {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  padding-bottom: 40px;
}



.mobile_menuNavbarType6_contentNavbarType6 {
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
.mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 {
  width: 100%;
}
.mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 {
  width: 100%;
}
.mobile_menuNavbarType6_contentNavbarType6 .dropdownNavbarType6:after {
  display: none;
}
.mobile_menuNavbarType6_contentNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu {
  position: static !important;
  -webkit-transform: none !important;
          transform: none !important;
}
.mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 li {
  width: 100%;
  display: block;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 li a {
  padding: 0;
  width: 100%;
  color: #000;
  display: block;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px 30px 10px 0;
}
.mobile_menuNavbarType6_contentNavbarType6 .m-brand-logoNavbarType6 {
  width: 120px;
  margin: 50px auto;
}

.mobile_menuNavbarType6_wrapNavbarType6.mobile_menuNavbarType6_on .mobile_menuNavbarType6_contentNavbarType6 {
  left: 0px;
  -webkit-transition: all 0.7s ease-out;
  transition: all 0.7s ease-out;
}

.mobile_menuNavbarType6_overlayNavbarType6 {
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

.mobile_menuNavbarType6_overlayNavbarType6_on {
  overflow: hidden;
}

.mobile_menuNavbarType6_wrapNavbarType6.mobile_menuNavbarType6_on .mobile_menuNavbarType6_overlayNavbarType6 {
  opacity: 1;
  visibility: visible;
}

.mobile_menuNavbarType6_buttonNavbarType6 {
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

.mobile_menuNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 li a:after {
  display: none;
}
.mobile_menuNavbarType6 .mobile-main-navigationNavbarType6 .dropdownNavbarType6 > .dropdownNavbarType6-menu {
  opacity: 1;
  visibility: visible;
}
.mobile_menuNavbarType6 .in-m-searchNavbarType6 {
  position: relative;
  margin-bottom: 35px;
}
.mobile_menuNavbarType6 .in-m-searchNavbarType6 input {
  width: 100%;
  height: 50px;
  padding-left: 20px;
  border: 1px solid #d5d5d5;
}
.mobile_menuNavbarType6 .in-m-searchNavbarType6 button {
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  color: #fff;
  border: none;
  position: absolute;
  background-color: transparent;
}
.mobile_menuNavbarType6 .mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu {
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
.mobile_menuNavbarType6 .mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu li {
  border: none;
  padding: 0 10px;
  line-height: 1;
}
.mobile_menuNavbarType6 .mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu li:hover {
  background-color: transparent;
}
.mobile_menuNavbarType6 .mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu li a {
  color: #000 !important;
}
.mobile_menuNavbarType6 .mobile_menuNavbarType6_contentNavbarType6 .mobile-main-navigationNavbarType6 .navbar-navNavbarType6 .dropdownNavbarType6-menu li a:hover {
  background-color: transparent;
}
.mobile_menuNavbarType6 .dropdownNavbarType6 {
  position: relative;
}
.mobile_menuNavbarType6 .dropdownNavbarType6 .dropdownNavbarType6-btn {
  top: 3px;
  right: 0;
  height: 30px;
  color: #000;
  padding: 5px 10px;
  position: absolute;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.mobile_menuNavbarType6 .dropdownNavbarType6 .dropdownNavbarType6-btn.toggle-open {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.mobile_menuNavbarType6 .mobile_menuNavbarType6_closeNavbarType6 {
  top: 25px;
  right: 25px;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
}

.in-header-sectionNavbarType6 .mobile_menuNavbarType6 .in-megamenuNavbarType6 {
  position: relative !important;
}

.in-header-sectionNavbarType6 .mobile_menuNavbarType6 .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6 h3 {
  color: #000;
}


/*Responsive area*/
/*----------------------------------------------------*/
@media screen and (max-width: 1100px) {
  .header-style-landing .in-main-navigation-areaNavbarType6 li {
    margin: 0px 15px;
  }
  .in-header-sectionNavbarType6.header-style-landing .in-header-main-menu-wrapper {
    padding: 20px 25px;
  }
  .in-header-sectionNavbarType6.header-style-landing .in-header-cta-btn a {
    font-size: 14px;
    padding: 10px 15px;
  }
 
}
@media screen and (max-width: 991px) {
  .header-style-landing .in-main-navigation-areaNavbarType6 li {
    display: none;
  }

  .header-style-landing .mobile_menuNavbarType6_buttonNavbarType6 {
    display: block;
  }
 
}
@media screen and (max-width: 570px) {

  .header-style-landing .mobile_menuNavbarType6_buttonNavbarType6 {
    top: -34px;
  }
}
/*---------------------------------------------------- */
/* New Home Responsive area*/
@media screen and (max-width: 1875px) {
 
  .in-header-sectionNavbarType6.header-style-five .in-header-top-content {
    padding: 10px 15px;
  }
  .in-header-sectionNavbarType6.header-style-five .in-header-main-menu-content {
    padding: 0px 15px;
  }

}
@media screen and (max-width: 1700px) {
  .in-header-sectionNavbarType6.header-style-five .in-header-cart-get-btn .in-header-get-btn {
    margin-left: 20px;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content {
    padding: 0px 100px;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .ins-header-main-navigation-areaNavbarType6 {
    padding: 25px 100px;
  }
}
@media screen and (max-width: 1550px) {
  
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-main-navigation-areaNavbarType6 li {
    margin: 0px 25px;
  }
}
@media screen and (max-width: 1500px) {
  .in-header-sectionNavbarType6.header-style-five .in-main-navigation-areaNavbarType6 li {
    margin: 0 20px;
  }
  .in-header-sectionNavbarType6.header-style-five .in-header-menu-cta-sidebar {
    padding: 30px 20px;
  }
 
}
@media screen and (max-width: 1440px) {
  
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .ins-header-sidenav-ctaNavbarType6 .in-sidebar-btn {
    margin-right: 20px;
  }

  .in-header-sectionNavbarType6.header-style-sixNavbarType6:before {
    left: 50px;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content {
    padding: 0px 70px;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .ins-header-main-navigation-areaNavbarType6 {
    padding: 25px 70px;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-mail-cta {
    display: none;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .top-languageNavbarType6-loginNavbarType6 .top-languageNavbarType6 {
    display: none;
  }
  
}
@media screen and (max-width: 1340px) {
  
  .in-header-sectionNavbarType6.header-style-sixNavbarType6:before {
    display: none;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content {
    padding: 0px 15px;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .ins-header-main-navigation-areaNavbarType6 {
    padding: 20px 15px;
  }
 
}
@media screen and (max-width: 1280px) {
  .in-header-sectionNavbarType6.header-style-five .in-header-menu-cta-sidebar {
    display: none !important;
  }
  .in-header-sectionNavbarType6.header-style-five .in-header-cart-get-btn {
    display: none !important;
  }
  .in-header-sectionNavbarType6.header-style-five .in-header-main-menu-content {
    padding: 20px 15px;
  }
  .in-header-sectionNavbarType6.header-style-five .mobile_menuNavbarType6_buttonNavbarType6 {
    top: -60px;
    right: 15px;
    display: block;
    color: #056251;
  }
  .in-header-sectionNavbarType6.header-style-five .mobile_menuNavbarType6 .in-m-searchNavbarType6 button,
.in-header-sectionNavbarType6.header-style-sixNavbarType6 .mobile_menuNavbarType6 .in-m-searchNavbarType6 button {
    background: #FFB966;
  }

}
@media screen and (max-width: 1200px) {
  .in-header-sectionNavbarType6.header-style-five .in-header-top-content {
    display: none !important;
  }
 
}
@media screen and (max-width: 1150px) {
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .ins-header-top-slug {
    display: none;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .top-languageNavbarType6-loginNavbarType6 .top-loginNavbarType6 {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
 
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-main-navigation-areaNavbarType6 li {
    margin: 0px 20px;
  }
 
}
@media screen and (max-width: 991px) {
  
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .mobile_menuNavbarType6_buttonNavbarType6 {
    top: -60px;
    right: 20px;
    color: #056251;
  }
 
}






@media screen and (max-width: 480px) {
  
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search input {
    height: 50px;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search button {
    top: 10px;
    right: 15px;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .ins-header-main-navigation-areaNavbarType6 {
    padding: 10px 15px;
  }
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .mobile_menuNavbarType6_buttonNavbarType6 {
    top: -52px;
  }
  
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .ins-header-top-search {
    margin-left: 0;
  }
 
}
@media screen and (max-width: 390px) {
  
  .in-header-sectionNavbarType6.header-style-sixNavbarType6 .in-header-top-content .top-search input {
    width: 150px;
  }
}


@media screen and (max-width: 1750px) {
 
  .in-header-sectionNavbarType6.header-style-two .in-header-top-content {
    padding: 12px 20px;
  }
  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-wrapper {
    padding: 0px 20px;
  }
  .in-header-sectionNavbarType6.header-style-two .header-cta-info {
    margin-left: 25px;
  }
  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-wrapper .brand-logo {
    margin-right: 25px;
  }
 
}

@media screen and (max-width: 1480px) {

  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn {
    max-width: 840px;
  }
  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .in-main-navigation-areaNavbarType6 li {
    margin-right: 30px;
  }
  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .header-cta-btn a {
    padding: 12px 30px;
  }
}

@media screen and (max-width: 1280px) {
  
  .in-header-sectionNavbarType6.header-style-two .header-cta-info {
    display: none !important;
  }
  
}
@media screen and (max-width: 1200px) {
  .in-main-navigation-areaNavbarType6 li {
    margin-right: 40px;
  }
 
}
@media screen and (max-width: 1024px) {
  .in-main-navigation-areaNavbarType6 li {
    margin-right: 30px;
  }
 
  .in-header-sectionNavbarType6.header-style-four .in-main-navigation-areaNavbarType6 li {
    margin: 0px 10px;
  }
  .in-header-sectionNavbarType6.header-style-four .in-header-main-menu-content {
    padding: 25px 0px;
  }
  .in-header-sectionNavbarType6.header-style-four .in-header-main-menu-content:before {
    display: none;
  }
  .in-header-sectionNavbarType6.header-style-four .in-header-main-menu-content:after {
    display: none;
  }
  .in-header-sectionNavbarType6.header-style-four {
    background-color: #fff;
  }
 
}
@media screen and (max-width: 991px) {

  .in-main-navigation-areaNavbarType6 {
    display: none;
  }
  .in-header-sectionNavbarType6.header-style-one .sticky-logo {
    display: block;
  }
  
  .in-header-sectionNavbarType6.header-style-one .in-header-search-cta-btn .in-header-cta-btn {
    margin-left: 15px;
    margin-right: 40px;
  }
  .mobile_menuNavbarType6_buttonNavbarType6 {
    display: block;
  }
 
  .in-header-sectionNavbarType6.header-style-two .in-header-top-content {
    display: none !important;
  }
  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn {
    background-color: transparent;
    -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
            justify-content: end !important;
  }
  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .header-cta-btn {
    margin-right: 10px;
  }
  .in-header-sectionNavbarType6.header-style-two .mobile_menuNavbarType6_buttonNavbarType6 {
    right: 15px;
    top: -60px;
  }
 
  .in-header-sectionNavbarType6.header-style-four .in-header-cta-btn {
    margin-right: 40px;
  }
  .in-header-sectionNavbarType6.header-style-four .in-header-main-menu-content {
    padding: 15px 0px;
  }
  .in-header-sectionNavbarType6.header-style-four .mobile_menuNavbarType6_buttonNavbarType6 {
    top: -58px;
    color: var(--main-color);
  }
 
}




@media screen and (max-width: 480px) {
  
  .in-header-sectionNavbarType6.header-style-one .sticky-logo,
.in-header-sectionNavbarType6.sticky-on.header-style-one .sticky-logo {
    width: 120px;
    margin-right: 25px;
  }

  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .header-cta-btn a {
    padding: 5px 15px;
  }
  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn .header-cta-btn {
    margin-right: 5px;
  }
  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-cta-btn {
    padding: 10px 30px;
  }
  .in-header-sectionNavbarType6.header-style-two .in-header-main-menu-wrapper {
    padding: 0px 15px;
  }
  .in-header-sectionNavbarType6.header-style-two .mobile_menuNavbarType6_buttonNavbarType6 {
    top: -47px;
  }

  .in-header-sectionNavbarType6.header-style-four .sticky-logo {
    width: 120px;
  }
  .in-header-sectionNavbarType6.header-style-four .in-header-cta-btn a {
    padding: 12px 20px;
  }
}

.in-sv-header-top-content-main-navigation {
  z-index: 2;
  width: 100%;
  position: relative;
}



.in-sv-header-main-navigation {
  padding: 22px 60px 22px 355px;
}


.in-sv-header-section .in-sv-main-navigation-area .navbar-navNavbarType6 {
  display: inherit;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6 {
  position: relative;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6:after {
  top: 2px;
  right: -14px;
  font-size: 14px;
  color: #202020;
  font-weight: 300;
  content: "\f107";
  font-weight: 900;
  position: absolute;
  font-family: 'Font Awesome\ 5 Free';
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6:hover:after {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6:hover .dropdownNavbarType6-menu {
  visibility: visible;
  opacity: 1;
  clip: inherit;
  -webkit-transform: scaleY(1);
  -khtml-transform: scaleY(1);
  transform: scaleY(1);
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu {
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
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu .dropdownNavbarType6-menu {
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
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu .dropdownNavbarType6-menu a {
  font-size: 14px;
  color: #101010;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu .dropdownNavbarType6-menu a:hover {
  color: #FFB966;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu li {
  display: block;
  margin: 0 !important;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu li:last-child {
  border-bottom: none;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu li:after {
  display: none;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu li:hover .dropdownNavbarType6-menu {
  top: 0;
  -webkit-transform: scaleY(1) !important;
          transform: scaleY(1) !important;
  opacity: 1 !important;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu a {
  width: 100%;
  display: block;
  position: relative;
  padding: 10px 30px !important;
  color: var(--black-color) !important;
  font-size: 15px !important;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu a:before {
  display: none;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType6-menu a:hover {
  padding: 10px 30px 10px 45px !important;
  color: var(--base-sv-color) !important;
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
.in-sv-header-section .in-sv-main-navigation-area li a:before {
  left: 0;
  right: 0;
  width: 0%;
  bottom: 0;
  content: "";
  height: 4px;
  margin: 0 auto;
  position: absolute;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
  background-color: var(--main-sv-color);
}
.in-sv-header-section .in-sv-main-navigation-area li:hover {
  color: var(--main-sv-color);
}
.in-sv-header-section .in-sv-main-navigation-area li:hover a:before {
  width: 100%;
}



.in-sv-header-section .mobile_menuNavbarType6 .in-m-searchNavbarType6 button {
  background-color: var(--base-sv-color);
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
  
}
@media screen and (max-width: 1200px) {
 
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


@media screen and (max-width: 991px) {
 
  .in-sv-header-main-navigation {
    -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
            justify-content: end !important;
  }

  .in-sv-header-main-navigation {
    padding: 17px 15px 17px 200px;
  }
 
  .in-sv-header-section .mobile_menuNavbarType6_buttonNavbarType6 {
    right: 15px;
    top: -57px;
    display: block;
    color: var(--main-sv-color);
  }
  .in-sv-header-section .mobile_menuNavbarType6 .dropdownNavbarType6 {
    position: relative !important;
  }

}



@media screen and (max-width: 380px) {

  .in-sv-header-main-navigation {
    padding: 14px 15px 14px 130px;
  }
  
}
/*---------------------------------------------------- */
.in-header-sectionNavbarType6.header-style-landing .in-megamenuNavbarType6 .dropdownNavbarType6-menu .in-megamenuNavbarType6-itemNavbarType6 h3 {
  color: #000000;
}

`