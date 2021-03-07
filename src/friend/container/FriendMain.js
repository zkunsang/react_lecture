import React, { useEffect, useReducer } from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { actions } from '../state';
import FriendList from '../component/FriendList';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import { getAgeLimit, getShowLimit, getFriendsWithAgeLimit, getFriendsWithAgeShowLimit } from '../state/selector';

// shallowEqual 배열처리를 효율적으로 하기 위해서 위해서
// reselect의 장점
// 선택자 함수를 분리할 수 있음.
// 재사용 가능
export default function FriendMain() {
    // const friends = useSelector(state => state.friend.friends);
    // const friends = useSelector(state => state.friend.friends);



    // const [
    //     ageLimit,
    //     showLimit,
    //     friendsWithAgeLimit,
    //     friendsWithAgeShowLimit] = useSelector(state => [
    //         getAgeLimit(state),
    //         getShowLimit(state),
    //         getFriendsWithAgeLimit(state),
    //         getFriendsWithAgeShowLimit(state)
    //     ]
    //         , shallowEqual);

    // 아래와 같은 방법으로 사용할 수 있다.

    const ageLimit = useSelector(getAgeLimit);
    const showLimit = useSelector(getShowLimit);
    const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
    const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);

    // 데이터를 가공하는 연산이 여기에 없다!가 중요한 포인트
    // !

    const dispatch = useDispatch();

    function onAdd() {
        dispatch(actions.setValue('name', 'mike'));
        const friend = getNextFriend();

        dispatch(actions.addFriend(friend));
    }

    console.log('FriendMain render');

    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <NumberSelect
                onChange={v => dispatch(actions.setValue('ageLimit', v))}
                value={ageLimit}
                options={AGE_LIMIT_OPTIONS}
                postfix="세 이하만 보기" />
            <FriendList friends={friendsWithAgeLimit} />
            <NumberSelect
                onChange={v => dispatch(actions.setValue('showLimit', v))}
                value={showLimit}
                options={SHOW_LIMIT_OPTIONS}
                postfix="명 이하만 보기(연렝 제한 적용" />
            <FriendList friends={friendsWithAgeShowLimit} />
        </div>
    )
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];

// useSelector훅은 리덕스에서 액션이 처리가 되면
// 여기서 반환하는 값의 이전값을 기억했다가 값이 변경 되었을때 컴포넌트를 다시 그려줌
// 여러개의 스테이트를 가져오고 싶을때 useSelect를 여러개 사용해도 되고
// const friends = useSelector(state => state.friend.friends);
// const friends = useSelector(state => state.friend.friends2);

// const friends = useSelector(state => [state.friend.friends, state.friend.friends2]);
// 이렇게 사용할 수 있는데
// 렌더링을 할지 말지
// shallowEqual

// 연령 필터
// 10~ 15, 10~ 30
// 과 같이 다 저장하기가 어려워
// 리덕스에는 원본만 가지고 있고
// 필터를 컴포넌트에서