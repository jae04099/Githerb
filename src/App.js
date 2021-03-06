import './App.css';
import Header from './components/common/Header';
import TimeLineList from './components/Overview/TimeLineLists/TimeLineList';
import Exp from './components/Overview/Exp/Exp';
import DayCommit from './components/Overview/DayCommit/DayCommit';
import LangGraph from './components/Graph/LanguageGraph/LanguageGraph'
import NextLevel from './components/Overview/NextLevel/NextLevel'
import Calendar from './components/Overview/Calendar/Calendar'
import RepoDesc from './components/Overview/RepoDescription/RepoDescription'
import PlantProfile from './components/Overview/PlantProfile/PlantProfile'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import MyPage from './pages/MyPage'
import { PlantInfoProvider, UsedLangProvider } from './contexts/plant'
import { UserInfoProvider } from './contexts/user'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from "./routes/Routes";


function App() {
  return (
    <BrowserRouter>
      <PlantInfoProvider>
        <UserInfoProvider>
          <UsedLangProvider>
            <div className="App">
              <Header />
              <Header />
              <MyPage />
              {/* <Home /> */}
              {/* <RepoDesc /> */}
              {/* <LangGraph />*/}
              {/* <TimeLineList /> */}
              {/* <Exp style={{ width: "500px", height: "300px" }} /> */}
              {/* <DayCommit /> */}
              {/* <Calendar /> */}
              <Footer />
            </div>
          </UsedLangProvider>
        </UserInfoProvider>
      </PlantInfoProvider>
    </BrowserRouter>
  );
}

export default App;
