import logo from "./logo.svg";
import "./App.css";
import CounterBox from "./components/CounterBox";
import MemoComp from "./components/MemoComp";
import ThunkBox from "./components/ThunkBox";
function App() {
  return (
    <div className="App">
      <CounterBox />
      <MemoComp/>
      <ThunkBox/>
    </div>
  );
}

export default App;
