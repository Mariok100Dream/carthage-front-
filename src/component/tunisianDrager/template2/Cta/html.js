import {background_ctaType2,backgroundImageCtaType2,phoneIconCtaType2} from "./images"

export const html_ctaType2 = `

	
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">

<section  class="in-cta-section-2CtaType2">
    <div class="jarallaxCtaType2  position-relative" 
    
    style="background-image: url(${backgroundImageCtaType2});">
        <div class="background_overlayCtaType2"></div>
        <div class="container">
            <div class="in-cta-content-2CtaType2 position-relative">
                <div class="in-cta-text-btn-group wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1000ms">
                    <div class="in-section-title-2CtaType2 headline">
                        <h2 
                        class="h2CtaType2"
                        >Need Something<br>
                        we are here</h2>
                    </div>
                    <div class="in-cta-btn-grpCtaType2 d-flex">
                        <div class="in-btn-2CtaType2 position-relative">
                            <div 
                            class="aCtaType2"
                            >do action 1</div>
                        </div>
                        <div class="in-btn-2CtaType2 position-relative">
                            <div 
                            class="aCtaType2"
                            >do action 2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="in-cta-info-2CtaType2 position-absolute wow fadeInRight" 
        
        style="background-image: url(${background_ctaType2});"
        data-wow-delay="600ms" data-wow-duration="1000ms" data-background="https://res.cloudinary.com/dbou9rqjw/image/upload/v1675624759/cta-bg_m51aff.png">
            <div class="in-cta-info-itemCtaType2 d-flex">
                <div class="inner-iconCtaType2">
                    <img src="${phoneIconCtaType2}" alt="">
                </div>
                <div class="inner-textCtaType2 headline">
                    <h3 
                    class="h3CtaType2"
                    >something !</h3>
                    <span 
                    class="spanCtaType2"
                    >Call: 12345678</span>
                </div>
            </div>
        </div>
    </div>
</section>	


`