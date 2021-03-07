import React from 'react';

import { getNextTimeline } from '../../common/mockData';
import { addTimeline, actions } from '../state';
import TimelineList from '../component/TimelineList.js';
import { useDispatch, useSelector } from 'react-redux';


// 상태값 변경 함수를 호출 할 때마다
// 이 컴포넌트를 렌더링하게
export default function TimelineMain() {
    const dispatch = useDispatch();

    const timelines = useSelector(state => state.timeline.timelines);
    const isLoading = useSelector(state => state.timeline.isLoading);

    function onAdd() {
        const timeline = getNextTimeline();
        dispatch(addTimeline(timeline));
    }

    function onLike(e) {
        const id = Number(e.target.dataset.id);
        const timeline = timelines.find(item => item.id === id);
        dispatch(actions.requestLike(timeline));
    }

    console.log('TimelineMain render');
    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} onLike={onLike} />
            {isLoading && <p>전송 중...</p>}
        </div>
    )
}