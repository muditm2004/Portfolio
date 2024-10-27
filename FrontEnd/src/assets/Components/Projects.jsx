import React, { useEffect, useState } from "react";
import DevProjects from "./DevProjects";
import DesProjects from "./DesProjects";

export default function Projects() {
  const [projectType, setProjectType] = useState('dev');

  function btnClick(e) {
    var id = e.target.id;
    switch (id) {
      case "dev":
        setProjectType(id);
        var element = document.querySelector(`#${id}`);
        element.style.boxShadow = "0px 2px 100px white,0px 2px 10px black";
        document.querySelector('#des').style.boxShadow='none';  
        break
    case "des":
        setProjectType(id);
        var element = document.querySelector(`#${id}`);
        element.style.boxShadow = "0px 2px 100px white, 0px 2px 10px black";
        document.querySelector('#dev').style.boxShadow='none';
        break
    }
  }

  return (
    <>
    
      <div id="projectsSection">
        <div className="projectNav">
          <button id="dev" onClick={btnClick}>
            👨‍💻Coding Projects 
          </button>
          <button id="des" onClick={btnClick}>
            🖌️Design Projects
          </button>
        </div>
        {/* <div className="tab" id="devTab"></div> */}
        {/* <div className="tab" id="desTab"></div> */}

        <div className="ProjectsContainer">
          {(projectType==='dev')?<DevProjects/>:<DesProjects/>}

        </div>
      </div>
    </>
  );
}
