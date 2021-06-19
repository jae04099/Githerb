import './App.css';
import TimeLineList from './components/Overview/TimeLineLists/TimeLineList';
import { CommitProvider } from './contexts/github'

function App() {
  return (
    <CommitProvider>
      <div className="App">
        <TimeLineList />
      </div>
    </CommitProvider>
  );
}

export default App;
