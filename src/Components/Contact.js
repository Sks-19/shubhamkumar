import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import "../Styles/Contact.css";

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
          swal(
            "Mail sent successfully!",
            "I will reach out to you shortly.",
            "success"
          );
          let username = document.getElementById("username");
          let email = document.getElementById("email");
          let phone = document.getElementById("phone");
          let message = document.getElementById("message");

          username.value = "";
          email.value = "";
          phone.value = "";
          message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section
        className="section mb-4"
        id="contactme"
        style={{
          background: "to top right, #1a3556 85%, #334b69 110%)",
        }}
      >
        <div className="container-fluid Contact">
          <div className="row contact">
            <div className="col-md-9 mb-md-0 mb-5">
              <h2 className="h1-responsive font-weight-bold text-left text-white my-4">
                Get In Touch
              </h2>

              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="username"
                        name="user_name"
                        placeholder="Your Name"
                        className="form-control inp"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="form-control inp"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="tel"
                        id="phone"
                        name="phone_number"
                        placeholder="Your Phone"
                        className="form-control inp"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        rows="3"
                        placeholder="Write a Message"
                        className="form-control md-textarea inp"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <input
                    className="btn btn-success button"
                    type="submit"
                    value="Send"
                  />
                </div>
              </form>

              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <h2 className="h1-responsive font-weight-bold text-center text-white my-4">
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
