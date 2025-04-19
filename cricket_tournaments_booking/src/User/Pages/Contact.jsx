import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";

function Contact(props) {
  const [isLoading, setIsLoading] = useState(true);

  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  if (isLoading) {
    return <Loadung />;
  }
  return (
    <>
      <section id="top">
        <Header />
        <div className="inner-page-banner">
          <div className="container"></div>
        </div>
        <div className="inner-information-text">
          <div className="container">
            <h3>{props.name}</h3>
            <ul className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Contact</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="contant" className="contant main-heading team">
        <div className="row">
          <div className="container">
            <div className="contact">
              <div className="col-md-12">
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.580671926123!2d77.31096031514461!3d28.582351982437654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad59dc9d0b%3A0xe4060212422c0b9a!2sLeopedia+Web+Solutions!5e0!3m2!1sen!2sin!4v1511962485065"
                    width={600}
                    height={450}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-info">
                  <div className="kode-section-title">
                    <h3>Contact Info</h3>
                  </div>
                  <div className="kode-forminfo">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam aliquip..
                    </p>
                    <ul className="kode-form-list">
                      <li>
                        <i className="fa fa-home" />
                        <p>
                          <strong>Address:</strong> 805 consectetur adipiscing
                          elit, sed do eiusmod tempor
                        </p>
                      </li>
                      <li>
                        <i className="fa fa-phone" />
                        <p>
                          <strong>Phone:</strong> 123 456 7890
                        </p>
                      </li>
                      <li>
                        <i className="fa fa-envelope-o" />
                        <p>
                          <strong>Email:</strong> Info@sportyleague.com
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-us">
                  <form
                    method="post"
                    className="comments-form"
                    id="contactform"
                  >
                    <ul>
                      <li>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="required"
                          placeholder="Name *"
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="required email"
                          placeholder="Email *"
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Address:"
                        />
                      </li>
                      <li>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Add your message"
                          defaultValue={""}
                        />
                      </li>
                      <li>
                        <input
                          className="thbg-color"
                          type="submit"
                          defaultValue="send"
                        />
                      </li>
                    </ul>
                    <div className="hidden-me" id="contact_form_responce">
                      <p />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Contact;
