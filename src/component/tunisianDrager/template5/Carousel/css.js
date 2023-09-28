export const cssCarouselType5 = `


/* Large desktop :1920px. */
@media (min-width: 1920px) {

  .slider-areaCarouselType5 {
    height: 950px;
  }
  
}



/* Normal desktop :992px. */
@media (min-width: 992px) and (max-width: 1200px) {


  .slide-contentCarouselType5 .h2CarouselType5 {
    font-size: 45px;
    line-height: 45px;
  }


 
}

/* Tablet desktop :768px. */
@media (min-width: 768px) and (max-width: 991px) {
 

  .slide-contentCarouselType5 .h2CarouselType5 {
    font-size: 45px;
    line-height: 45px;
  }

 
 
  .slide-contentCarouselType5 {
    padding-left: 20px;
  }
 
  .slider-areaCarouselType5.twoCarouselType5 .slide-contentCarouselType5 .h2CarouselType5 {
    line-height: 50px;
  }
 

}

/* small mobile :320px. */
@media (max-width: 767px) {


  .slide-contentCarouselType5 .h2CarouselType5 {
    font-size: 24px;
    line-height: 30px;
  }

 
  .slider-areaCarouselType5.twoCarouselType5 .slide-contentCarouselType5 .h2CarouselType5{
    line-height: 35px;
  }


 
 
  .slider-areaCarouselType5 {
    height: 75vh;
  }


}
/* Large Mobile :480px. */
@media only screen and (min-width: 480px) and (max-width: 767px) {
 
  .slide-contentCarouselType5 .h2CarouselType5 {
    font-size: 35px;
    line-height: 35px;
  }
  

 
}

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800");
body {
  color: #606060;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "Open Sans", sans-serif;
}


.h2CarouselType5,
 {
  font-weight: 700;
  margin: 0;
  padding: 0;
}


.aCarouselType5,
 {
  outline: medium none;
  color: #606060;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}


.h2CarouselType5 .aCarouselType5,
 {
  color: inherit;
}

.pCarouselType5 {
  font-size: 14px;
  line-height: 24px;
  color: #666666;
  font-family: "Open Sans", sans-serif;
}

.default-btnCarouselType5 {
  color: #fff !important;
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  padding: 8px 25px 9px;
  position: relative;
  text-transform: uppercase;
  z-index: 9;
  background: #ec1c23;
}

.slider-areaCarouselType5,
.single-banner {
  position: relative;
  overflow: hidden;
}
.single-slideCarouselType5:after,
.banner-area:after {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  background: rgba(0, 0, 0, 0.32);
  width: 100%;
  height: 100%;
}
.twoCarouselType5 .single-slideCarouselType5:after {
  background: rgba(0, 0, 0, 0.55);
}


.slide-contentCarouselType5,
.text-content {
  z-index: 99;
  position: relative;
}

.slide-contentCarouselType5-wrapperCarouselType5 {
  display: inline-table;
  width: 100%;
}
.slide-contentCarouselType5 {
  display: table-cell;
  text-align: left;
  vertical-align: middle;
}
.slider-areaCarouselType5.twoCarouselType5 .slide-contentCarouselType5 {
  text-align: center;
}


.slide-contentCarouselType5 .h2CarouselType5 {
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 58px;
  font-weight: 800;
  line-height: 64px;
  text-transform: capitalize;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}
.slider-areaCarouselType5.twoCarouselType5 .slide-contentCarouselType5 .h2CarouselType5 {
  line-height: 82px;
}
.slider-areaCarouselType5.twoCarouselType5 .slide-contentCarouselType5 .pCarouselType5 {
  margin-bottom: 40px;
}
.slide-contentCarouselType5 .pCarouselType5 {
  color: #fff;
  font-family: "Open Sans", sans-serif;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 35px;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}
.slider-areaCarouselType5 .default-btnCarouselType5 {
  -webkit-animation-delay: 1.4s;
  animation-delay: 1.4s;
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}
.slider-areaCarouselType5 .owl-item.active .slide-contentCarouselType5 .h2CarouselType5,
.slider-areaCarouselType5 .owl-item.active .slide-contentCarouselType5 .pCarouselType5,
.slider-areaCarouselType5 .owl-item.active .default-btnCarouselType5 {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
.slider-areaCarouselType5 .owl-item.active .default-btnCarouselType5 {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
.slider-areaCarouselType5 .owl-item.active .slider-img img {
  animation-delay: 0.2s;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInRight;
}
.owl-item.active .slider-img {
  animation-delay: 0.2s;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInRight;
}


.slider-areaCarouselType5 .owl-item.active .slide-contentCarouselType5 .h2CarouselType5 {
  -webkit-animation-delay: 750ms;
  animation-delay: 750ms;
}
.slider-areaCarouselType5 .owl-item.active .slide-contentCarouselType5 .pCarouselType5 {
  -webkit-animation-delay: 1100ms;
  animation-delay: 1100ms;
}
.slider-areaCarouselType5
  .owl-item.active
  .slide-contentCarouselType5
  .banner-btn {
  -webkit-animation-delay: 1700ms;
  animation-delay: 1700ms;
}
.owl-nav div {
  background: rgba(236, 28, 35, 0.64);
  color: #ddd;
  font-size: 18px;
  border-radius: 3px;
  height: 40px;
  left: -46px;
  line-height: 40px;
  margin-top: -20px;
  position: absolute;
  text-align: center;
  top: 50%;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  width: 35px;
  z-index: 999;
}
.owl-nav .owl-next {
  left: auto;
  right: -46px;
}
.slider-areaCarouselType5:hover .owl-nav div {
  left: 0;
}
.slider-areaCarouselType5:hover .owl-nav .owl-next {
  left: auto;
  right: 0;
}
.owl-nav div:hover {
  color: #fff;
}
.single-slideCarouselType5 {
  background-position: top center;
  background-size: cover;
}

.slider-areaCarouselType5 {
  height: 100vh;
}
.slider-areaCarouselType5 div {
  height: 100%;
}

.slider-areaCarouselType5 .owl-nav div {
  height: auto;
}
.owl-carousel .owl-item .slider-img > img {
  bottom: 0;
  position: absolute;
  right: 0;
  width: 70%;
}



`