import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
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
  const { value, setValue } = useContext(UserContext);
  return (
    <Container className="dev-team">
      <h2>Do This® development team</h2>
      <h3>mimsArmy</h3>

      {/* <Link to="/home">Go Home!</Link> */}
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
            <p className="dev-text">
              Chris is a master of the universe, a puppy owner, and a cat
              herder. He takes all things in stride and just types whatever
              comes to mind. There is no rhyme or reason to this text but only
              to fill space. Lorem Ipsum has nothing on me, for I am the
              wordsmith of wordsmiths, bringer of doom, powered by Dragon Tears
              and the blood of innocents
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
            <p className="dev-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              gravida augue diam, non faucibus massa vehicula eu. Morbi sed
              vulputate odio. Suspendisse euismod urna lectus, et aliquam purus
              interdum lacinia. Nulla sed magna erat. Vestibulum ullamcorper
              ante luctus arcu mollis tempor. Nam suscipit ex luctus tellus
              rhoncus ullamcorper. Nulla eget placerat mi. Sed bibendum
              tincidunt velit non placerat. Proin nec feugiat nulla. Ut id nisl
              urna.
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
                    "https://cbmartinez42.github.io/cbmartinez-portfolio/assets/pdf/Chris_Martinez_Resume.pdf",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              gravida augue diam, non faucibus massa vehicula eu. Morbi sed
              vulputate odio. Suspendisse euismod urna lectus, et aliquam purus
              interdum lacinia. Nulla sed magna erat. Vestibulum ullamcorper
              ante luctus arcu mollis tempor. Nam suscipit ex luctus tellus
              rhoncus ullamcorper. Nulla eget placerat mi. Sed bibendum
              tincidunt velit non placerat. Proin nec feugiat nulla. Ut id nisl
              urna.
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
