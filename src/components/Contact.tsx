import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/btamang/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — btamang
              </a>
            </p>
            <p>
              <a
                href="mailto:bivektamang016@gmail.com"
                data-cursor="disable"
              >
                bivektamang016@gmail.com
              </a>
            </p>
            <p>330-338-8063</p>
            <h4>Education</h4>
            <p>
              B.S. Computer Science, Youngstown State University — May 2026
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/biv3k224"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/btamang/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Bibek Kumar Tamang</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
