import {combineReducers} from 'redux';
import langReducer from './langReducer';

const indexReducer = combineReducers({
    langReducer
})

//reduer가 여러개일 경우

/**
const indexReducer = combineReducers({
    numberReducer,
    reducer2 ,
    reducer3 
})
 */

//reducer에 키값이 필요할 경우
/** 
  const indexReducer = combineReducers({
    a:numberReducer
})
 */

export default indexReducer;