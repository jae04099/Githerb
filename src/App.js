import './App.css';
import LangGraph from './components/Graph/LanguageGraph/LanguageGraph'
import { UsedLanguageProvider } from './contexts/github'

function App() {
  return (
    <UsedLanguageProvider>
      <div className="App">
        <LangGraph />
      </div>
    </UsedLanguageProvider>
  );
}

export default App;
