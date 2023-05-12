import logo from "./logo.svg";
import "./App.css";
import CounterBox from "./components/CounterBox";
import CounterNumber from "./components/CounterNumber";
import MemoComp from "./components/MemoComp";
function App() {
  return (
    <div className="App">
      <CounterBox />
      <CounterNumber/>
      <MemoComp/>
    </div>
  );
}

export default App;
