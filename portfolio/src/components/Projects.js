import Project from "../assets/login.png";
import data from "../data/projects.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" className="projects">
      <h2>MY PROJECTS</h2>
      <div className="projects-container">
        {/* <Slider {...settings}> */}
        {data.map((project, key) => (
          <div key={key} className="project">
            <img src={Project} alt="Project" />
            <div className="project-name">{project.name}</div>
            <p>
              {project.description.length > 130
                ? project.description.slice(0, 130) + "..."
                : project.description}
            </p>
            <div className="project-button">
              <a target="_blank" href={project.link}>
                Live Demo
              </a>
            </div>
          </div>
        ))}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Projects;
