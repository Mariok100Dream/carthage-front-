export const htmlAboutUsType2 = `

<link
rel="stylesheet"
href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
/>
<link
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
rel="stylesheet"
/>
<div class="bodyContactUsType2">
<section class="home-contact-areaContactUsType2 pb-100 pt-100">
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-lg-6 ps-0">
        <div class="contact-imgContactUsType2">
          <img 
          class="imgContactUsType2"
          src="https://res.cloudinary.com/dbou9rqjw/image/upload/v1676017897/contact_hxvv7h.jpg"
           alt="contact" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="home-contact-contentContactUsType2">
          <h2 
          class="h2ContactUsType2"
          >What Do You Want to Know?</h2>
          <form id="contactFormContactUsType2">
            <div class="row">
              <div class="col-lg-6 col-sm-6">
                <div class="form-groupContactUsType2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control inputContactUsType2"
                    required
                    data-error="Please enter your name"
                    placeholder="Your Name"
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-groupContactUsType2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control inputContactUsType2"
                    required
                    data-error="Please enter your email"
                    placeholder="Your Email"
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-groupContactUsType2">
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    required
                    data-error="Please enter your number"
                    class="form-control inputContactUsType2"
                    placeholder="Your Phone"
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-groupContactUsType2">
                  <input
                    type="text"
                    name="msg_subject"
                    id="msg_subject"
                    class="form-control inputContactUsType2"
                    required
                    data-error="Please enter your subject"
                    placeholder="Your Subject"
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="form-groupContactUsType2">
                  <textarea
                    name="message"
                    class="form-control textareaContactUsType2"
                    id="message"
                    cols="30"
                    rows="5"
                    required
                    data-error="Write your message"
                    placeholder="Your Message"
                  ></textarea>
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <button type="submit" class="default-btn page-btn box-btnContactUsType2 
                buttonContactUsType2
                ">
                  Send Message
                </button>
                <div id="msgSubmit" class="h3 text-center hidden"></div>
                <div class="clearfix"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

</div>

`