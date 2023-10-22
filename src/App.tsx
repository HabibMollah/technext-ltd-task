import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SpaceflightList from './components/SpaceflightList';
import Form from './components/form';
import { useEffect } from 'react';
import Footer from './components/Footer';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') navigate('/1');
  }, [navigate, location]);

  return (
    <>
      <main>
        <div>
          <h1>Spaceflight details</h1>
          <p>
            Find out the elaborate features of all the past big spaceflights.
          </p>
        </div>
        <Form />
        <Routes>
          <Route path="/:page" element={<SpaceflightList />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
