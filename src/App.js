
import './App.css';
import Countries from './components/Countries/Countries';
import CounterContextProvider from "./Context/CounterContext.js";

function App() {
  return (
    <div className="App">
    <CounterContextProvider>

    <Countries />
       
    </CounterContextProvider>
    
    
    
    </div>
  );
}

export default App;
