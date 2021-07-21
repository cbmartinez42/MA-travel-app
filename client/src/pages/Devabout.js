import { Link } from "react-router-dom";
import { Grid, Container } from "@material-ui/core";
import LinkedIn from "../assets/devs/LI-Logo.png";
import Octocat from "../assets/devs/Octocat.png";
import Chris from "../assets/devs/chris.png";
import ChrisResume from "../assets/devs/chris-resume.PNG";
import Mark from "../assets/devs/mark.png";
import MarkResume from "../assets/devs/mark-resume.PNG";
import Jay from "../assets/devs/jay.png";
import JayResume from "../assets/devs/jay-resume.PNG";
import Stacy from "../assets/devs/stacy.png";
import StacyResume from "../assets/devs/stacy-resume.PNG";

const Devabout = () => {

  return (
    <Container className="dev-team">
      <h2>Do This® development team</h2>
      <h3>mimsArmy</h3>
      <Grid container spacing={1} alignContent="center">
        <Grid container spacing={1} className="dev-container">
          <Grid item xs={12} md={6} className="dev-about">
            <Link
              to={{
                pathname:
                  "https://cbmartinez42.github.io/cmartinez-portfolio-react/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Chris Martinez</h2>
            </Link>
            <img src={Chris} alt="Chris Martinez" className="dev-image"></img>
            <p className='dev-text'>
                Chris is the Project Manager and worked on both front-and back-end code. Bridging the gap between ideas and deployment, 
                he worked to impliment code and design to provide a intuitive, user-friendly experience, while developing critical back-end
                methods to maintain a robust server-side environment. As well as providing his own code, he also provided feedback, suggestions, 
                and acted as a sounding board for teammembers.
            </p>
            <p className='dev-text'>
                He has over 20 years experience working with computers and technology in various capacities, as well as herding cats and 
                his five children, both of which prepared him for the unique challenges of leading mimsArmy. 
            </p>
            <Grid item xs={12}>
              <Link
                to={{ pathname: "https://github.com/cbmartinez42" }}
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <img
                  src={Octocat}
                  alt="Github Octocat"
                  className="github"
                ></img>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/christopher-martinez-6761ba17/",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="linkedin"
                  title="LinkedIn"
                ></img>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://cbmartinez42.github.io/cbmartinez-portfolio/assets/pdf/Chris_Martinez_Resume.pdf",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ChrisResume}
                  alt="Resume"
                  className="resume"
                  title="Resume"
                ></img>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="dev-about">
            <Link
              to={{ pathname: "https://mark-artim.github.io/portfolio2/" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Mark Artim</h2>
            </Link>
            <img src={Mark} alt="Mark Artim" className="dev-image"></img>
              <p className='dev-text'>
              I am looking forward to utilizing the knowledge gained over 30 years and creating software that is deep enough in 
                functionality to solve the complex needs of running a business yet is easy to understand. Software that is transparent 
                in configuration and what it designed to do. Balancing a tailored solution that fits your business with the abiltiy to 
                extend it when you need to solve new probelms or old problems in a new way. 
              </p>
            <Grid item xs={12}>
              <Link
                to={{ pathname: "https://github.com/mark-artim" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Octocat}
                  alt="Github Octocat"
                  className="github"
                  title="Github"
                ></img>
              </Link>
              <Link
                to={{ pathname: "https://www.linkedin.com/in/mark-artim/" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="linkedin"
                  title="LinkedIn"
                ></img>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://mark-artim.github.io/portfolio2/assets/images/Resume2.pdf",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={MarkResume}
                  alt="Resume"
                  className="resume"
                  title="Resume"
                ></img>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="dev-about">
            <Link
              to={{
                pathname: "https://jayyousef.github.io/portfolio-June-2021/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Jay Yousef</h2>
            </Link>
            <img src={Jay} alt="Jay Yousef" className="dev-image"></img>
            <p className="dev-text">
              Whether I am developing a new branch on an already well
              established program, creating an fresh, intuitive way to access
              old information, creating a series of social media videos that
              help tell a brand story, or even just writing music, I HAVE to be
              creating and growing or I'll literally feel the color fade from my
              life and fade into black and white. I like solving complex
              problems with creative solutions; that feeling of breaking through
              a problem after days or weeks of struggle; I love helping to
              create innovative technology through collaboration and teamwork,
              as well as story-telling through building an online presence,
              video production and post-production, photography, writing and
              playing music, and (maybe most of all) spending time with my wife
              and two boys.
            </p>
            <Grid item xs={12}>
              <Link
                to={{ pathname: "https://github.com/jayyousef" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Octocat}
                  alt="Github Octocat"
                  className="github"
                  title="Github"
                ></img>
              </Link>
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/jay-yousef-4294aa41/",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="linkedin"
                  title="LinkedIn"
                ></img>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://jayyousef.github.io/portfolio-June-2021/assets/images/Resume.pdf",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={JayResume}
                  alt="Resume"
                  className="resume"
                  title="Resume"
                ></img>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="dev-about">
            <Link
              to={{
                pathname: "https://stacy-martin.github.io/sdbm_portfolio/",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Stacy Martin</h2>
            </Link>
            <img src={Stacy} alt="Stacy Martin" className="dev-image"></img>
            <p className="dev-text">
              For me work is not simply a job, it must be gratifying. That means
              I always seek out opportunities that are meaningful and
              challenging. I came from a diverse background before pursuing
              software development, from a degree in marine biology to small
              business owner. With an entrepreneurial mindset I can provide
              comprehensive support to streamline the web presence of small
              business from both the front and back end. As a developer I use my
              project management skills and innovative craftiness to deliver
              comprehensive, stylish products.
            </p>
            <Grid item xs={12}>
              <Link
                to={{ pathname: "https://github.com/Stacy-Martin" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Octocat}
                  alt="Github Octocat"
                  className="github"
                  title="Github"
                ></img>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/stacy-brown-martin-81b198204/",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="linkedin"
                  title="LinkedIn"
                ></img>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://stacy-martin.github.io/sdbm_portfolio/resume.html",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={StacyResume}
                  alt="Resume"
                  className="resume"
                  title="Resume"
                ></img>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Devabout;
