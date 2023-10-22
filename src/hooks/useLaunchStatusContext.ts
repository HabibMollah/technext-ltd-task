import { useContext } from 'react';
import { LaunchStatusContext } from '../contexts/LaunchStatusContext';

export default function useLaunchStatusContext() {
  const context = useContext(LaunchStatusContext);
  if (context === null) {
    throw new Error(
      'useLaunchStatusContext must be used within a LaunchStatusContextProvider'
    );
  }

  return context;
}
