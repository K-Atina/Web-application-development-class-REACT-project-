// Create your About component here
import IMG from "../assets/Detective.png";

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>
      <div className="about-info">
        <p className="about-desc">Fix issues</p>
        <div className="about-img">
          <div className="about-img-wrapper">
            <img src={IMG} alt="Detective" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;