import './App.css';
import { TimeProvider } from './hooks/useRetrieveTime';
import Building from './components/Building';
import extendData from './utils/extendData';
import sampleData from './sample_data/1234_Test_Street.json';

function App() {
  const { retrieved_at } = sampleData;
  extendData(sampleData, retrieved_at);

  return (
    <TimeProvider data={{ retrieved_at }}>
      <div className='App'>
        <Building data={sampleData} />
      </div>
    </TimeProvider>
  );
}

export default App;
