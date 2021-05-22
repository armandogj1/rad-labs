import './App.css';
import FloorList from './components/FloorList.jsx';
import sampleData from './sample_data/1234_Test_Street.json';

function App() {
  return (
    <div className='App'>
      <FloorList {...sampleData} />
    </div>
  );
}

export default App;
