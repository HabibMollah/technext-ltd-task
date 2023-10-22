import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type LaunchStatusContextType = {
  launchStatus: string;
  setLaunchStatus: Dispatch<SetStateAction<string>>;
};

export const LaunchStatusContext =
  createContext<null | LaunchStatusContextType>(null);

export function LaunchStatusContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [launchStatus, setLaunchStatus] = useState('');

  return (
    <LaunchStatusContext.Provider value={{ launchStatus, setLaunchStatus }}>
      {children}
    </LaunchStatusContext.Provider>
  );
}
