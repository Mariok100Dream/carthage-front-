import {shape1Cta1Type1} from "./images"
import {shape2Cta1Type1} from "./images"
import {backgroundCtaType1} from "./images"
export const htmlCtaType1 = `

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">
	
	<section class="in-cta-sectionCtaType1">
		<div class="jarallaxCtaType1  position-relative"  
		data-background="${backgroundCtaType1}"
		style="background-image: url('${backgroundCtaType1}');"
		>
			<div class="background_overlayCtaType1"></div>
			<span class="in-cta-shape1CtaType1 position-absolute">
			<img src="${shape1Cta1Type1}" alt=""></span>
			<span class="in-cta-shape2CtaType1 position-absolute"><img src="${shape2Cta1Type1}" alt="">
			</span>
			<div class="container">
				<div class="in-cta-contentCtaType1 text-center headline wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">
					<h2 
					class="h2CtaType1"
					>Need Something</h2>
					<div class="in-cta-btn-grpCtaType1 d-flex">
						<a 
						
						class="aCtaType1 d-flex align-items-center justify-content-center" >do Action 1</a>
						<a 
						class="aCtaType1 d-flex align-items-center justify-content-center" >do Action 2</a>
					</div>
				</div>
			</div>
		</div>
	</section>

`