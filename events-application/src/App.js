import logo from './logo.svg';
import './App.css';
import DispanseWisdom from './DispanseWisdom';
import Buttonlist from './button';
import Numberlist from './Numberlist';
import BetterNumberList from './BetterNumberList';

function App() {
  return (
    <div className="App">
     <DispanseWisdom/>
     <Buttonlist/>
     {/* <Numberlist/> */}
     <BetterNumberList/>

    </div>
  );
}

export default App;
