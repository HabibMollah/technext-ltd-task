import Form from './components/form';
import useGetData from './hooks/useGetData';

export default function App() {
  const { data } = useGetData();

  console.log(data);
  return (
    <main>
      <div>
        <h2>Spaceflight details</h2>
        <p>Find out the elaborate features of all the past big spaceflights.</p>
      </div>
      <Form />
    </main>
  );
}
