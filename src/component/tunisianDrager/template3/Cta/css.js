import {backgroundNewsLetter} from "./images"

export const cssCtaType3 = `


.btn-animationCtaType3 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    border-radius: 5px;
    font-weight: 600;
    background: transparent;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    position: relative;
    background: #ff6b6b;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ff6b6b),
      to(#ff4f4f)
    );
    background: linear-gradient(90deg, #ff6b6b 0%, #ff4f4f 100%);
    border: none;
    z-index: 0;
  }
  .btn-animationCtaType3 i {
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .btn-animationCtaType3::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background: #ff4f4f;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ff4f4f),
      to(#ff6b6b)
    );
    background: linear-gradient(90deg, #ff4f4f 0%, #ff6b6b 100%);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .btn-animationCtaType3:hover {
    color: #fff;
  }
  .btn-animationCtaType3:hover i {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
  }
  .btn-animationCtaType3:hover::after {
    top: 0;
    height: 100%;
  }
  
  
  .section-b-spaceCtaType3 {
    padding-bottom: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
  .container-fluid-lg {
    padding: 0 calc(12px + (160 - 12) * ((100vw - 320px) / (1920 - 320)));
  }
  
  
  .newsletter-sectionCtaType3 .newsletter-boxCtaType3 {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
  .newsletter-sectionCtaType3 .newsletter-boxCtaType3-2:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${backgroundNewsLetter});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: block;
    z-index: -1;
  }
  
  .newsletter-sectionCtaType3 .newsletter-boxCtaType3-3:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("../images/vegetable/newsletter/2.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: block;
    z-index: -1;
  }
  
  .newsletter-sectionCtaType3 .newsletter-boxCtaType3 .newsletter-containCtaType3 .newsletter-detailCtaType3 h2 {
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
  }
  .newsletter-sectionCtaType3 .newsletter-boxCtaType3 .newsletter-containCtaType3 .newsletter-detailCtaType3 h5 {
    font-weight: 600;
    color: #ffbc5d;
    margin-bottom: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
    font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)));
  }
  .newsletter-sectionCtaType3
    .newsletter-boxCtaType3
    .newsletter-containCtaType3
    .newsletter-detailCtaType3
    .input-boxCtaType3 {
    position: relative;
  }
  .newsletter-sectionCtaType3
    .newsletter-boxCtaType3
    .newsletter-containCtaType3
    .newsletter-detailCtaType3
    .input-boxCtaType3
    ::-webkit-input-placeholder {
    font-size: 14px;
    color: #4a5568;
  }
  .newsletter-sectionCtaType3
    .newsletter-boxCtaType3
    .newsletter-containCtaType3
    .newsletter-detailCtaType3
    .input-boxCtaType3
    ::-moz-placeholder {
    font-size: 14px;
    color: #4a5568;
  }
  .newsletter-sectionCtaType3
    .newsletter-boxCtaType3
    .newsletter-containCtaType3
    .newsletter-detailCtaType3
    .input-boxCtaType3
    :-ms-input-placeholder {
    font-size: 14px;
    color: #4a5568;
  }
  .newsletter-sectionCtaType3
    .newsletter-boxCtaType3
    .newsletter-containCtaType3
    .newsletter-detailCtaType3
    .input-boxCtaType3
    ::-ms-input-placeholder {
    font-size: 14px;
    color: #4a5568;
  }
  .newsletter-sectionCtaType3
    .newsletter-boxCtaType3
    .newsletter-containCtaType3
    .newsletter-detailCtaType3
    .input-boxCtaType3
    ::placeholder {
    font-size: 14px;
    color: #4a5568;
  }
  @media (max-width: 360px) {
    .newsletter-sectionCtaType3
      .newsletter-boxCtaType3
      .newsletter-containCtaType3
      .newsletter-detailCtaType3
      .input-boxCtaType3
      ::-webkit-input-placeholder {
      padding-left: 0;
    }
    .newsletter-sectionCtaType3
      .newsletter-boxCtaType3
      .newsletter-containCtaType3
      .newsletter-detailCtaType3
      .input-boxCtaType3
      ::-moz-placeholder {
      padding-left: 0;
    }
    .newsletter-sectionCtaType3
      .newsletter-boxCtaType3
      .newsletter-containCtaType3
      .newsletter-detailCtaType3
      .input-boxCtaType3
      :-ms-input-placeholder {
      padding-left: 0;
    }
    .newsletter-sectionCtaType3
      .newsletter-boxCtaType3
      .newsletter-containCtaType3
      .newsletter-detailCtaType3
      .input-boxCtaType3
      ::-ms-input-placeholder {
      padding-left: 0;
    }
    .newsletter-sectionCtaType3
      .newsletter-boxCtaType3
      .newsletter-containCtaType3
      .newsletter-detailCtaType3
      .input-boxCtaType3
      ::placeholder {
      padding-left: 0;
    }
  }
  .newsletter-sectionCtaType3
    .newsletter-boxCtaType3
    .newsletter-containCtaType3
    .newsletter-detailCtaType3
    .input-boxCtaType3
    input {
    height: calc(41px + (52 - 41) * ((100vw - 320px) / (1920 - 320)));
    border-radius: 5px;
    border: none;
    padding-left: 45px;
    padding-right: 140px;
  }
  @media (max-width: 575px) {
    .newsletter-sectionCtaType3
      .newsletter-boxCtaType3
      .newsletter-containCtaType3
      .newsletter-detailCtaType3
      .input-boxCtaType3
      input {
      padding-right: 42px;
    }
  }
  
  @media (max-width: 360px) {
    .newsletter-sectionCtaType3
      .newsletter-boxCtaType3
      .newsletter-containCtaType3
      .newsletter-detailCtaType3
      .input-boxCtaType3
      input {
      padding-left: 12px;
    }
  }
  .newsletter-sectionCtaType3
    .newsletter-boxCtaType3
    .newsletter-containCtaType3
    .newsletter-detailCtaType3
    .input-boxCtaType3
    .arrow {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;
    padding: 8px;
    background-color: rgba( 65, 115, 148, 0.1);
    font-size: 15px;
    left: 8px;
    -webkit-text-stroke: 1px #417394;
    color: transparent;
  }
  @media (max-width: 360px) {
    .newsletter-sectionCtaType3
      .newsletter-boxCtaType3
      .newsletter-containCtaType3
      .newsletter-detailCtaType3
      .input-boxCtaType3
      .arrow {
      display: none;
    }
  }
  .newsletter-sectionCtaType3
    .newsletter-boxCtaType3
    .newsletter-containCtaType3
    .newsletter-detailCtaType3
    .input-boxCtaType3
    .sub-btnCtaType3 {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background-color: #ff4f4f;
    position: absolute;
    right: 3px;
    border-radius: 3px;
    border: none;
    padding: calc(10px + (12 - 10) * ((100vw - 320px) / (1920 - 320)))
      calc(8px + (21 - 8) * ((100vw - 320px) / (1920 - 320)));
    font-size: calc(14px + (15 - 14) * ((100vw - 320px) / (1920 - 320)));
    color: #fff;
    font-weight: 500;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .newsletter-sectionCtaType3
    .newsletter-boxCtaType3
    .newsletter-containCtaType3
    .newsletter-detailCtaType3
    .input-boxCtaType3
    .sub-btnCtaType3
    i {
    margin-left: 6px;
  }
  
  @media (max-width: 575px) {
    .newsletter-sectionCtaType3
      .newsletter-boxCtaType3
      .newsletter-containCtaType3
      .newsletter-detailCtaType3
      .input-boxCtaType3
      .sub-btnCtaType3
      i {
      margin-left: 0;
    }
   
  }
  .newsletter-sectionCtaType3-2 .newsletter-boxCtaType3 {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }
  .newsletter-sectionCtaType3-2 .newsletter-boxCtaType3 .newsletter-detailCtaType3 {
    width: 100%;
    height: 100%;
    padding: calc(20px + (130 - 20) * ((100vw - 320px) / (1920 - 320)));
    z-index: 1;
  }
  .newsletter-sectionCtaType3-2 .newsletter-boxCtaType3 .newsletter-detailCtaType3 h2 {
    font-size: calc(18px + (36 - 18) * ((100vw - 320px) / (1920 - 320)));
    margin-bottom: 10px;
  }
  .newsletter-sectionCtaType3-2 .newsletter-boxCtaType3 .newsletter-detailCtaType3 h4 {
    margin-bottom: 8px;
    font-size: calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1.3;
    font-weight: 300;
  }
  .newsletter-sectionCtaType3-2 .newsletter-boxCtaType3 .newsletter-detailCtaType3 .download-app {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    .newsletter-sectionCtaType3-2 .newsletter-boxCtaType3 .newsletter-detailCtaType3 .download-app {
      display: block;
    }
  }
  .newsletter-sectionCtaType3-2 .newsletter-boxCtaType3 .newsletter-detailCtaType3 .download-app h3 {
    margin-right: 15px;
    font-weight: 400;
  }
  
  @media (max-width: 767px) {
    .newsletter-sectionCtaType3-2 .newsletter-boxCtaType3 .newsletter-detailCtaType3 .download-app h3 {
      margin-bottom: 10px;
    }
  }
  .newsletter-sectionCtaType3-2
    .newsletter-boxCtaType3
    .newsletter-detailCtaType3
    .download-app
    .download-app-image {
    margin: 0 -3px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .newsletter-sectionCtaType3-2
    .newsletter-boxCtaType3
    .newsletter-detailCtaType3
    .download-app
    .download-app-image
    li {
    margin: 0 3px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .newsletter-sectionCtaType3-2 .newsletter-boxCtaType3 .shape-box {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    text-align: center;
  }
  .newsletter-sectionCtaType3-2 .newsletter-boxCtaType3 .shape-box:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../images/veg-3/shape/circle.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    -webkit-animation: rounded infinite 30s linear;
    animation: rounded infinite 30s linear;
    right: 0;
    top: 0;
    z-index: -1;
  }

`