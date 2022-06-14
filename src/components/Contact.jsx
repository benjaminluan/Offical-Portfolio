import React from "react";
import emailjs from "@emailjs/browser";
function sendMessage(event) {
  event.preventDefault();
  emailjs
    .sendForm(
      "service_0vs43aq",
      "template_jvukoco",
      event.target,
      "rp1iiwvhbBhwguWIt"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="contact">
            <h1 className="contact__header">Contact Me</h1>
            <form id="contact__form" onSubmit={(event) => sendMessage(event)}>
              <div className="form__item">
                <label className="form__item--label">Name</label>
                <input type="text" className="input" name="user_name" required />
              </div>
              <div className="form__item">
                <label className="form__item--label">E-mail</label>
                <input type="email" className="input" name="user_email" required />
              </div>
              <div className="form__item">
                <label className="form__item--label">Message</label>
                <textarea
                  type="text"
                  className="input"
                  name="message"
                ></textarea>
              </div>
              <button id="contact__submit" className="form__submit">
                Send it my way
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
