import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeatherAPI } from "../slices/weatherSlice";
export default function WeatherThunk() {
  let weather = useSelector((state) => state.weather);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherAPI());
  }, []);
  return (
    <div>
      <h1>WeatherThunk</h1>
      <h3>{weather.loading ? "로딩중" : "로딩완료"}</h3>
      <p>{weather.weather}</p>
    </div>
  );
}
