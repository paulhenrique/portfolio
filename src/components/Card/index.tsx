import React from 'react'
import { useGlobal } from '../../contexts/global';

export interface Project {
  title: string;
  description: string;
  link: string;
}


const Card: React.FC<Project> = ({ title, description, link }) => {
  const { setShowModal, setProject } = useGlobal();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    e.preventDefault();
    setShowModal(true);
    setProject({
      title,
      description,
      link
    })
  }
  return (
    <>
      <a onClick={(e) => { handleClick(e, link) }} href={link} target="_blank" rel="noreferrer">
        <div className="card">
          <img src="/img/logo_project.svg" alt="" />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>

    </>
  );
}
export default Card
