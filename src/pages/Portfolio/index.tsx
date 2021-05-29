import React from 'react'
import './style.scss';
interface Project {
  title: string;
  description: string;
  link?: string;
}

const Card: React.FC<Project> = ({ title, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="card">
        <img src="/img/logo_project.svg" alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

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
