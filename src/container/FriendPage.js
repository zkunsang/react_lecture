
// 컴포넌트 폴더에는 재사용성 높은녀석
// 컨테이너에는 재사용성이 낮은 녀석
import React, { useState } from 'react';
import FriendList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';
import { getNextFriend } from '../data';

export default function FriendPage() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);
  const [nameLenLimit, setNameLen] = useState(MAX_NAME_LEN_LIMIT)

  const friendsWithAgeLimit = friends.filter(item => item.age <= ageLimit);
  const friendsWithNameLenLimit = friends.filter(item => item.name.length <= nameLenLimit);

  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }


  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect value={ageLimit} options={AGE_LIMIT_OPTIONS} label="세 이하만" onChange={setAgeLimit} />
      <NumberSelect value={nameLenLimit} options={NAME_LIMIT_OPTIONS} label="자 이하 이름만 보기" onChange={setNameLen} />
      <FriendList friends={friendsWithAgeLimit} />
      <FriendList friends={friendsWithNameLenLimit} />

    </div>
  )
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];

const MAX_NAME_LEN_LIMIT = 10;
const NAME_LIMIT_OPTIONS = [2, 3];
