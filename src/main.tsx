import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchContextProvider } from './contexts/SearchContext.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
