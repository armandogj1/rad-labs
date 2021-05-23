import './App.css';
import { TimeProvider } from './hooks/useRetrieveTime.jsx';
import FloorList from './components/FloorList.jsx';
import sampleData from './sample_data/1234_Test_Street.json';

function App() {
  const { retrieved_at } = sampleData;
  return (
    <TimeProvider data={{ retrieved_at }}>
      <div className='App'>
        <section>
          <header>
            <h1>{sampleData.name}</h1>
          </header>
          <FloorList {...sampleData} />
        </section>
      </div>
    </TimeProvider>
  );
}

export default App;
