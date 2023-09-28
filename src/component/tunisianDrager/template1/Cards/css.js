export const csscardstype1 = `
@import "https://fonts.googleapis.com/css?family=Playfair+Display:500,700,800,900|Poppins:400,500,600,700,800&amp;display=swap";
.bodyCardType1 {
  font-family: poppins, sans-serif;
}



.pCardType1 {
  line-height: 1.8;
}

.h2CardType1 {
  font-size: 35px;
}



.service-areaCardType1 {
  position: relative;
  z-index: 1;
 
}
.service-areaCardType1 .single-service {
  position: relative;
  -webkit-box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.07);
  box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.07);
  padding: 50px 20px;
  background: url(https://res.cloudinary.com/dbou9rqjw/image/upload/v1676017895/contact-bg_zzixxy.png) center center;
  border-radius: 10px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}
.service-areaCardType1 .single-service .h2CardType1 {
  font-size: 24px;
  font-family: playfair display, serif;
  color: #181818;
  margin-bottom: 12px;
}
.service-areaCardType1 .single-service .service-iconCardType1 {
  width: 45px;
  height: 45px;
  background-color: #1d42d9;
  color: #fff;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
}
.service-areaCardType1 .single-service .service-iconCardType1 .iCardType1 {
  font-size: 23px;
  line-height: 44px;
}
.service-areaCardType1 .single-service .service-contentCardType1 .pCardType1 {
  margin-bottom: 0;
  font-size: 16px;
  color: #4f4f4f;
  margin-top: 0;
}
.service-areaCardType1 .single-service:hover {
  -webkit-transform: translateY(-15px);
  transform: translateY(-15px);
}





  @media (min-width: 992px) and (max-width: 1200px) {
   
    .service-areaCardType1 .single-service .service-contentCardType1 .pCardType1 {
      font-size: 16px;
    }
 
   
  }
  @media (min-width: 768px) and (max-width: 991px) {
  
    .service-areaCardType1 {
      bottom: 0;
      padding: 50px 0;
    }
    .service-areaCardType1 .single-service .service-contentCardType1 .pCardType1 {
      font-size: 18px;
    }
    .service-areaCardType1 .sst-10 {
      position: relative;
      margin-top: 30px;
    }

  }
  @media (max-width: 767px) {
   
    .service-areaCardType1 {
      bottom: 0;
    }
    .service-areaCardType1 .single-service {
      margin-top: 20px;
    }
    .service-areaCardType1 .single-service .service-iconCardType1 {
      margin-bottom: 10px;
    }
    .service-areaCardType1 .single-service .h2CardType1 {
      font-size: 20px;
    }
  }
 
  

`