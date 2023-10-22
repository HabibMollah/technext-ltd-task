import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchContextProvider } from './contexts/SearchContext.tsx';
import { LaunchStatusContextProvider } from './contexts/LaunchStatusContext.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SearchContextProvider>
          <LaunchStatusContextProvider>
            <App />
          </LaunchStatusContextProvider>
        </SearchContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
