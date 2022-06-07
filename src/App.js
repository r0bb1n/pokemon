import Arena from "./components/Menu/Arena";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './components/Menu/Account'
import Start from './components/Menu/Start'
import Home from './components/Menu/Home'
import Choose from './components/Menu/Choose'
import Rival from './components/Menu/Rival'



function App() {

  

  return (

    <BrowserRouter>
    <div>
      <div className="container">
        <Routes>
       <Route path="/" element={<Home />} id="container" />
       <Route path="/Account" element={<Account />} />
        <Route path="/Start" element={<Start />} />
        </Routes>
     </div>
     <div className="notContainer">
       <Routes>
        <Route path="/Choose" element={<Choose />} />
        <Route path="/Rival" element={<Rival />} />
        </Routes>
        <Routes>
       <Route path="/Arena" element={<Arena />} />
        </Routes>
     </div>
    </div>
    </BrowserRouter>
  );
  }




  export default App;