import './App.css';
import TimeLineList from './components/Overview/TimeLineLists/TimeLineList';
import Exp from './components/Overview/Exp/Exp';
import { PlantInfoProvider } from './contexts/plant'

function App() {
  return (
    <PlantInfoProvider>
      <div className="App">
        <TimeLineList />
        {/* <Exp style={{ width: "500px", height: "300px" }} /> */}
      </div>
    </PlantInfoProvider>
  );
}

export default App;
