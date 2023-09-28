export const cssTestomonialType2 = `

.bodyTestomonialType2{
    scroll-behavior: auto !important;
  }
  .bodyTestomonialType2 {
    font-family: "Barlow", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #737887;
    line-height: 26px;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }
  
  .imgTestomonialType2 {
    border: none;
    max-width: 100%;
  }
  
  .pTestomonialType2 {
    font-family: "Roboto", sans-serif;;
    margin: 0 0 18px 0;
    color: #737887;
    line-height: 1.75;
  }
  
  
  .h2TestomonialType2
  .h3TestomonialType2
   {
    font-family:"Barlow", sans-serif;
    color: #141d38;
    text-transform: none;
    font-weight: 700;
    line-height: 1.4;
    margin: 0 0 15px 0;
  }
  
  .h2TestomonialType2 {
    font-size: 40px;
    line-height: 1.25;
  }
  .h3TestomonialType2 {
    font-size: 36px;
    line-height: 1.278;
  }
  
  @media (max-width: 1199px) {
   
    .h2TestomonialType2 {
      font-size: 36px;
      line-height: 1.3;
    }
    .h3TestomonialType2 {
      font-size: 30px;
    }
  
  }
  @media (max-width: 767px) {
   
    .h2TestomonialType2 {
      font-size: 34px;
      line-height: 1.3;
    }
    .h3TestomonialType2{
      font-size: 26px;
    }
  
  }
  @media (max-width: 575px) {
  
    .h2TestomonialType2 {
      font-size: 28px;
    }
  }
  
  .sec-titleTestomonialType2 {
    margin-bottom: calc(50px);
    margin-top: -0.32em;
    text-transform: capitalize;
  }
  .sub-titleTestomonialType2 {
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: #0060ff;
    margin-bottom: 30px;
    text-transform: uppercase;
    line-height: 24px;
    margin-top: -0.34em;
  }
  .sub-titleTestomonialType2:has(.imgTestomonialType2) {
    margin-top: 0;
  }
  .sub-titleTestomonialType2 .imgTestomonialType2 {
    margin: 0 10px 0 0;
  }
  .box-titleTestomonialType2 {
    font-size: 24px;
    line-height: 1.417;
    font-weight: 700;
    margin-top: -0.32em;
  }
  
  
  .title-areaTestomonialType2 {
    margin-bottom: calc(50px);
    position: relative;
    z-index: 2;
  }
  .title-areaTestomonialType2 .sec-titleTestomonialType2 {
    margin-bottom: 15px;
  }
  
  
  .shadow-titleTestomonialType2 {
    font-family:"Barlow", sans-serif;
    font-size: 74px;
    font-weight: 900;
    line-height: 1;
    background-image: -webkit-linear-gradient(
      top,
      rgba(226, 232, 250, 0.7) 0%,
      rgba(226, 232, 250, 0) 88.54%
    );
    background-image: linear-gradient(
      180deg,
      rgba(226, 232, 250, 0.7) 0%,
      rgba(226, 232, 250, 0) 88.54%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin: -0.55em 0 -0.45em -0.25em;
  }
  .shadow-titleTestomonialType2.color2TestomonialType2 {
    background-image: -webkit-linear-gradient(
      top,
      #232c47 0%,
      rgba(20, 29, 56, 0) 91.15%
    );
    background-image: linear-gradient(
      180deg,
      #232c47 0%,
      rgba(20, 29, 56, 0) 91.15%
    );
  }
  
  @media (max-width: 1199px) {
    .sub-titleTestomonialType2 {
      margin-bottom: 20px;
    }
    .shadow-titleTestomonialType2 {
      font-size: 64px;
    }
    .title-areaTestomonialType2,
    .sec-titleTestomonialType2 {
      --section-title-space: 60px;
    }
    
   
  }
  @media (max-width: 991px) {
    .shadow-titleTestomonialType2 {
      font-size: 60px;
    }
    .title-areaTestomonialType2,
    .sec-titleTestomonialType2 {
      --section-title-space: 50px;
    }
  
  }
  @media (max-width: 575px) {
    .shadow-titleTestomonialType2 {
      font-size: 52px;
    }
  }
  @media (max-width: 375px) {
    .shadow-titleTestomonialType2 {
      font-size: 40px;
    }
  }
  
  
  
  .bg-top-centerTestomonialType2 {
    background-size: auto;
    background-position: top center;
  }
  
  .text-themeTestomonialType2 {
    color: #0060ff !important;
  }
  
  .text-whiteTestomonialType2 {
    color: #ffffff !important;
  }
  
  
  
  .ripple-animation,
  .play-btn:after,
  .play-btn:before,
  .testi-box_quote:after,
  .testi-box_quote:before,
  .testi-gridTestomonialType2_quote:after,
  .testi-gridTestomonialType2_quote:before,
  .service-grid_icon:after,
  .service-grid_icon:before,
  .process-card_number:after,
  .process-card_number:before,
  .process-card .pulse:after,
  .process-card .pulse:before {
    -webkit-animation-duration: var(--ripple-ani-duration);
    animation-duration: var(--ripple-ani-duration);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: ripple;
    animation-name: ripple;
  }
  @-webkit-keyframes ripple {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
    30% {
      opacity: 0.4;
    }
    100% {
      -webkit-transform: scale(1.8);
      transform: scale(1.8);
      opacity: 0;
    }
  }
  @keyframes ripple {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
    30% {
      opacity: 0.4;
    }
    100% {
      -webkit-transform: scale(1.8);
      transform: scale(1.8);
      opacity: 0;
    }
  }
  
  
  
  .testi-gridTestomonialType2 {
    position: relative;
    background-color: #ffffff;
    box-shadow: 0px 6px 15px rgba(8, 14, 28, 0.06);
    border-radius: 10px;
    padding: 120px 40px 40px 40px;
    margin-top: 50px;
  }
  .testi-gridTestomonialType2_img {
    background-color: #080e1c;
    width: 120px;
    text-align: center;
    border-radius: 10px;
    border: 10px solid #080e1c;
    position: absolute;
    top: -50px;
    left: 40px;
  }
  .testi-gridTestomonialType2_img > .imgTestomonialType2 {
    border-radius: 10px;
    width: 100%;
  }
  .testi-gridTestomonialType2_quote {
    height: 36px;
    width: 36px;
    line-height: 36px;
    background-color: #0060ff;
    border-radius: 50%;
    text-align: center;
    position: absolute;
    bottom: -18px;
    left: calc(50% - 18px);
    z-index: 2;
    margin: -28px auto 0 auto;
  }
  .testi-gridTestomonialType2_quote .imgTestomonialType2 {
    position: relative;
    z-index: 1;
  }
  .testi-gridTestomonialType2_quote:after,
  .testi-gridTestomonialType2_quote:before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #0060ff;
    z-index: -1;
    border-radius: 50%;
    -webkit-transition: all ease 0.4s;
    transition: all ease 0.4s;
  }
  .testi-gridTestomonialType2_quote:after {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
  }
  .testi-gridTestomonialType2 .box-titleTestomonialType2 {
    margin-bottom: 4px;
    color:#141d38
  }
  .testi-gridTestomonialType2_desig {
    font-size: 14px;
    display: block;
    margin-bottom: -0.5em;
  }
  .testi-gridTestomonialType2_text {
    margin-top: -0.45em;
    margin-bottom: 25px;
  }
  .testi-gridTestomonialType2_review {
    color: #0060ff;
    font-size: 14px;
    position: absolute;
    top: 35px;
    right: 40px;
  }
  .testi-gridTestomonialType2_review .iTestomonialType2 {
    margin-right: 3px;
  }
  
  
`