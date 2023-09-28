export const css_data_navbartype2 = `
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.quick-links_Navbartype2{
    color:#EB455F
}


.Body_NavbarType2 {
    font-family: "Inter", sans-serif;
    font-weight: 300;
    overflow-y: scroll;
}

/* Backgroun color controle */

.nav-container_Navbartype2 {
    background: #3498db;
    height: 44px;
    z-index: 300;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
}

.nav-container_Navbartype2 .nav_Navbartype2 {
    width: 1000px;
    margin: 0 auto;
    padding: 0 8px;
    height: 100%;
}

.nav_Navbartype2 .desktop-nav_Navbartype2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}

.nav_Navbartype2 .desktop-nav_Navbartype2 .li_Navbartype2 .a_Navbartype2 {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    opacity: 1.2;
    transition: opacity 400ms;
}

.nav_Navbartype2 .desktop-nav_Navbartype2 .li_Navbartype2 .a_Navbartype2 :hover {
    opacity: 1;
}

.link-logo_Navbartype2 {
  
 

    height: 40px;
    width: 40px;
   
}
/* search  icon */
.link-search_Navbartype2 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjU1MTAyIDEzLjYwMkMxMC44OTI5IDEzLjYwMiAxMy42MDIgMTAuODkyOSAxMy42MDIgNy41NTEwMkMxMy42MDIgNC4yMDkxMyAxMC44OTI5IDEuNSA3LjU1MTAyIDEuNUM0LjIwOTEzIDEuNSAxLjUgNC4yMDkxMyAxLjUgNy41NTEwMkMxLjUgMTAuODkyOSA0LjIwOTEzIDEzLjYwMiA3LjU1MTAyIDEzLjYwMlpNNy41NTEwMiAxNS4xMDJDMTEuNzIxMyAxNS4xMDIgMTUuMTAyIDExLjcyMTMgMTUuMTAyIDcuNTUxMDJDMTUuMTAyIDMuMzgwNzEgMTEuNzIxMyAwIDcuNTUxMDIgMEMzLjM4MDcxIDAgMCAzLjM4MDcxIDAgNy41NTEwMkMwIDExLjcyMTMgMy4zODA3MSAxNS4xMDIgNy41NTEwMiAxNS4xMDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIuMzA4MSAxMi42MUwxMy4zMjM0IDExLjUwNTdMMTkuMTg1OCAxNi44OTU4TDE4LjE3MDUgMThMMTIuMzA4MSAxMi42MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
    display: block;
    background-position: center;
    background-size: 18px;
    height: 44px;
    width: 20px;
    background-repeat: no-repeat;
}

.link-bag_Navbartype2 {
    background: url('images/bag-icon.svg');
    display: block;
    background-position: center;
    background-size: 17px;
    height: 44px;
    width: 20px;
    background-repeat: no-repeat;
}
/* close icon */
.link-close_Navbartype2 {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMjA5MzcgMi4wMTk4OUwyLjI3MDAzIDAuOTU5MjI5TDE0Ljk5NzkgMTMuNjg3MkwxMy45MzczIDE0Ljc0NzhMMS4yMDkzNyAyLjAxOTg5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEzLjIzMDEgMC45NTkzMjdMMTQuMjkwOCAyLjAxOTk5TDEuNTYyODYgMTQuNzQ3OUwwLjUwMjE5NyAxMy42ODcyTDEzLjIzMDEgMC45NTkzMjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");
    display: block;
    background-position: center;
    background-size: 17px;
    height: 44px;
    width: 20px;
    background-repeat: no-repeat;
}

/* Search Container */

.search-container_Navbartype2.hide_Navbartype2 {
    opacity: 0;
    pointer-events: none;
}

.search-container_Navbartype2 {
    width: 60%;
    margin: 0 auto;
    padding: 0 42px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
}

.search-container_Navbartype2 .link-search_Navbartype2 {
    position: absolute;
    left: 12px;
    opacity: 0.5;
}

.search-container_Navbartype2 .link-close_Navbartype2 {
    position: absolute;
    top: 0;
    right: 12px;
    opacity: 0.5;
    cursor: pointer;
    transition: all 400ms;
}

.search-container_Navbartype2 .link-close_Navbartype2:hover {
    opacity: 0.7;
}

.search-container_Navbartype2 .form_Navbartype2 {
    width: 100%;
    margin: 0 auto;
}

.search-container_Navbartype2 .form_Navbartype2 .input_Navbartype2 {
    width: 100%;
    height: 44px;
    border: 0;
    outline: none;
    background: transparent;
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 17px;
}
.search-container_Navbartype2 .form_Navbartype2 .input_Navbartype2::placeholder{
    color: white !important;
}
/* overlay_Navbartype2 */

.overlay_Navbartype2.show {
    position: fixed;
    background: #3498db;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 100;
}

/* Quick Links */

.search-container_Navbartype2 .quick-links_Navbartype2 {
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    padding: 16px 8px;
    border-radius: 0 0 16px 16px;
}

.search-container_Navbartype2 .quick-links_Navbartype2 .h2_Navbartype2 {
    text-transform: uppercase;
    font-size: 12px;
    color: #6e6e73;
    margin: 0 32px;
    margin-top: 10px;
}

.search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 {
    list-style: none;
    margin-top: 12px;
}

.search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2 .a_Navbartype2  {
    display: inline-block;
    width: 100%;
    padding: 8px 50px;
    font-size: 14px;
    color: #1d1d1f;
    text-decoration: none;
    font-weight: 400;
}

.search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2 .a_Navbartype2:hover {
    background: #f5f5f5;
    color: #2997ff;
}

/* Desktop Nav Animation */

.desktop-nav_Navbartype2 .li_Navbartype2 {
    transition: all 400ms ease;
}

.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2 {
    opacity: 0;
    transform: scale(0.8);
    pointer-events: none;
}

/* overlay_Navbartype2 Animation */

.overlay_Navbartype2 {
    transition: all 400ms ease;
}

/* Navigation Menu Items Transition Delay */

.desktop-nav_Navbartype2 .li_Navbartype2:nth-of-type(1),
.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2:nth-of-type(10) {
    transition-delay: 0ms;
}

.desktop-nav_Navbartype2 .li_Navbartype2:nth-of-type(2),
.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2:nth-of-type(9) {
    transition-delay: 30ms;
}

.desktop-nav_Navbartype2 .li_Navbartype2:nth-of-type(3),
.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2:nth-of-type(8) {
    transition-delay: 60ms;
}

.desktop-nav_Navbartype2 .li_Navbartype2:nth-of-type(4),
.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2:nth-of-type(7) {
    transition-delay: 90ms;
}

.desktop-nav_Navbartype2 .li_Navbartype2:nth-of-type(5),
.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2:nth-of-type(6) {
    transition-delay: 120ms;
}

.desktop-nav_Navbartype2 .li_Navbartype2:nth-of-type(6),
.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2:nth-of-type(5) {
    transition-delay: 150ms;
}

.desktop-nav_Navbartype2 .li_Navbartype2:nth-of-type(7),
.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2:nth-of-type(4) {
    transition-delay: 180ms;
}

.desktop-nav_Navbartype2 .li_Navbartype2:nth-of-type(8),
.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2:nth-of-type(3) {
    transition-delay: 210ms;
}

.desktop-nav_Navbartype2 .li_Navbartype2:nth-of-type(9),
.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2:nth-of-type(2) {
    transition-delay: 240ms;
}

.desktop-nav_Navbartype2 .li_Navbartype2:nth-of-type(10),
.desktop-nav_Navbartype2.hide_Navbartype2 .li_Navbartype2:nth-of-type(1) {
    transition-delay: 270ms;
}

/* Search Container Animation */

.search-container_Navbartype2 .form_Navbartype2,
.search-container_Navbartype2 .link-search_Navbartype2 {
    opacity: 1;
    transform: translateX(0);
    transition: all 400ms ease;
    transition-delay: 300ms;
}

.search-container_Navbartype2.hide_Navbartype2 .form_Navbartype2,
.search-container_Navbartype2.hide_Navbartype2 .link-search_Navbartype2 {
    opacity: 0;
    transform: translateX(50px);
}

.search-container_Navbartype2 .link-search_Navbartype2 {
    opacity: 0.6;
}

.search-container_Navbartype2.hide_Navbartype2 .link-close_Navbartype2 {
    opacity: 0;
}

.search-container_Navbartype2 .link-close_Navbartype2 {
    opacity: 0.5;
    transition: all 400ms ease;
    transition-delay: 400ms;
}

.search-container_Navbartype2.hide_Navbartype2 .quick-links_Navbartype2 .h2_Navbartype2 {
    opacity: 0;
    transform: translateX(50px);
}

.search-container_Navbartype2 .quick-links_Navbartype2 .h2_Navbartype2 {
    opacity: 1;
    transform: translateX(0);
    transition: all 400ms ease;
    transition-delay: 100ms;
}

.search-container_Navbartype2.hide_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2 {
    transform: translateX(60px);
    opacity: 0;
}

.search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2 {
    opacity: 1;
    transform: translateX(0);
    transition: all 400ms ease;
}

.search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2:nth-of-type(1) {
    transition-delay: 120ms;
} 

.search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2:nth-of-type(2) {
    transition-delay: 140ms;
} 

.search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2:nth-of-type(3) {
    transition-delay: 160ms;
} 

.search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2:nth-of-type(4) {
    transition-delay: 180ms;
} 

.search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2:nth-of-type(5) {
    transition-delay: 200ms;
} 


/* Hidden Items */

.mobile-nav_Navbartype2,
.mobile-search-container_Navbartype2 {
    display: none;
}


/* Media Queries */

@media (max-width: 1100px) {
    .nav-container_Navbartype2 .nav_Navbartype2 {
        width: 100%;
        padding: 0 32px;
    }
}

@media (max-width: 768px) {
    /* background in mobile*/
    .nav-container_Navbartype2 .desktop-nav_Navbartype2 {
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 0vh;
        background: #3498db;
        justify-content: start;
        overflow: hidden;
        z-index: -1;
        transition: all 1000ms ease;
    }
    .socialMedia{
        display: none;
    }
    .nav-container_Navbartype2.active .desktop-nav_Navbartype2 {
        height: 100vh;
    }

    .nav-container_Navbartype2 .desktop-nav_Navbartype2 .li_Navbartype2 {
        width: 100%;
        padding: 0 32px;
    }

    .nav-container_Navbartype2 .desktop-nav_Navbartype2 .li_Navbartype2:first-child {
        margin-top: 120px;
    }

    .nav-container_Navbartype2 .desktop-nav_Navbartype2 .link-logo_Navbartype2,
    .nav-container_Navbartype2 .desktop-nav_Navbartype2 .link-search_Navbartype2,
    .nav-container_Navbartype2 .desktop-nav_Navbartype2 .link-bag_Navbartype2 {
        display: none;
    }

    .nav-container_Navbartype2 .desktop-nav_Navbartype2 .li_Navbartype2 .a_Navbartype2 {
        padding: 16px 0;
        display: inline-block;
        border-bottom: 1px solid whitesmoke;
        width: 100%;
        font-size: 17px;
        transform: translateY(-80px);
        opacity: 0;
        transition: all 700ms ease;
    }

    .nav-container_Navbartype2.active .desktop-nav_Navbartype2 .li_Navbartype2 .a_Navbartype2 {
        transform: translateY(0);
        opacity: 1;
    }

    /* Mobile Nav */

    .nav_Navbartype2 .mobile-nav_Navbartype2 {
        display: flex;
        width: 100%;
        justify-content: space-between;
        list-style: none;
    }

    .nav_Navbartype2 .menu-icon_Navbartype2-container_Navbartype2 {
        width: 20px;
        height: 44px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .nav_Navbartype2 .menu-icon_Navbartype2 {
        position: relative;
        width: 100%;
    }

    .nav_Navbartype2 .menu-icon_Navbartype2 .line-1_Navbartype2,
    .nav_Navbartype2 .menu-icon_Navbartype2 .line-2_Navbartype2 {
        position: absolute;
        height: 1px;
        width: 100%;
        background: #fff;
        transition-property: transform, top;
        transition-delay: 0ms, 160ms;
        transition-duration: 200ms;
    }

    .nav_Navbartype2 .menu-icon_Navbartype2 .line-1_Navbartype2 {
        top: -4px;
    }

    .nav_Navbartype2 .menu-icon_Navbartype2 .line-2_Navbartype2 {
        top: 4px;
    }

    .nav-container_Navbartype2.active .nav_Navbartype2 .menu-icon_Navbartype2-container_Navbartype2 .menu-icon_Navbartype2 .line-1_Navbartype2 {
        top: 0;
        transform: rotateZ(45deg);
        transition-property: top, transform;
        transition-delay: 0ms, 160ms;
        transition-duration: 200ms;
    }

    .nav-container_Navbartype2.active .nav_Navbartype2 .menu-icon_Navbartype2-container_Navbartype2 .menu-icon_Navbartype2 .line-2_Navbartype2 {
        top: 0;
        transform: rotateZ(-45deg);
        transition-property: top, transform;
        transition-delay: 0ms, 160ms;
        transition-duration: 200ms;
    }

    /* Bag Icon Animation */

    .nav-container_Navbartype2.active .mobile-nav_Navbartype2 .link-bag_Navbartype2 {
        transform: translateY(8px);
        opacity: 0;
        pointer-events: none;
    }

    .nav-container_Navbartype2 .mobile-nav_Navbartype2 .link-bag_Navbartype2 {
        transition: all 1000ms ease;
    }



    /* Search Box */
    .desktop-nav_Navbartype2 .input_Navbartype2::placeholder{
        color:white !important;
    }
    .mobile-search-container_Navbartype2 .input_Navbartype2 {
        width: 100%;
        padding: 12px 36px;
        font-family: "Inter", sans-serif;
        font-size: 17px;
        background: #2997ff;
        border: 0;
        color: #fff;
        border-radius: 8px;
        outline: none;
    }
    .mobile-search-container_Navbartype2 .input_Navbartype2::placeholder{
        color:white;
    }

    .mobile-search-container_Navbartype2 {
        position: relative;
        padding: 0 16px;
        margin-top: -30px;
        border-bottom: 1px solid white;
        display: flex;
        padding-bottom: 16px;
        align-items: center;
        transform: rotateX(90deg);
        opacity: 0;
        transition: all 600ms ease;
    }

    .nav-container_Navbartype2.active .mobile-search-container_Navbartype2 {
        transform: rotateX(0deg);
        margin-top: 10px;
        opacity: 1;
    }

    .mobile-search-container_Navbartype2 .link-search_Navbartype2 {
        position: absolute;
        left: 24px;
        opacity: .5;
        background-size: 15px;
    }

    /* Nav Move Up */

    .nav-container_Navbartype2 .nav_Navbartype2.move-up {
        margin-top: -40px;
    }

    /* Cancel Button */

    .mobile-search-container_Navbartype2 .cancel-btn_Navbartype2 {
        color: whitesmoke;
        font-size: 17px;
        font-weight: 400;
        cursor: pointer;
        width: 0px;
        overflow: hidden;
        transition: all 400ms ease;
    }

    .mobile-search-container_Navbartype2 .search-bar_Navbartype2.active + .cancel-btn_Navbartype2 {
        padding: 0 16px;
        width: 74px;
    }

    .mobile-search-container_Navbartype2 .search-bar_Navbartype2 {
        flex: 1;
    }

    /* Desktop Nav Move Down */

    .nav_Navbartype2 .desktop-nav_Navbartype2.move-down .li_Navbartype2:first-child {
        margin-top: 150px;
    }

    .nav_Navbartype2 .desktop-nav_Navbartype2.move-down .li_Navbartype2 {
        opacity: 0;
        pointer-events: none;
    }

    
    /* Quick Links */

    .mobile-search-container_Navbartype2 .search-bar_Navbartype2.active ~ .quick-links_Navbartype2 {
        top: 80px;
        opacity: 1;
        pointer-events: auto;
        transition-delay: 40ms;
    }
   
    .mobile-search-container_Navbartype2 .quick-links_Navbartype2 {
        position: absolute;
        left: 0;
        right: 0;
        padding: 0 32px;
        opacity: 0;
        pointer-events: none;
        top: 10px;
        transition: all 400ms ease;
    }

    .mobile-search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 {
        list-style: none;
    }

    .mobile-search-container_Navbartype2 .quick-links_Navbartype2 .h2__Navbartype2 {
        color: red;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 400;
    }

    .mobile-search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2 .a_Navbartype2 {
        padding: 16px 0;
        display: inline-block;
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        border-bottom: 1px solid whitesmoke;
        width: 100%;
    }

    .mobile-search-container_Navbartype2 .quick-links_Navbartype2 .ul_navbarType2 .li_Navbartype2 .a_Navbartype2:hover {
        color: #2997ff;
    }

    /* Nav Animation */

    .nav-container_Navbartype2 .nav_Navbartype2 {
        transition: all 400ms ease;
    }
}




` 