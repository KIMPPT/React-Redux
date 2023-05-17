import logo from "./logo.svg";
import "./App.css";
import CounterBox from "./components/CounterBox";
import MemoComp from "./components/MemoComp";
import ThunkBox from "./components/ThunkBox";
import WeatherThunk from "./components/WeatherThunk";
function App() {
  return (
    <div className="App">
      <CounterBox />
      <MemoComp/>
      <ThunkBox/>
      <WeatherThunk/>
    </div>
  );
}

export default App;
