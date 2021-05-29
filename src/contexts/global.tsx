import React from 'react';
import { Project } from '../pages/Portfolio';
interface GlobalProps {
  showDock: boolean;
  project: Project;
  setShowDock: React.Dispatch<React.SetStateAction<boolean>>;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
}

export const GlobalContext = React.createContext({} as GlobalProps);

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [showDock, setShowDock] = React.useState(false);
  const [project, setProject] = React.useState<Project>({
    title: '',
    link: '',
    description: '',
  });

  return (
    <GlobalContext.Provider value={{ showDock, setShowDock, project, setProject }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  return React.useContext(GlobalContext);
}