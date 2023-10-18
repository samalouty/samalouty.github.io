import React from 'react';
import Cards from '../Cards';
import './Projects.css'
import { Button2 } from '../Button2';


const ProjectsPage = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="projects-container">
          <Cards/>
          <Button2 className = 'btnsproject' buttonStyle= 'btn--outline'
        buttonSize= 'btn--large'>All Projects</Button2>
    
      </div>
    </div>
  );
};

export default ProjectsPage;
