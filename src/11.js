import { findRenderedComponentWithType } from "react-dom/test-utils"
import { creatStore } from 'redux';
import { createReducer } from './redux_helper';

const INITIAL_STATE = { value: 0 };
const reducer = createReducer(INITIAL_STATE, {
    INCREMENT: state => (state.value += 1)
});

const store = createStore(reducer);

// store는 액션 처리가 끝났을때
// subscribe가 호출됨
let prevState;
store.subscribe(() => {
    const state = store.getState();
    if (state == prevState) {
        console.log('상태값 같음');
    } else {
        console.log('상태값 다름')
    }
    prevState = state;
})

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'OTHER_ACTION' });
store.dispatch({ type: 'INCREMENT' });