import React from "react";
import subodh from "../Media/Subodh-Logo-03fd0661.png";
import JKLU from "../Media/jk_lakshmipat_university_jaipur_logo.jpeg";

export default function Education() {
  return (

    <>
    <div id="EducationSection">
      <div className="sectionHeadPhrase">
        <h3>“My education set the foundation; </h3>
        <h3>life taught me the rest.”</h3>
        <h5>My Educational Background</h5>
      </div>

      <div className="experienceContainer">
        <div className="experience">
          <div className="experience-ColLeft experience-ColLeft-first">
            <img src={subodh} className="experienceLogo" />
            <div className="experienceProgress"></div>
          </div>
          <div className="experience-ColRight">
            <h3>Senior Secondary</h3>
            <h5>Subodh Public School, Rambagh</h5>
            <h6>Completed in 2022</h6>
            
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------ */}

        <div className="experience">
          <div className="experience-ColLeft">
            <div className="experienceProgressTop"></div>
            <div className="currentPlaceBlur"></div>
            <img src={JKLU} className="experienceLogo" />
          </div>
          <div className="experience-ColRight">
            <h3>Bachelors of Computer Applications (BCA)</h3>
            <h5>JK Lakshmipat University (JKLU)</h5>
            <h6>2022-2025</h6>

          </div>
        </div>
      </div>
      </div>
    </>
  );
}
