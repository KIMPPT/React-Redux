import logo from "./logo.svg";
import "./App.css";
import CounterBox from "./components/CounterBox";
import CounterNumber from "./components/CounterNumber";
function App() {
  return (
    <div className="App">
      <CounterBox />
      <CounterNumber/>
    </div>
  );
}

export default App;
