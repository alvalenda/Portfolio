import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { MdOutlineEmail, MdOutlineCheck } from "react-icons/md";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import { boxShow } from "@/utils/motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();
  const control = useAnimation();
  const zapMsg =
    "Hello! I'm sending this message directly from your React Portfolio.";

  const messageSent = () => {
    control.start("visible");

    setTimeout(() => {
      control.start("hidden");
    }, 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wov61wj",
      "template_19dndqp",
      form.current,
      "YPyYemRQFB0bXMSAA"
    );

    messageSent();
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
          <div className="contact__form-name">
            <div className="separator separator-name">
              <input type="text" name="name" placeholder="Name" required />
              <span className="contact__form-effect"></span>
            </div>

            <div className="separator separator-email">
              <input type="email" name="email" placeholder="Email" required />
              <span className="contact__form-effect"></span>
            </div>
          </div>

          <div className="separator separator-subject">
            <input type="text" name="subject" placeholder="Subject" required />
            <span className="contact__form-effect"></span>
          </div>

          <div className="separator separator-message">
            <textarea
              name="message"
              rows="10"
              placeholder="Message"
              required
            ></textarea>

            <span className="contact__form-effect"></span>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary"
            whileTap={{ scale: 0.8 }}
          >
            Send Message
          </motion.button>

          <motion.span
            className="contact__message-sent"
            variants={boxShow({ duration: 4, scaleY: 0, opacity: 1 })}
            initial="hidden"
            animate={control}
            exitBeforeEnter
          >
            Your message has been sent <MdOutlineCheck />
          </motion.span>
        </form>
      </div>
    </section>
  );
};
