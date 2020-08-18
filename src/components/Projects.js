import React from 'react';
import Thumbnail from './Thumbnail.js';
import './App.css';

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
        <Thumbnail
          link="https://github.com/Gorgutzz/museum-manager-rails"
          image=""
          title="Museum Manager"
        />

        <Thumbnail
          link="https://github.com/Gorgutzz/planet-database-api"
          image=""
          title="Planet Database"
        />

        <Thumbnail
          link="https://github.com/Gorgutzz/bb2-teams-app"
          image=""
          title="Blood Bowl 2 Teams"
        />
    </div>
  )
}

export default Projects;
