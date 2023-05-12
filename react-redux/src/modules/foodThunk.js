//API 연습하기 위해서 이전의 부산먹거리 API를 들고와서 추가하기
//action.type 추가 필요 : getFood

let initalState = {
  food: "abc",
  loading: false,
};
export let foodname = () => async (next) => {
  next({ type: "startloading" });
  let response = await fetch(
    "https://busan-food.openapi.redtable.global/api/menu-dscrn/korean?serviceKey=visqlVyV5VIOGVgNswzp3XoFYPXiaCBh40hdIWnK5AAhTN01GbYZKV4WvQJyEQiu&pageNo=4"
  );
  let data = await response.json();
  console.log(data.body[0]);
  next({ type: "foodName", payload: data.body[0].MENU_NM });
  next({ type: "endloading" });
};
function foodThunk(state = initalState, action) {
  switch (action.type) {
    case "foodName": {
      return { food: action.payload };
    }
    case "startloading": {
      return { ...state, loading: true };
    }
    case "endloading": {
      return { ...state, loading: false };
    }
    default: {
      return state;
    }
  }
}
export default foodThunk;
