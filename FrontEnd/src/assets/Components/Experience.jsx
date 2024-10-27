import React from "react";
import JKLU from "../Media/jk_lakshmipat_university_jaipur_logo.jpeg";
import freelance from '../Media/freelance.png'
import codehub from '../Media/codehub.png'
import medium from '../Media/medium.webp'

export default function Experience() {
  return (
    <>
    <div id="ExperienceSection">
      <div className="sectionHeadPhrase">
        <h3>"Skills define my worth, and</h3>
        <h3>experience defines my value."</h3>
        <h5>My Work Experience</h5>
      </div>
      <div className="experienceContainer">
        <div className="experience">
          <div className="experience-ColLeft experience-ColLeft-first">
            <img src={JKLU} className="experienceLogo" />
            <div className="experienceProgress"></div>
          </div>
          <div className="experience-ColRight">
            <h3>BCA Academic Coordinator</h3>
            <h5>JK Lakshmipat University (JKLU)</h5>
            <h6>7 months (Nov2022 - May2023)</h6>
            <p>
              As the Academic Coordinator for the BCA program, I oversaw
              academic activities, facilitated communication between faculty and
              students, and enhance the learning experience. This role honed my
              organizational and leadership skills while allowing me to support
              and mentor students effectively.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------ */}

        <div className="experience">
          <div className="experience-ColLeft">
            <div className="experienceProgressTop"></div>
            <img src={codehub} className="experienceLogo" />
            <div className="experienceProgress"></div>
          </div>
          <div className="experience-ColRight">
            <h3>Design Coordinator</h3>
            <h5>CodeHub - The Competitive Programming Club (JKLU)</h5>
            <h6>1 year (Oct 2023 - Sep 2024)</h6>
            <p>
              As the Design Coordinator for Code Hub, I created engaging posters
              and graphics to promote events and workshops. My role involved
              collaborating with team members to enhance our branding and visual
              communication, fostering a vibrant community among members. This
              experience strengthened my design skills and my ability to work
              within a team.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------ */}

        <div className="experience">
          <div className="experience-ColLeft">
            <div className="experienceProgressTop"></div>
            <div className="currentPlaceBlur"></div>
            <img src={freelance} className="experienceLogo" />
            <div className="experienceProgress"></div>
          </div>
          <div className="experience-ColRight">
            <h3>UX Designer</h3>
            <h5>Freelance</h5>
            <h6>1 year+ (Aug2023 - Present)</h6>
            <p>
              Created user-centered designs for diverse clients, conducting
              research, developing wireframes, and designing interactive
              prototypes. This experience enhanced my design thinking skills and
              my ability to collaborate effectively with clients.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------ */}

        <div className="experience">
          <div className="experience-ColLeft">
            <div className="experienceProgressTop"></div>
            <div className="currentPlaceBlur"></div>
            <img src={medium} className="experienceLogo" />
          </div>
          <div className="experience-ColRight">
            <h3>Writer</h3>
            <h5>Medium</h5>
            <h6>1 year+ (Oct2023 - Present)</h6>
            <p>
              I combine my design, programming, and marketing experiences to
              create insightful content on digital product design and marketing
              strategies.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
