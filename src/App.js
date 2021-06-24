import './App.css';
import TimeLineList from './components/Overview/TimeLineLists/TimeLineList';
import { PlantInfoProvider } from './contexts/plant'

function App() {
  return (
    <PlantInfoProvider>
      <div className="App">
        <TimeLineList />
      </div>
    </PlantInfoProvider>
  );
}

export default App;
