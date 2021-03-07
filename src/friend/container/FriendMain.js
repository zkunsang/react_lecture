import React, { useEffect, useReducer } from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';
import { useSelector, shallowEqual } from 'react-redux';


export default function FriendMain() {
    // const friends = useSelector(state => state.friend.friends);
    const friends = useSelector(state => [state.friend.friends, state.friend.friends], shallowEqual);
    const dispatch = useDispatch();

    function onAdd() {
        const friend = getNextFriend();
        dispatch(addFriend(friend));
    }

    console.log('FriendMain render');

    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    )
}

// useSelector훅은 리덕스에서 액션이 처리가 되면
// 여기서 반환하는 값의 이전값을 기억했다가 값이 변경 되었을때 컴포넌트를 다시 그려줌
// 여러개의 스테이트를 가져오고 싶을때 useSelect를 여러개 사용해도 되고
// const friends = useSelector(state => state.friend.friends);
// const friends = useSelector(state => state.friend.friends2);

// const friends = useSelector(state => [state.friend.friends, state.friend.friends2]);
// 이렇게 사용할 수 있는데
// 렌더링을 할지 말지
// shallowEqual