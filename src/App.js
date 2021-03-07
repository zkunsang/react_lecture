
// 컴포넌트 폴더에는 재사용성 높은녀석
// 컨테이너에는 재사용성이 낮은 녀석
import React, { useState } from 'react';
import FriendPage from './container/FriendPage';
import NumberSelect from './component/NumberSelect';
import { getNextFriend } from './data';

export default function App() {
  return (
    <FriendPage />
  )
}
