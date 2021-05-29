import React from 'react';
import Card, { Project } from '../../components/Card';


import './style.scss';



function Portfolio() {
  const [projects, setProjects] = React.useState<Project[]>([]);
  React.useEffect(() => {
    fetch('/portfolio.json').then((r) => r.json()).then((data) => setProjects(data.portfolio));
  }, []);

  return (
    <div className="portfolio  animate__animated  animate__fadeInLeft">
      <h1>Portfolio</h1>
      {
        projects &&
        <div className="containerCardsPortfolio">
          {
            projects.map((e, i) => (
              <Card link={e.link} title={e.title} description={e.description} key={i} />
            ))
          }
        </div>
      }
    </div>
  )
}

export default Portfolio
