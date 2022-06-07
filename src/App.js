import { useState } from "react";
import UserData from "./Data/User";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Account from './Account';
import Start from './Start';
import Home from "./Home";
import Choose from './Choose';
import Rival from './Rival';


function App() {

  const [feedback, setFeedback] = useState(UserData);

console.log(feedback);

  return (

    <BrowserRouter>
    <div className="container">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Account" element={<Account />} />
    <Route path="/Start" element={<Start />} />
    </Routes>
    </div>
    <div>
    <Routes>
    <Route path="/Choose" element={<Choose />} />
    <Route path="/Rival" element={<Rival />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
  }




  export default App;