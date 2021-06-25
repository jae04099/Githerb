import './App.css';
import TimeLineList from './components/Overview/TimeLineLists/TimeLineList';
import Exp from './components/Overview/Exp/Exp';
import DayCommit from './components/Overview/DayCommit/DayCommit';
import { PlantInfoProvider } from './contexts/plant'

function App() {
  return (
    <PlantInfoProvider>
      <div className="App">
        {/* <TimeLineList /> */}
        {/* <Exp style={{ width: "500px", height: "300px" }} /> */}
        {/* <DayCommit /> */}
      </div>
    </PlantInfoProvider>
  );
}

export default App;
