import './App.css';
import { useRef } from 'react';
import { TimeProvider } from './hooks/useRetrieveTime';
import MainHeader from './components/MainHeader';
import Building from './components/Building';
import ExplorerItem from './components/ExplorerItem';
import Viewer from './components/Viewer';
import extendData from './utils/extendData';
import sampleData from './sample_data/1234_Test_Street.json';

function App() {
  const { retrieved_at } = sampleData;
  extendData(sampleData, retrieved_at);
  const viewerSetRef = useRef(() => {});

  return (
    <TimeProvider data={{ retrieved_at }}>
      <div className='App'>
        <MainHeader data={sampleData} />
        {/* <Building data={sampleData} /> */}
        <section className='explorer-viewer'>
          <div className='explorer'>
            <ExplorerItem el={sampleData} setViewed={viewerSetRef} />
          </div>
          <Viewer el={sampleData} viewerSetRef={viewerSetRef} />
        </section>
      </div>
    </TimeProvider>
  );
}

export default App;
