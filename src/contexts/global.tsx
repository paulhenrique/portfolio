import React from 'react';
import { Project } from '../components/Card';

interface GlobalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
}

export const GlobalContext = React.createContext({} as GlobalProps);

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = React.useState(false);
  const [project, setProject] = React.useState<Project>({
    title: '',
    link: '',
    description: '',
  });

  return (
    <GlobalContext.Provider value={{ showModal, setShowModal, project, setProject }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  return React.useContext(GlobalContext);
}