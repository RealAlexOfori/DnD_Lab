import './App.css';
import MonsterContainer from "./containers/MonsterContainer.js"
import MonsterDisplay from './components/MonsterDisplay';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import NavBar from './components/NavBar';

function App() {



  return (
    <div className="App">
        <Router>
        <NavBar/>
            <Routes>
                <Route path="/" element={<MonsterContainer data={pageData}/>}/>
                <Route path="/:monster" element={<MonsterDisplay data={pageData}/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
