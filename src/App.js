import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <User />
        <Product />
      </Provider>
    </div>
  )
}

const INITIAL_STATE = {
  user: { name: 'mike' },
  product: { name: 'iphoe' },
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'setUserName':
      return {
        ...state,
        user: { ...state.user, name: action.name }
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

function User() {
  console.log('User render');

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{`${user.name}님 안녕하세요`}</p>
      <button onClick={() => dispatch({ type: 'setUserName', name: 'john' })}>
        사용자 이름 수정
            </button>
    </div>
  )
}

function Product() {
  console.log('Product render');
  const product = useSelector(state => state.product);
  return <p>{`${product.name}`}</p>
}

// 버튼을 눌렀을때
// User render
// Product render 둘다 렌더링됨
// why? Context를 하나로 관리하게 되어서
// 하나만 변경되었지만 Product와 User둘다에 영향을 미친다.
// 방법은 있다! context를 UserContext, Product로 나눈면 되지만 관리가 더욱 복잡해짐

// Context를 사용하게 되면 저런 상황에 까다롭다.
