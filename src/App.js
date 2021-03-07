import React from 'react';
import { createStore, applyMiddleware } from 'redux';

const delayAction = store => next => action => {
  const delay = action.meta?.delay;

  if (!delay) {
    return next(action);
  }

  const timeoutId = setTimeout(() => next(action), delay);
  return function cancel() {
    clearTimeout(timeoutId);
  }
}


// next에서 리듀서가 실행이됨


const myReducer = (state = { name: 'mike' }, action) => {
  console.log('myReducer');
  if (action.type === 'someAction') {
    return { name: 'mike' }
  }
  return state;
}

const saveToLocalStorage = store => next => action => {
  if (action.meta?.localStorageKey) {
    localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
  }

  return next(action);
}



const store = createStore(myReducer, applyMiddleware(saveToLocalStorage));

// 받아서 무언가를 처리를 할 수 있게 할 수 있다.
const cancel = store.dispatch({ type: 'someAction', title: 'asdf', meta: { localStorageKey: 'myKey' } });
// cancel();

function App() {
  return (
    <div>실전 리액트</div>
  );
}

export default App;
