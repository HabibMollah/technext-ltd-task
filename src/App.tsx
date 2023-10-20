import SpaceflightList from './components/SpaceflightList';
import Form from './components/form';

export default function App() {
  return (
    <main>
      <div>
        <h2>Spaceflight details</h2>
        <p>Find out the elaborate features of all the past big spaceflights.</p>
      </div>
      <Form />
      <SpaceflightList />
    </main>
  );
}
