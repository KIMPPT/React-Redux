import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getweather } from "../modules/weatherThunk";
export default function WeatherThunk() {
  let weather = useSelector((state) => state.weatherThunk);
  let dispatch=useDispatch()
  //
  useEffect(()=>{dispatch(getweather())},[])
  return <div>{weather.loading && "로딩중입니다"}
  <p>
    {weather.weather&& weather.weather}</p></div>;
}
