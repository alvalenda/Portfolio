import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();
  const zapMsg =
    "Hello! I'm sending this message directly from your React Portfolio.";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wov61wj",
      "template_19dndqp",
      form.current,
      "YPyYemRQFB0bXMSAA"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>flavio.alva@outlook.com</h5>
            <a href="mailto:flavio.alva@outlook.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5></h5>
            <a
              href={`https://api.whatsapp.com/send?phone=5524998768978&text=${zapMsg}`}
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <FaDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5>Flavio Alvarenga#6837</h5>

            <a
              href="https://discordapp.com/users/246040430494351362"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
