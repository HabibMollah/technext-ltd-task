import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

export default function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === null) {
    throw new Error(
      'useSearchContext must be used within a SearchContextProvider'
    );
  }

  return context;
}
