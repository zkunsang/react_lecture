import React from 'react';
import TimelineMain from './timeline/container/TimelineMain';
import FriendMain from './friend/container/FriendMain';
import { Provider } from 'react-redux';
import store from './common/store';

export default function App() {
  return (
    <Provider store={store}>
      <div>

        <FriendMain />
        <TimelineMain />
      </div>
    </Provider>
  )
}

// FriendMain을 수정했는데
// TimelineMain도 렌더링 함

// 이걸 최적화 하는것이 리액트 리덕스의 중요한 역활 중의 한가지

//provider component에서는
// 리액트에서 액션이 처리 되었을때
// 이벤트를 받아서 다른 컴포넌트가 렌더링 되도록 도와줌