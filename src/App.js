import './App.css';
import LangGraph from './components/Graph/LanguageGraph/LanguageGraph'
import { PlantInfoProvider, UsedLangProvider } from './contexts/plant'

function App() {
  return (
    <PlantInfoProvider>
      <UsedLangProvider>
        <div className="App">
          <LangGraph />
        </div>
      </UsedLangProvider>
    </PlantInfoProvider>
  );
}

export default App;
