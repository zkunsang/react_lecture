import React from 'react';
import TimelineMain from './timeline/container/TimelineMain';
import FriendMain from './friend/container/FriendMain';

export default function App() {
  return <div>
    <FriendMain />
    <TimelineMain />
  </div>
}

// FriendMain을 수정했는데
// TimelineMain도 렌더링 함

// 이걸 최적화 하는것이 리액트 리덕스의 중요한 역활 중의 한가지