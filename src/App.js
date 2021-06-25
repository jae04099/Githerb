import './App.css';
import TimeLineList from './components/Overview/TimeLineLists/TimeLineList';
import Exp from './components/Overview/Exp/Exp';
import LangGraph from './components/Graph/LanguageGraph/LanguageGraph'
import { PlantInfoProvider, UsedLangProvider } from './contexts/plant'

function App() {
  return (
    <PlantInfoProvider>
      <UsedLangProvider>
        <div className="App">
          <LangGraph />
          <TimeLineList />
        {/* <Exp style={{ width: "500px", height: "300px" }} /> */}
        </div>
      </UsedLangProvider>
    </PlantInfoProvider>
  );
}

export default App;
