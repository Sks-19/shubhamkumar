import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Contact.css";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tjv4ezw",
        "template_q03pwqj",
        form.current,
        "FocoevkF_QF4Ka9t0"
      )
      .then(
        (result) => {
          alert("Mail sent successfully, Thank You!");
          console.log(
            "SUCCESS. status=%d, text=%s",
            result.status,
            result.text
          );
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section
        class="mb-4"
        id="contactme"
        style={{
          background: "to top right, #1a3556 85%, #334b69 110%)",
        }}
      >
        <div className="container-fluid Contact">
          <div class="row contact">
            <div class="col-md-9 mb-md-0 mb-5">
              <h2 class="h1-responsive font-weight-bold text-left text-white my-4">
                Get In Touch
              </h2>

              <form ref={form} onSubmit={sendEmail}>
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        class="form-control inp"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        name="user_email"
                        placeholder="Your Email"
                        class="form-control inp"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="tel"
                        name="phone_number"
                        placeholder="Your Phone"
                        class="form-control inp"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        name="message"
                        rows="3"
                        placeholder="Write a Message"
                        class="form-control md-textarea inp"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="text-center text-md-left">
                  <input
                    className="btn btn-success button"
                    type="submit"
                    value="Send"
                  />
                </div>
              </form>

              <div class="status"></div>
            </div>

            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <h2 class="h1-responsive font-weight-bold text-center text-white my-4">
                  Contact Details
                </h2>
                <li>
                  <label style={{ color: "black" }}>PHONE :</label>
                  <p style={{ color: "white" }}>+91 9116 736 861</p>
                </li>

                <li>
                  <label style={{ color: "black" }}>EMAIL :</label>
                  <p style={{ color: "white" }}>shubhamrms19@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
