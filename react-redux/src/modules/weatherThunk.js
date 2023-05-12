/*action함수, reducer작성

날씨 API를 사용하여 외부에서 값을 가져옴
외부에서 값을 가져올 때는 시간이 걸리기 때문에 비동기로 가져와야함
state:날씨,loading
action:loading값 - startloading(true)/endloading(false) , getWeather
*/

//초기 state값
let initalState = {
  weather: null,
  loading: false,
};

//action 생성 함수 - thunk
//thunk를 사용하면 async를 붙여서 비동기함수로 쓸 수 있다
//async가 붙은 함수는 따로 계속 실행되어 진다
export let getweather = () => async (next) => {
  //getWeather action 함수 실행 : loading-true
  next({ type: "startloading" });
  let response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=5a19c135254310fd0f880eb227e04f4b&lang=kr"
  );
  let data = await response.json();
  console.log(data.weather[0].description);
  //next를 이용하여 reducer에 전달할 action 객체 작성
  next({ type: "getWeather", payload: data.weather[0].description });
  //getWeather action 함수 종료 : loading-false
  next({ type: "endloading" });
};


//reducer
function weatherThunk(state = initalState, action) {
  switch (action.type) {
    case "getWeather": {
      //주소를 통해서 값 가져옴 > 비동기로 값을 가져오기 때문에(시간차) 값이 들어가지 않음
      //>action함수를 thunk로 사용한다(비동기함수사용)
      return { ...state, weather: action.payload };
    }
    case "startloading": {
      return { ...state, loading: true };
    }
    case "endloading": {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
}
export default weatherThunk;
