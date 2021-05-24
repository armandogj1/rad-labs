import './App.css';
import { TimeProvider } from './hooks/useRetrieveTime';
import MainHeader from './components/MainHeader';
import Building from './components/Building';
import extendData from './utils/extendData';
import sampleData from './sample_data/1234_Test_Street.json';

function App() {
  const { retrieved_at } = sampleData;
  extendData(sampleData, retrieved_at);

  return (
    <TimeProvider data={{ retrieved_at }}>
      <div className='App'>
        <MainHeader data={sampleData} />
        <Building data={sampleData} />
      </div>
    </TimeProvider>
  );
}

export default App;
