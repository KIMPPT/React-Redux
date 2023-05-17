import { createSlice } from "@reduxjs/toolkit";
/*날씨 API를 통해서 값을 가져옴
loading은 fetchAPI를 사용했을 때 걸리는 시간동안 true
startLoading, endLoading, getWeather : action함수
>값이 바로바로 바뀌는 것은 reducer에 바로 작성
>값이 서버엥서 받아오는 경우 시간이 걸리므로 thunk에 작성
*/
export let weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null,
    loading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
    getWeather: (state, action) => {
      //action.payload는 weatherAPI에서 받아온 값
      state.weather = action.payload;
    },
  },
});
//thunk를 사용한 action 생성함수 작성
export let getWeatherAPI = () => async (dispatch) => {
  dispatch(startLoading())
  let response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=5a19c135254310fd0f880eb227e04f4b&lang=kr"
  );
  let data = await response.json();
  console.log(data.weather[0].description);
  dispatch(getWeather(data.weather[0].description))
  dispatch(endLoading())
};

export let { startLoading, endLoading, getWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
