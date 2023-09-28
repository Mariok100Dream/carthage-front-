export const css_navbartype5 = `

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&amp;family=Play:wght@400;700&amp;family=Syne:wght@400;500;600;700&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,600&amp;display=swap");

.allNavbarType5 {

  overflow:hidden

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



a {
  text-decoration: none;
  color: inherit;
  text-decoration: none;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
a:hover, a:focus {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
}

.form-control:focus,
button:visited,
button.active,
button:hover,
button:focus,
input:visited,
input.active,
input:hover,
input:focus,
textarea:hover,
textarea:focus,
a:hover,
a:focus,
a:visited,
a.active,
select,
select:hover,
select:focus,
select:visited {
  outline: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  text-decoration: none;
  color: inherit;
}

.form-control {
  -webkit-box-shadow: none;
          box-shadow: none;
}






/*---------------------------------------------------- */
/*Header area*/
/*----------------------------------------------------*/
.in-header-sectionNavbarType5 {
  top: 0;
  left: 0%;
  z-index: 10;
  width: 99%%;
  position: absolute;
}
.in-header-sectionNavbarType5.sticky-on {
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
.in-header-sectionNavbarType5.sticky-on .in-header-top-content-area {
  display: none;
}
.in-header-sectionNavbarType5.sticky-on .in-header-top-content {
  display: none !important;
}
.in-header-sectionNavbarType5.sticky-on.header-style-one .sticky-logo {
  display: block;
  margin-right: 40px;
}
.in-header-sectionNavbarType5 .in-sidebar-btnNavbarType5 {
  width: 15px;
  height: 15px;
  cursor: pointer;
  position: relative;
}
.in-header-sectionNavbarType5 .in-sidebar-btnNavbarType5 span {
  width: 6px;
  height: 6px;
  position: absolute;
}
.in-header-sectionNavbarType5 .in-sidebar-btnNavbarType5 span:nth-child(1) {
  top: 0;
  left: 0;
  background-color:#FFB966;
}
.in-header-sectionNavbarType5 .in-sidebar-btnNavbarType5 span:nth-child(2) {
  top: 0;
  right: 0;
  background-color: #000000;
}
.in-header-sectionNavbarType5 .in-sidebar-btnNavbarType5 span:nth-child(3) {
  left: 0;
  bottom: 0;
  background-color: #000000;
}
.in-header-sectionNavbarType5 .in-sidebar-btnNavbarType5 span:nth-child(4) {
  right: 0;
  bottom: 0;
  background-color: #FFB966;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .navbar-nav {
  display: inherit;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5 {
  position: relative;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5:after {
  top: 2px;
  right: -14px;
  font-size: 14px;
  color: #fff;
  font-weight: 300;
  content: "\f107";
  font-weight: 900;
  position: absolute;
  font-family: "Font Awesome 5 Free";
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5:hover .dropdownNavbarType5-menuNavbarType5 {
  visibility: visible;
  opacity: 1;
  clip: inherit;
  -webkit-transform: scaleY(1);
  -khtml-transform: scaleY(1);
  transform: scaleY(1);
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 {
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
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 .dropdownNavbarType5-menuNavbarType5 {
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
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 .dropdownNavbarType5-menuNavbarType5 a {
  font-size: 14px;
  font-weight: 400;
  color: #202020;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 .dropdownNavbarType5-menuNavbarType5 a:hover {
  color: #FFB966;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li {
  display: block;
  margin: 0 !important;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li:last-child {
  border-bottom: none;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li:after {
  top: 10px;
  color: #000;
  right: 15px;
  -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li:hover .dropdownNavbarType5-menuNavbarType5 {
  top: 0;
  -webkit-transform: scaleY(1) !important;
          transform: scaleY(1) !important;
  opacity: 1 !important;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 a {
  width: 100%;
  display: block;
  position: relative;
  padding: 10px 30px !important;
  color: var(--black-color) !important;
  font-size: 15px !important;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 a:before {
  display: none;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 a:hover {
  color: var(--base-color-1) !important;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 {
  position: static !important;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 {
  left: 0;
  right: 0;
  top: 100%;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  max-width: 1170px;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5 {
  margin: 10px;
  position: relative;
  -webkit-box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
          box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5 .in-megamenuNavbarType5-itemNavbarType5-btn:before {
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
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5 h3 {
  color: #000;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding-top: 15px;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5:hover .in-megamenuNavbarType5-itemNavbarType5-btn:before {
  opacity: 1;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5:hover .in-menu-btn-grp {
  top: 50%;
  opacity: 1;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-menu-btn-grp {
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
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-menu-btn-grp a {
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
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-menu-btn-grp a:hover {
  color: #fff !important;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-menu-btn-grp a:last-child {
  margin-bottom: 0;
}
.in-header-sectionNavbarType5.header-style-one {
  background-color: #fff;
}
.in-header-sectionNavbarType5.header-style-one .header-top-content {
  padding: 23px 0px;
}
.in-header-sectionNavbarType5.header-style-one .header-top-cta .cta-info-item {
  margin-left: 70px;
}
.in-header-sectionNavbarType5.header-style-one .header-top-cta .cta-info-item:before {
  top: 0;
  width: 1px;
  content: "";
  height: 40px;
  right: -35px;
  position: absolute;
  background-color: #dae0f2;
}
.in-header-sectionNavbarType5.header-style-one .header-top-cta .cta-info-item .inner-icon {
  margin-right: 15px;
}
.in-header-sectionNavbarType5.header-style-one .header-top-cta .cta-info-item .inner-icon i {
  font-size: 40px;
}
.in-header-sectionNavbarType5.header-style-one .header-top-cta .cta-info-item .inner-text h4 {
  font-size: 17px;
  font-weight: 700;
  padding-bottom: 3px;
  color: var(--black-color);
}
.in-header-sectionNavbarType5.header-style-one .header-top-cta .cta-info-item .inner-text span {
  color: #0a0a0a;
  font-size: 15px;
}
.in-header-sectionNavbarType5.header-style-one .header-top-cta .cta-info-item:last-child:before {
  display: none;
}

.in-header-sectionNavbarType5.header-style-one .sticky-logo {
  display: none;
}
.in-header-sectionNavbarType5.header-style-one .in-header-searchNavbarType5-cta-btn .in-header-searchNavbarType5 button {
  color: #fff;
  border: none;
  background-color: transparent;
}
.in-header-sectionNavbarType5.header-style-one .in-header-searchNavbarType5-cta-btn .in-header-ctaNavbarType5-btn {
  margin-left: 40px;
}


.in-header-sectionNavbarType5.header-style-two {
  background-color: #262e3d;
}
.in-header-sectionNavbarType5.header-style-two .in-header-top-content {
  padding: 12px 145px;
  margin-bottom: 20px;
  border-bottom: 1px solid #3c4351;
}
.in-header-sectionNavbarType5.header-style-two .header-top-info li {
  color: #fff;
  font-size: 15px;
  margin-right: 80px;
  position: relative;
}
.in-header-sectionNavbarType5.header-style-two .header-top-info li i {
  margin-right: 10px;
}
.in-header-sectionNavbarType5.header-style-two .header-top-info li:last-child {
  margin-right: 0;
}
.in-header-sectionNavbarType5.header-style-two .header-top-info li:last-child:before {
  display: none;
}
.in-header-sectionNavbarType5.header-style-two .header-top-info li:before {
  top: 0;
  width: 1px;
  content: "";
  right: -40px;
  height: 20px;
  position: absolute;
  background-color: #515864;
}
.in-header-sectionNavbarType5.header-style-two .header-top-social span {
  color: #fff;
  font-size: 15px;
}
.in-header-sectionNavbarType5.header-style-two .header-top-social li {
  margin-left: 20px;
}
.in-header-sectionNavbarType5.header-style-two .header-top-social li a {
  color: #fff;
  font-size: 15px;
}

.in-header-sectionNavbarType5.header-style-two .in-header-main-menu-wrapper {
  padding: 0px 145px;
}
.in-header-sectionNavbarType5.header-style-two .in-header-main-menu-wrapper .brand-logoNavbarType5 {
  margin-right: 75px;
}
.in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn {
  width: 100%;
  max-width: 1100px;
  padding: 20px 30px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .in-main-navigation-areaNavbarType5 li {
  margin-right: 45px;
}
.in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .in-main-navigation-areaNavbarType5 li a {
  font-size: 16px;
  position: relative;
  z-index: 1;
  color: var(--black-color);
  text-transform: uppercase;
}
.in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .in-main-navigation-areaNavbarType5 li a:before {
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
.in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .in-main-navigation-areaNavbarType5 li a:hover:before {
  width: 100%;
}
.in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .header-cta-btn a {
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
.in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .header-cta-btn a:hover {
  background-position: 120%;
}
.in-header-sectionNavbarType5.header-style-two .header-cta-info {
  margin-left: 40px;
}

.in-header-sectionNavbarType5.header-style-two .header-cta-info .inner-text {
  color: #fff;
  max-width: 150px;
}
.in-header-sectionNavbarType5.header-style-two .header-cta-info .inner-text h4 {
  font-size: 18px;
}
.in-header-sectionNavbarType5.header-style-four .in-header-main-menu-contentNavbarType5 {
  z-index: 1;
  padding: 28px 25px;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.in-header-sectionNavbarType5.header-style-four .in-header-main-menu-contentNavbarType5:before {
  top: auto;
  bottom: -5px;
}
.in-header-sectionNavbarType5.header-style-four .in-header-main-menu-contentNavbarType5:after {
  background: #fff;
}
.in-header-sectionNavbarType5.header-style-four .in-main-navigation-areaNavbarType5 li a {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
}
.in-header-sectionNavbarType5.header-style-four .in-main-navigation-areaNavbarType5 li {
  margin: 0px 22px;
}
.in-header-sectionNavbarType5.header-style-four .in-header-ctaNavbarType5-btn a {
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
.in-header-sectionNavbarType5.header-style-four .in-header-ctaNavbarType5-btn a:hover {
  background-position: 120%;
}
.in-header-sectionNavbarType5.header-style-four.sticky-on {
  background-color: #fff;
}
.in-header-sectionNavbarType5.header-style-four.sticky-on .in-header-main-menu-contentNavbarType5:before {
  display: none;
}
.in-header-sectionNavbarType5.header-style-four.sticky-on .in-header-main-menu-contentNavbarType5 {
  z-index: 1;
  padding: 15px 0px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-top-content {
  color: #fff;
  font-size: 16px;
  line-height: 18px;
  padding: 10px 145px;
  font-family: var(--meta-font);
  background-color: #056251;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-top-content .top-cta-info img {
  margin-right: 5px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-top-content .top-slug-more img {
  margin-right: 5px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-top-content .top-language-login .top-language img {
  margin-right: 5px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-top-content .top-language-login .top-language select {
  border: none;
  background-color: #056251;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-top-content .top-language-login .top-login button {
  color: #fff;
  border: none;
  margin-left: 18px;
  background-color: transparent;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-main-menu-contentNavbarType5 {
  padding: 0px 140px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-main-navigation-areaNavbarType5 li {
  margin: 0px 33px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-main-navigation-areaNavbarType5 li a {
  color: #000000;
  font-weight: 500;
  position: relative;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-main-navigation-areaNavbarType5 li a:before {
  top: -3px;
  left: 0px;
  opacity: 0;
 
  font-weight: 400;
  position: absolute;
  color: #FFB966;
  font-family: "Font Awesome 5 Free";
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-main-navigation-areaNavbarType5 li:hover a:before {
  opacity: 1;
  left: -20px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li:hover {
  padding-left: 10px !important;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li a:hover {
  color: #056251 !important;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-sidebar-btnNavbarType5 {
  margin-left: 30px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-menu-cta-sidebarNavbarType5 {
  padding: 35px 50px;
  background-color: #fff;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  -webkit-box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.0117647059);
          box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.0117647059);
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-searchNavbarType5 {
  margin-left: 25px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-searchNavbarType5 button {
  border: none;
  background-color: transparent;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-ctaNavbarType5 {
  margin-left: 20px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-ctaNavbarType5 span {
  display: block;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-ctaNavbarType5 .hd-titleNavbarType5 {
  color: #828A8D;
  font-size: 13px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-ctaNavbarType5 .hd-valueNavbarType5 {
  color: #DD1D26;
  font-size: 14px;
  font-weight: 500;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-cartNavbarType5-get-btnNavbarType5 .in-header-cartNavbarType5 span {
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
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-cartNavbarType5-get-btnNavbarType5 .in-header-cartNavbarType5 button {
  color: #000;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  background-color:#FFB966;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-cartNavbarType5-get-btnNavbarType5 .in-header-get-btnNavbarType5 {
  margin-left: 60px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-cartNavbarType5-get-btnNavbarType5 .in-header-get-btnNavbarType5 a {
  color: #000000;
  font-weight: 500;
  display: inline-block;
  padding-bottom: 12px;
  border-bottom: 1px solid #ECE5DF;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-cartNavbarType5-get-btnNavbarType5 .in-header-get-btnNavbarType5 a i {
  margin-left: 15px;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5.sticky-on {
  padding: 0;
  background-color: #fff;
}
.in-header-sectionNavbarType5.header-style-fiveNavbarType5.sticky-on .in-header-menu-cta-sidebarNavbarType5 {
  padding: 20px 35px;
}
.in-header-sectionNavbarType5.header-style-six {
  background-color: #fff;
}
.in-header-sectionNavbarType5.header-style-six:before {
  top: 0;
  left: 70px;
  width: 1px;
  height: 100%;
  content: "";
  position: absolute;
  background-color: #EDE8E4;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content {
  padding: 0px 190px;
  border-bottom: 1px solid #EDE8E4;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .ins-header-top-slug {
  color: #000000;
  font-family: var(--meta-font);
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-mail-cta a {
  color: #000000;
  font-family: "Syne", sans-serif;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-mail-cta a i {
  margin-right: 8px;
  color: #FFB966;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .ins-header-top-search {
  margin-left: 80px;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search {
  margin-left: 25px;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search input {
  color: #fff;
  width: 185px;
  height: 70px;
  border: none;
  padding-left: 25px;
  text-transform: uppercase;
  background-color: #FFB966;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search input::-webkit-input-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search input::-moz-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search input:-ms-input-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search input::-ms-input-placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search input::placeholder {
  color: #fff;
  font-weight: 700;
}
.in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search button {
  top: 15px;
  right: 25px;
  color: #fff;
  border: none;
  font-size: 20px;
  position: absolute;
  background-color: transparent;
}
.in-header-sectionNavbarType5.header-style-six .ins-header-sidenav-cta .in-sidebar-btnNavbarType5 {
  margin-right: 45px;
}
.in-header-sectionNavbarType5.header-style-six .ins-header-sidenav-cta .ins-nav-cta {
  color: #000000;
  font-weight: 500;
  font-family: var(--meta-font);
}
.in-header-sectionNavbarType5.header-style-six .ins-header-sidenav-cta .ins-nav-cta span {
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
.in-header-sectionNavbarType5.header-style-six .ins-header-main-navigation-area {
  padding: 25px 190px;
}
.in-header-sectionNavbarType5.header-style-six .in-main-navigation-areaNavbarType5 li {
  margin: 0px 33px;
}
.in-header-sectionNavbarType5.header-style-six .in-main-navigation-areaNavbarType5 li a {
  color: #000000;
  font-weight: 500;
  position: relative;
}
.in-header-sectionNavbarType5.header-style-six .in-main-navigation-areaNavbarType5 li a:before {
  top: -3px;
  left: 0px;
  opacity: 0;

  font-weight: 400;
  position: absolute;
  color: #FFB966;
  font-family: "Font Awesome 5 Free";
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.in-header-sectionNavbarType5.header-style-six .in-main-navigation-areaNavbarType5 li:hover a:before {
  opacity: 1;
  left: -20px;
}
.in-header-sectionNavbarType5.header-style-six .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li:hover {
  padding-left: 10px !important;
}
.in-header-sectionNavbarType5.header-style-six .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li a:hover {
  color: #056251 !important;
}
.in-header-sectionNavbarType5.header-style-six .top-language-login .top-language img {
  margin-right: 5px;
}
.in-header-sectionNavbarType5.header-style-six .top-language-login .top-language select {
  border: none;
}
.in-header-sectionNavbarType5.header-style-six .top-language-login .top-login button {
  padding: 0;
  color: #000000;
  border: none;
  margin-left: 50px;
  font-family: var(--meta-font);
  background-color: transparent;
}

.in-main-navigation-areaNavbarType5 li {
  margin-right: 65px;
}
.in-main-navigation-areaNavbarType5 li a {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  padding-bottom: 40px;
}



.mobile_menuNavbarType5_content {
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
.mobile_menuNavbarType5_content .mobile-main-navigation {
  width: 100%;
}
.mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav {
  width: 100%;
}
.mobile_menuNavbarType5_content .dropdownNavbarType5:after {
  display: none;
}
.mobile_menuNavbarType5_content .navbar-nav .dropdownNavbarType5-menuNavbarType5 {
  position: static !important;
  -webkit-transform: none !important;
          transform: none !important;
}
.mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav li {
  width: 100%;
  display: block;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav li a {
  padding: 0;
  width: 100%;
  color: #000;
  display: block;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px 30px 10px 0;
}
.mobile_menuNavbarType5_content .m-brand-logoNavbarType5 {
  width: 120px;
  margin: 50px auto;
}

.mobile_menuNavbarType5_wrap.mobile_menuNavbarType5_on .mobile_menuNavbarType5_content {
  left: 0px;
  -webkit-transition: all 0.7s ease-out;
  transition: all 0.7s ease-out;
}

.mobile_menuNavbarType5_overlay {
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

.mobile_menuNavbarType5_overlay_on {
  overflow: hidden;
}

.mobile_menuNavbarType5_wrap.mobile_menuNavbarType5_on .mobile_menuNavbarType5_overlay {
  opacity: 1;
  visibility: visible;
}

.mobile_menuNavbarType5_button {
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

.mobile_menuNavbarType5 .mobile-main-navigation .navbar-nav li a:after {
  display: none;
}
.mobile_menuNavbarType5 .mobile-main-navigation .dropdownNavbarType5 > .dropdownNavbarType5-menuNavbarType5 {
  opacity: 1;
  visibility: visible;
}
.mobile_menuNavbarType5 .in-m-searchNavbarType5 {
  position: relative;
  margin-bottom: 35px;
}
.mobile_menuNavbarType5 .in-m-searchNavbarType5 input {
  width: 100%;
  height: 50px;
  padding-left: 20px;
  border: 1px solid #d5d5d5;
}
.mobile_menuNavbarType5 .in-m-searchNavbarType5 button {
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  color: #fff;
  border: none;
  position: absolute;
  background-color: transparent;
}
.mobile_menuNavbarType5 .mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav .dropdownNavbarType5-menuNavbarType5 {
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
.mobile_menuNavbarType5 .mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav .dropdownNavbarType5-menuNavbarType5 li {
  border: none;
  padding: 0 10px;
  line-height: 1;
}
.mobile_menuNavbarType5 .mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav .dropdownNavbarType5-menuNavbarType5 li:hover {
  background-color: transparent;
}
.mobile_menuNavbarType5 .mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav .dropdownNavbarType5-menuNavbarType5 li a {
  color: #000 !important;
}
.mobile_menuNavbarType5 .mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav .dropdownNavbarType5-menuNavbarType5 li a:hover {
  background-color: transparent;
}
.mobile_menuNavbarType5 .dropdownNavbarType5 {
  position: relative;
}
.mobile_menuNavbarType5 .dropdownNavbarType5 .dropdownNavbarType5-btn {
  top: 3px;
  right: 0;
  height: 30px;
  color: #000;
  padding: 5px 10px;
  position: absolute;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.mobile_menuNavbarType5 .dropdownNavbarType5 .dropdownNavbarType5-btn.toggle-open {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.mobile_menuNavbarType5 .mobile_menuNavbarType5_close {
  top: 25px;
  right: 25px;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
}

.in-header-sectionNavbarType5 .mobile_menuNavbarType5 .in-megamenuNavbarType5 {
  position: relative !important;
}

.in-header-sectionNavbarType5 .mobile_menuNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5 h3 {
  color: #000;
}


.in-header-sectionNavbarType5 {
  top: 0;
  left: 0%;
  z-index: 10;
  width: 99%;
  position: absolute;
}
.in-header-sectionNavbarType5.sticky-on {
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
.in-header-sectionNavbarType5.sticky-on .in-header-top-content-area {
  display: none;
}
.in-header-sectionNavbarType5.sticky-on .in-header-top-content {
  display: none !important;
}
.in-header-sectionNavbarType5.sticky-on.header-style-one .sticky-logo {
  display: block;
  margin-right: 40px;
}
.in-header-sectionNavbarType5.header-style-landing.sticky-on .in-header-main-menu-wrapper {
  padding: 20px 30px;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .navbar-nav {
  display: inherit;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5 {
  position: relative;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5:hover .dropdownNavbarType5-menuNavbarType5 {
  visibility: visible;
  opacity: 1;
  clip: inherit;
  -webkit-transform: scaleY(1);
  -khtml-transform: scaleY(1);
  transform: scaleY(1);
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 {
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
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 .dropdownNavbarType5-menuNavbarType5 {
  top: 30px;
  left: 100%;
  -webkit-transform: scaleY(0);
          transform: scaleY(0);
  opacity: 0 !important;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 .dropdownNavbarType5-menuNavbarType5 a {
  font-size: 14px;
  font-weight: 400;
  color: var(--black-color);
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 .dropdownNavbarType5-menuNavbarType5 a:before {
  display: none;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li {
  display: block;
  margin: 0 !important;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li:last-child {
  border-bottom: none;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li:after {
  display: none;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 li:hover .dropdownNavbarType5-menuNavbarType5 {
  top: 0;
  opacity: 1 !important;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 a {
  width: 100%;
  display: block;
  position: relative;
  padding: 10px 30px !important;
  color: var(--black-color) !important;
  font-size: 15px !important;
}
.in-header-sectionNavbarType5 .in-main-navigation-areaNavbarType5 .dropdownNavbarType5-menuNavbarType5 a:before {
  display: none;
}

.in-header-sectionNavbarType5 .in-megamenuNavbarType5 {
  position: static !important;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 {
  left: 0;
  right: 0;
  top: 100%;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  max-width: 1170px;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5 {
  margin: 10px;
  position: relative;
  -webkit-box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
          box-shadow: 0px 3px 29px 0px rgba(0, 0, 0, 0.05);
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5 .in-megamenuNavbarType5-itemNavbarType5-btn:before {
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
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5 h3 {
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding-top: 15px;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5:hover .in-megamenuNavbarType5-itemNavbarType5-btn:before {
  opacity: 1;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5:hover .in-menu-btn-grp {
  top: 50%;
  opacity: 1;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-menu-btn-grp {
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

.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-menu-btn-grp a:hover {
  color: #fff !important;
}
.in-header-sectionNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-menu-btn-grp a:last-child {
  margin-bottom: 0;
}
.in-header-sectionNavbarType5.header-style-landing .in-header-main-menu-wrapper {
  padding: 40px 60px;
}
.in-header-sectionNavbarType5.header-style-landing .in-header-ctaNavbarType5-btn a {
  color: #fff;
  padding: 12px 30px;
  border-radius: 30px;
  display: inline-block;
}
.in-header-sectionNavbarType5.header-style-landing .in-header-ctaNavbarType5-btn a i {
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.in-header-sectionNavbarType5.header-style-landing .in-header-ctaNavbarType5-btn a:hover i {
  margin-left: 5px;
}

.in-main-navigation-areaNavbarType5 li {
  margin-right: 65px;
}
.in-main-navigation-areaNavbarType5 li a {
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  padding-bottom: 40px;
}

.mobile_menuNavbarType5_content {
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
.mobile_menuNavbarType5_content .mobile-main-navigation {
  width: 100%;
}
.mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav {
  width: 100%;
}
.mobile_menuNavbarType5_content .dropdownNavbarType5:after {
  display: none;
}
.mobile_menuNavbarType5_content .navbar-nav .dropdownNavbarType5-menuNavbarType5 {
  position: static !important;
  -webkit-transform: none !important;
          transform: none !important;
}
.mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav li {
  width: 100%;
  display: block;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav li a {
  padding: 0;
  width: 100%;
  color: #000;
  display: block;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px 30px 10px 0;
}
.mobile_menuNavbarType5_content .m-brand-logoNavbarType5 {
  width: 120px;
  margin: 50px auto;
}

.mobile_menuNavbarType5_wrap.mobile_menuNavbarType5_on .mobile_menuNavbarType5_content {
  left: 0px;
  -webkit-transition: all 0.7s ease-out;
  transition: all 0.7s ease-out;
}

.mobile_menuNavbarType5_overlay {
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

.mobile_menuNavbarType5_overlay_on {
  overflow: hidden;
}

.mobile_menuNavbarType5_wrap.mobile_menuNavbarType5_on .mobile_menuNavbarType5_overlay {
  opacity: 1;
  visibility: visible;
}

.mobile_menuNavbarType5_button {
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

.mobile_menuNavbarType5 .mobile-main-navigation .navbar-nav li a:after {
  display: none;
}
.mobile_menuNavbarType5 .mobile-main-navigation .dropdownNavbarType5 > .dropdownNavbarType5-menuNavbarType5 {
  opacity: 1;
  visibility: visible;
}
.mobile_menuNavbarType5 .in-m-searchNavbarType5 {
  position: relative;
  margin-bottom: 35px;
}
.mobile_menuNavbarType5 .in-m-searchNavbarType5 input {
  width: 100%;
  height: 50px;
  padding-left: 20px;
  border: 1px solid #d5d5d5;
}
.mobile_menuNavbarType5 .in-m-searchNavbarType5 button {
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  color: #fff;
  border: none;
  position: absolute;
  background-color: transparent;
}
.mobile_menuNavbarType5 .mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav .dropdownNavbarType5-menuNavbarType5 {
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
.mobile_menuNavbarType5 .mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav .dropdownNavbarType5-menuNavbarType5 li {
  border: none;
  padding: 0 10px;
  line-height: 1;
}
.mobile_menuNavbarType5 .mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav .dropdownNavbarType5-menuNavbarType5 li:hover {
  background-color: transparent;
}
.mobile_menuNavbarType5 .mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav .dropdownNavbarType5-menuNavbarType5 li a {
  color: #000 !important;
}
.mobile_menuNavbarType5 .mobile_menuNavbarType5_content .mobile-main-navigation .navbar-nav .dropdownNavbarType5-menuNavbarType5 li a:hover {
  background-color: transparent;
}
.mobile_menuNavbarType5 .dropdownNavbarType5 {
  position: relative;
}
.mobile_menuNavbarType5 .dropdownNavbarType5 .dropdownNavbarType5-btn {
  top: 3px;
  right: 0;
  height: 30px;
  color: #000;
  padding: 5px 10px;
  position: absolute;
  -webkit-transition: 500ms all ease;
  transition: 500ms all ease;
}
.mobile_menuNavbarType5 .dropdownNavbarType5 .dropdownNavbarType5-btn.toggle-open {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.mobile_menuNavbarType5 .mobile_menuNavbarType5_close {
  top: 25px;
  right: 25px;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
}

.in-header-sectionNavbarType5 .mobile_menuNavbarType5 .in-megamenuNavbarType5 {
  position: relative !important;
}

.in-header-sectionNavbarType5 .mobile_menuNavbarType5 .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5 h3 {
  color: #000;
}


@media screen and (max-width: 1100px) {
  .header-style-landing .in-main-navigation-areaNavbarType5 li {
    margin: 0px 15px;
  }
  .in-header-sectionNavbarType5.header-style-landing .in-header-main-menu-wrapper {
    padding: 20px 25px;
  }
  .in-header-sectionNavbarType5.header-style-landing .in-header-ctaNavbarType5-btn a {
    font-size: 14px;
    padding: 10px 15px;
  }
 
}
@media screen and (max-width: 991px) {
  .header-style-landing .in-main-navigation-areaNavbarType5 li {
    display: none;
  }
  .header-style-landing .in-header-ctaNavbarType5-btn {
    margin-right: 40px;
  }
  .header-style-landing .mobile_menuNavbarType5_button {
    display: block;
  }

}
@media screen and (max-width: 570px) {
  .header-style-landing .in-header-ctaNavbarType5-btn {
    display: none;
  }
  .header-style-landing .mobile_menuNavbarType5_button {
    top: -34px;
  }
}
.ins-footer-menu-area .ins-footer-cta .ins-footer-cta-text .hd-titleNavbarType5 {
  color: #828A8D;
  font-size: 13px;
}
.ins-footer-menu-area .ins-footer-cta .ins-footer-cta-text .hd-valueNavbarType5 {
  color: #DD1D26;
  font-size: 14px;
  font-weight: 500;
}

@media screen and (max-width: 1875px) {
  
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-top-content {
    padding: 10px 15px;
  }
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-main-menu-contentNavbarType5 {
    padding: 0px 15px;
  }
 
}
@media screen and (max-width: 1700px) {
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-cartNavbarType5-get-btnNavbarType5 .in-header-get-btnNavbarType5 {
    margin-left: 20px;
  }
  .in-header-sectionNavbarType5.header-style-six .in-header-top-content {
    padding: 0px 100px;
  }
  .in-header-sectionNavbarType5.header-style-six .ins-header-main-navigation-area {
    padding: 25px 100px;
  }
}
@media screen and (max-width: 1550px) {
  
  .in-header-sectionNavbarType5.header-style-six .in-main-navigation-areaNavbarType5 li {
    margin: 0px 25px;
  }
}
@media screen and (max-width: 1500px) {
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-main-navigation-areaNavbarType5 li {
    margin: 0 20px;
  }
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-menu-cta-sidebarNavbarType5 {
    padding: 30px 20px;
  }
  
}
@media screen and (max-width: 1440px) {

  .in-header-sectionNavbarType5.header-style-six .ins-header-sidenav-cta .in-sidebar-btnNavbarType5 {
    margin-right: 20px;
  }
  
  .in-header-sectionNavbarType5.header-style-six:before {
    left: 50px;
  }
  .in-header-sectionNavbarType5.header-style-six .in-header-top-content {
    padding: 0px 70px;
  }
  .in-header-sectionNavbarType5.header-style-six .ins-header-main-navigation-area {
    padding: 25px 70px;
  }
  .in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-mail-cta {
    display: none;
  }
  .in-header-sectionNavbarType5.header-style-six .top-language-login .top-language {
    display: none;
  }
  
}
@media screen and (max-width: 1340px) {
 
  .in-header-sectionNavbarType5.header-style-six:before {
    display: none;
  }
  .in-header-sectionNavbarType5.header-style-six .in-header-top-content {
    padding: 0px 15px;
  }
  .in-header-sectionNavbarType5.header-style-six .ins-header-main-navigation-area {
    padding: 20px 15px;
  }
 
}
@media screen and (max-width: 1280px) {
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-menu-cta-sidebarNavbarType5 {
    display: none !important;
  }
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-cartNavbarType5-get-btnNavbarType5 {
    display: none !important;
  }
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-main-menu-contentNavbarType5 {
    padding: 20px 15px;
  }
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .mobile_menuNavbarType5_button {
    top: -60px;
    right: 15px;
    display: block;
    color: #056251;
  }
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .mobile_menuNavbarType5 .in-m-searchNavbarType5 button,
.in-header-sectionNavbarType5.header-style-six .mobile_menuNavbarType5 .in-m-searchNavbarType5 button {
    background: #FFB966;
  }
 
}
@media screen and (max-width: 1200px) {
  .in-header-sectionNavbarType5.header-style-fiveNavbarType5 .in-header-top-content {
    display: none !important;
  }
 
}
@media screen and (max-width: 1150px) {
  .in-header-sectionNavbarType5.header-style-six .in-header-top-content .ins-header-top-slug {
    display: none;
  }
  .in-header-sectionNavbarType5.header-style-six .top-language-login .top-login {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
 
  .in-header-sectionNavbarType5.header-style-six .in-main-navigation-areaNavbarType5 li {
    margin: 0px 20px;
  }
  
}
@media screen and (max-width: 991px) {
  
  .in-header-sectionNavbarType5.header-style-six .mobile_menuNavbarType5_button {
    top: -60px;
    right: 20px;
    color: #056251;
  }
 
}





@media screen and (max-width: 480px) {
  
  .in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search input {
    height: 50px;
  }
  .in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search button {
    top: 10px;
    right: 15px;
  }
  .in-header-sectionNavbarType5.header-style-six .ins-header-main-navigation-area {
    padding: 10px 15px;
  }
  .in-header-sectionNavbarType5.header-style-six .mobile_menuNavbarType5_button {
    top: -52px;
  }
 
  .in-header-sectionNavbarType5.header-style-six .in-header-top-content .ins-header-top-search {
    margin-left: 0;
  }
  
}
@media screen and (max-width: 390px) {
  
  .in-header-sectionNavbarType5.header-style-six .in-header-top-content .top-search input {
    width: 150px;
  }
}


@media screen and (max-width: 1750px) {
 
  .in-header-sectionNavbarType5.header-style-two .in-header-top-content {
    padding: 12px 20px;
  }
  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-wrapper {
    padding: 0px 20px;
  }
  .in-header-sectionNavbarType5.header-style-two .header-cta-info {
    margin-left: 25px;
  }
  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-wrapper .brand-logoNavbarType5 {
    margin-right: 25px;
  }
  
}

@media screen and (max-width: 1480px) {
  
  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn {
    max-width: 840px;
  }
  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .in-main-navigation-areaNavbarType5 li {
    margin-right: 30px;
  }
  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .header-cta-btn a {
    padding: 12px 30px;
  }
}

@media screen and (max-width: 1280px) {
 
  .in-header-sectionNavbarType5.header-style-two .header-cta-info {
    display: none !important;
  }
 
}
@media screen and (max-width: 1200px) {
  .in-main-navigation-areaNavbarType5 li {
    margin-right: 40px;
  }

}
@media screen and (max-width: 1024px) {
  .in-main-navigation-areaNavbarType5 li {
    margin-right: 30px;
  }
 
  .in-header-sectionNavbarType5.header-style-four .in-main-navigation-areaNavbarType5 li {
    margin: 0px 10px;
  }
  .in-header-sectionNavbarType5.header-style-four .in-header-main-menu-contentNavbarType5 {
    padding: 25px 0px;
  }
  .in-header-sectionNavbarType5.header-style-four .in-header-main-menu-contentNavbarType5:before {
    display: none;
  }
  .in-header-sectionNavbarType5.header-style-four .in-header-main-menu-contentNavbarType5:after {
    display: none;
  }
  .in-header-sectionNavbarType5.header-style-four {
    background-color: #fff;
  }
 
}
@media screen and (max-width: 991px) {
 
  .in-main-navigation-areaNavbarType5 {
    display: none;
  }
  .in-header-sectionNavbarType5.header-style-one .sticky-logo {
    display: block;
  }
  .in-header-searchNavbarType5 {
    display: none;
  }
 
  .in-header-sectionNavbarType5.header-style-one .in-header-searchNavbarType5-cta-btn .in-header-ctaNavbarType5-btn {
    margin-left: 15px;
    margin-right: 40px;
  }
  .mobile_menuNavbarType5_button {
    display: block;
  }
  
  .in-header-sectionNavbarType5.header-style-two .in-header-top-content {
    display: none !important;
  }
  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn {
    background-color: transparent;
    -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
            justify-content: end !important;
  }
  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .header-cta-btn {
    margin-right: 10px;
  }
  .in-header-sectionNavbarType5.header-style-two .mobile_menuNavbarType5_button {
    right: 15px;
    top: -60px;
  }
 
  .in-header-sectionNavbarType5.header-style-four .in-header-ctaNavbarType5-btn {
    margin-right: 40px;
  }
  .in-header-sectionNavbarType5.header-style-four .in-header-main-menu-contentNavbarType5 {
    padding: 15px 0px;
  }

  
}



@media screen and (max-width: 480px) {
  
  .in-header-sectionNavbarType5.header-style-one .sticky-logo,
.in-header-sectionNavbarType5.sticky-on.header-style-one .sticky-logo {
    width: 120px;
    margin-right: 25px;
  }

  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .header-cta-btn a {
    padding: 5px 15px;
  }
  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn .header-cta-btn {
    margin-right: 5px;
  }
  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-cta-btn {
    padding: 10px 30px;
  }
  .in-header-sectionNavbarType5.header-style-two .in-header-main-menu-wrapper {
    padding: 0px 15px;
  }
  .in-header-sectionNavbarType5.header-style-two .mobile_menuNavbarType5_button {
    top: -47px;
  }
  
  .in-header-sectionNavbarType5.header-style-four .sticky-logo {
    width: 120px;
  }
  .in-header-sectionNavbarType5.header-style-four .in-header-ctaNavbarType5-btn a {
    padding: 12px 20px;
  }
}
.in-sv-header-logo .brand-logoNavbarType5 {
  z-index: 2;
  width: 285px;
  height: 145px;
  background-color: #034b5b;
}
.in-sv-header-logo .brand-logoNavbarType5:before {
  width: 0;
  height: 0;
  top: -4px;
  z-index: 1;
  content: "";
  right: -45px;
  position: absolute;
  border-top: 74px solid transparent;
  border-left: 45px solid #034b5b;
  border-bottom: 74px solid transparent;
}
.in-sv-header-logo .brand-logoNavbarType5:after {
  top: 0;
  left: 0px;
  z-index: -1;
  width: 120%;
  content: "";
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-image: url(../img/h7/logo/logo-bg.png);
}


.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5 {
  position: relative;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5:after {
  top: 2px;
  right: -14px;
  font-size: 14px;
  color: #202020;
  font-weight: 300;

  font-weight: 900;
  position: absolute;
  font-family: "Font Awesome 5 Free";
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5:hover:after {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5:hover .dropdownNavbarType5-menuNavbarType5 {
  visibility: visible;
  opacity: 1;
  clip: inherit;
  -webkit-transform: scaleY(1);
  -khtml-transform: scaleY(1);
  transform: scaleY(1);
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 {
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
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 .dropdownNavbarType5-menuNavbarType5 {
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
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 .dropdownNavbarType5-menuNavbarType5 a {
  font-size: 14px;
  color: #202020;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 .dropdownNavbarType5-menuNavbarType5 a:hover {
  color:#FFB966;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 li {
  display: block;
  margin: 0 !important;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 li:last-child {
  border-bottom: none;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 li:after {
  display: none;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 li:hover .dropdownNavbarType5-menuNavbarType5 {
  top: 0;
  -webkit-transform: scaleY(1) !important;
          transform: scaleY(1) !important;
  opacity: 1 !important;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 a {
  width: 100%;
  display: block;
  position: relative;
  padding: 10px 30px !important;
  color: #101010 !important;
  font-size: 15px !important;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 a:before {
  display: none;
}
.in-sv-header-section .in-sv-main-navigation-area .dropdownNavbarType5-menuNavbarType5 a:hover {
  padding: 10px 30px 10px 45px !important;
  color: #f18f20 !important;
}


.in-sv-header-section .mobile_menuNavbarType5 .in-m-searchNavbarType5 button {
  background-color: #f18f20;
}

.in-sv-footer-widget .logo-widget .brand-logoNavbarType5 {
  margin-bottom: 20px;
}



@media screen and (max-width: 1440px) {
  .in-sv-header-logo .brand-logoNavbarType5:before {
    right: -44px;
  }

}
@media screen and (max-width: 1340px) {
  .in-sv-header-logo .brand-logoNavbarType5 {
    width: 225px;
  }
  .in-sv-header-logo .brand-logoNavbarType5:after {
    display: none;
  }
  
}
@media screen and (max-width: 1200px) {

  .in-sv-header-logo .brand-logoNavbarType5:before {
    display: none;
  }
  .in-sv-header-logo .brand-logoNavbarType5 {
    width: 160px;
    padding: 20px;
  }
  .in-sv-header-logo .brand-logoNavbarType5 {
    height: 90px;
  }
  
}

@media screen and (max-width: 991px) {

  .in-sv-header-logo .brand-logoNavbarType5 {
    right: 0;
    height: 80px;
    margin: 0 auto;
  }
  
  .in-sv-header-section .mobile_menuNavbarType5_button {
    right: 15px;
    top: -57px;
    display: block;
    color: #034b5b;
  }
  .in-sv-header-section .mobile_menuNavbarType5 .dropdownNavbarType5 {
    position: relative !important;
  }
 
}




@media screen and (max-width: 380px) {
  .in-sv-header-logo .brand-logoNavbarType5 {
    height: 75px;
    width: 130px;
  }

}
/*---------------------------------------------------- */
.in-header-sectionNavbarType5.header-style-landing .in-megamenuNavbarType5 .dropdownNavbarType5-menuNavbarType5 .in-megamenuNavbarType5-itemNavbarType5 h3 {
  color: #000000;
}

`