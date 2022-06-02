import Fetch from './components/Fetch'
import Opponent from './components/Opponent';


const App = () => {

   
  return (
    <div className="main">
      <div className="main__left">
        <Fetch />
      </div>
      <div className="main__right">
        <Opponent />
      </div>
    </div>
  );
}

export default App;