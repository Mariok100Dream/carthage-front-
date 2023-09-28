import {firstImageTeam5,eightImageTeam5,secondImageTeam5,fourthImageTeam5} from "./image"

export const htmlteamType5 = `
<link rel="preconnect" href="https://fonts.googleapis.com/" />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&amp;family=Roboto:wght@300;400;500;700;900&amp;display=swap"
  rel="stylesheet"
/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

<div class="bodyTeamType5"
style="margin-top:{container_margin_top};margin-bottom:{container_margin_bottom};margin-left:{container_margin_left};margin-right:{container_margin_right}"

>
    <section class="team-secTeamType5 space"
    style="padding-top: 40px;padding-bottom: 40px;"
    >
        <div class="container z-index-commonTeamType5">
          <div class="title-areaTeamType5 text-center">
               <!-- Begin Title -->
            <span class="sub-titleTeamType5 spanTeamType5"
            dir='ltr'
            style="color:#070f4d;font-family:'Poppins', sans-serif;
            font-size:35px;padding-top:0px;
            padding-bottom:0px;padding-left:0px;
            padding-right:0px;margin-top:0px;
            margin-bottom:0px;margin-left:0px;
            margin-right:0px;text-align:center"
            onmouseover='this.style.color="#070f4d"'
            onmouseout='this.style.color="#070f4d"'
              ><img
              class="imgTeamType5"
                src="https://res.cloudinary.com/dbou9rqjw/image/upload/v1676546049/title_shape_1_peo07u.svg"
                alt="shape"
              />TEAM MEMBER</span
            >
              <!-- End Title -->
              <!-- Begin Description -->
            <h2 class="sec-titleTeamType5 h2TeamType5">
              See Our Skilled Expert <span class="text-themeTeamType5 spanTeamType5">Team</span>
            </h2>
             <!-- End Description -->
          </div>
           <!--team here -->
          <div
          $owl_carousel_show_hide
          $slider
          class="row"
          style="padding-top: 45px;"
          
          >
           <!-- Begin Team -->
            <div class="col-sm-6 col-lg-4 col-xl-3">
              <div class="as-teamTeamType5  team-cardTeamType5">
                <div class="team-imgTeamType5">
                  <img src="${firstImageTeam5}"
                  class="imgTeamType5"
                  height="300px"
                  alt="Team" />
                </div>
                <div class="team-contentTeamType5">
                  <div class="box-particleTeamType5" id="team-p1"></div>
                  <div class="team-socialTeamType5">
                    <a class="aTeamType5"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-instagram"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </div>
                  <h3 class="box-titleTeamType5 h3TeamType5">
                    <a class="aTeamType5">Si Bechir</a>
                  </h3>
                  <span class="team-desigTeamType5 spanTeamType5">Friend</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3">
              <div class="as-teamTeamType5  team-cardTeamType5">
                <div class="team-imgTeamType5">
                  <img src="${eightImageTeam5}" 
                  class="imgTeamType5"
                  height="300px"
                  alt="Team" />
                </div>
                <div class="team-contentTeamType5">
                  <div class="box-particleTeamType5" id="team-p2"></div>
                  <div class="team-socialTeamType5">
                    <a class="aTeamType5"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-instagram"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </div>
                  <h3 class="box-titleTeamType5 h3TeamType5">
                    <a class="aTeamType5">Shadow</a>
                  </h3>
                  <span class="team-desigTeamType5 spanTeamType5">elit</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3">
              <div class="as-teamTeamType5  team-cardTeamType5">
                <div class="team-imgTeamType5">
                  <img src="${fourthImageTeam5}"
                  class="imgTeamType5"
                  height="300px"
                  alt="Team" />
                </div>
                <div class="team-contentTeamType5">
                  <div class="box-particleTeamType5" id="team-p3"></div>
                  <div class="team-socialTeamType5">
                    <a class="aTeamType5"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-instagram"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </div>
                  <h3 class="box-titleTeamType5 h3TeamType5">
                    <a class="aTeamType5">Mohamed Yosri </a>
                  </h3>
                  <span class="team-desigTeamType5 spanTeamType5">Brother</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-3">
              <div class="as-teamTeamType5  team-cardTeamType5">
                <div class="team-imgTeamType5">
                  <img src="${secondImageTeam5}"
                  height="300px"
                  class="imgTeamType5"
                  alt="Team" />
                </div>
                <div class="team-contentTeamType5">
                  <div class="box-particleTeamType5" id="team-p4"></div>
                  <div class="team-socialTeamType5">
                    <a class="aTeamType5"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-twitter"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-instagram"></i
                    ></a>
                    <a class="aTeamType5"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </div>
                  <h3 class="box-titleTeamType5 h3TeamType5">
                    <a class="aTeamType5">Yanes</a>
                  </h3>
                  <span class="team-desigTeamType5 spanTeamType5">Friend</span>
                </div>
              </div>
            </div>
          <!-- End Team --> 
          </div>
           <!-- begin footer -->
        </div>
     
      </section>
</div>
 <!-- owl carousel functionality-->
` 