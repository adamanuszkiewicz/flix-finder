import React from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";

    emailjs
      .sendForm(
        "service_n244t68",
        "template_4jvac1t",
        event.target,
        "mH6hdBrqzI0oTESZN"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unalailable. Please contact me directly at anuszkiewicz9@gmail.com"
        );
      });
  }

  let isModalOpen = false;
  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open";
  }

  function email() {
    emailjs.init({
      publicKey: "mH6hdBrqzI0oTESZN",
    });
  }

  return (
    <>
    <div className="bg-img" id="bg-img">
    <div className="message__header">
      <h1 className="greeting">Hello! Send me a message to get in touch!</h1>
    </div>
      <div className="modal">
        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about">
            Here's a bit about me.
          </h3>
          <h4 className="modal__sub-title modal__sub-title--sbout">
            Frontend Software engineer
          </h4>
          <p className="modal__para">
            I am a <b className="blue">Frontend Software Engineer</b>
            <br />I am currently in FES Institute working my way through the
            course. I am highly motivated and have a strong passion for
            developing websites with a great{" "}
            <b className="blue">user experience.</b>
          </p>
          <div className="modal__languages">
            <figure className="modal__language">
              <img
                class="modal__language--img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt=""
              />
              <span className="language__name">HTML</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                alt=""
              />
              <span className="language__name">CSS</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                alt=""
              />
              <span className="language__name">JavaScript</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                alt=""
              />
              <span className="language__name">React</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201"
                alt=""
              />
              <span className="language__name">TypeScript</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
                alt=""
              />
              <span className="language__name">Tailwind</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://appwrite.io/assets/logomark/logo.svg"
                alt=""
              />
              <span className="language__name">Appwrite</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-1024.png"
                alt=""
              />
              <span className="language__name">Firebase</span>
            </figure>
          </div>
        </div>

        <div className="modal__half modal__contact">
          <i className="fas fa-times modal__exit click"
            onClick={() => toggleModal()}
          ></i>
          <h3 className="modal__title modal__title--contact">Let's have a chat!</h3>
          <h4 className="modal__sub-title modal__sub-title--contact">
            I'm currently open to new opportunities. I would love to hear from
            you!
          </h4>
          <form id="contact__form" onSubmit={contact}>
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input
                className="contact__input"
                name="user_name"
                type="text"
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input
                className="contact__input"
                name="user_email"
                type="email"
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea
                className="contact__input"
                name="message"
                type="text"
              ></textarea>
            </div>
            <button id="contact__submit" className="form__submit">
              Send it my way
            </button>
          </form>
          <div className="modal__overlay modal__overlay--loading">
            <i class="fas fa-spinner"></i>
          </div>
          <div className="modal__overlay modal__overlay--success">
            Thanks for the message! Looking forward to speaking with you soon.
          </div>
        </div>
      </div>
      <Link to="#">
        <button className="mail__btn click" onClick={() => toggleModal()}>
          <i className="fas fa-envelope"></i>
        </button>
      </Link>
      </div>
    </>
  );
};

export default ContactForm;
