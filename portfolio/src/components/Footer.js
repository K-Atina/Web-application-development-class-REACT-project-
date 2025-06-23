import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-contact-info">
        <h1 className="footer-heading">Connect With Me</h1>
        <p className="footer-contact-access">Email: test@educative.io</p>
        <p className="footer-contact-access">Mobile: 1234 1234 1234</p>
      </div>
      <div>
        <h1>Social Links</h1>
        <div className="social-icons">
          <a href="https://www.educative.io/">
            <i></i><FaFacebook /><i></i>
            <i></i>
          </a>
          <a href="https://www.educative.io/">
            <i></i><FaInstagram /><i></i>
            <i></i>
          </a>
          <a href="https://www.educative.io/">
            <i></i><FaTwitter /><i></i>
            <i></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
