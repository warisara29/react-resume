import React, { useEffect, useState } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { projectsHeader, projects } from "../../portfolio.js";
import SkillSection from "../../containers/skills/SkillSection.js";
export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const [repo, _] = useState([]);

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="container">
      <Fade bottom duration={2000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1 className="greeting-text">{greeting.title}</h1>
                <p
                  className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  <span>I'm </span>
                  <span style={{ color: theme.accentColor }}>
                    {greeting.full_name}.{" "}
                  </span>
                  {greeting.subTitle}
                </p>
                <SocialMedia />
                <div className="portfolio-repo-btn-div">
                  <button
                    {...styles}
                    className="button"
                    onClick={() => {
                      // Resume link here
                      history.push("/contact");
                    }}
                  >
                    My Resume
                </button>
                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              <FeelingProud theme={theme} />
            </div>
          </div>
        </div>
        {/* Education Page */}
        <div className="main" id="educations">
          <div className="educations-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="educations-header" style={{ color: theme.text }}>
                Degrees Received
          </h1>
            </Fade>
          </div>
          <div className="educations-body-div">
            {degrees.degrees.map((degree) => {
              return <DegreeCard degree={degree} theme={theme} />;
            })}
          </div>
        </div>
        {/* Skills */}
        <div className="main" id="skills">
          <div className="skills-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="skills-header" style={{ color: theme.text }}>
                Here's what I do
          </h1>
            </Fade>
          </div>
          <SkillSection theme={theme} />
        </div>
        {/* Project */}
        <div className="projects-main">
          {/* <Header theme={theme} setTheme={props.setTheme} /> */}
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="projects-heading-div">
                <div className="projects-heading-img-div">
                  {/* <ProjectsImg theme={theme} /> */}
                </div>
                <div className="projects-heading-text-div">
                  <h1
                    className="projects-heading-text"
                    style={{ color: theme.text }}
                  >
                    {projectsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {projectsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="repo-cards-div-main">
            {projects.data.map((repo) => {
              return <ProjectCard repo={repo} theme={theme} />;
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}
