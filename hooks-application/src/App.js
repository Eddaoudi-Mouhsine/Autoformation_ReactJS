import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormInputHooks from './SimpleFormInputHook';
import Clicker from './Clicker';
import SwMovie from './SwMovie';
function App() {
  return (
    <div className="App">
     {/* <Counter/>
     <CounterHooks/>
     <Toggler/>
     <SimpleFormInputHooks/> */}
          <Clicker />
          <SwMovie />
     
    </div>
  );
}

export default App;
