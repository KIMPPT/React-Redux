//작성한 redux 모듈 하나로 묶어서 사용
import {combineReducers} from 'redux';

//작성한 reducer 가져옴
import counter from './counter';
import counter2 from './counter2';
import counterNumber from './counterNumber';
//작성한 reducers를 객체로 묶어서 내보냄
let rootReducer=combineReducers({counter,counter2,counterNumber})

export default rootReducer