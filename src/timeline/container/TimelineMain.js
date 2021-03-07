import React, { useEffect, useReducer } from 'react';
import store from '../../common/store';
import { getNextTimeline } from '../../common/mockData';
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList.js';

// 상태값 변경 함수를 호출 할 때마다
// 이 컴포넌트를 렌더링하게
export default function TimelineMain() {
    const [, forceUpdate] = useReducer(v => v + 1, 0);
    useEffect(() => {
        // 액션 처리가 되면 
        let prevTimelines = store.getState().timeline.timelines;

        const unsubscribe = store.subscribe(() => {
            let timelines = store.getState().timeline.timelines;
            if (timelines !== prevTimelines)
                forceUpdate()
        });

        return () => unsubscribe();
    }, []);

    function onAdd() {
        const timeline = getNextTimeline();
        store.dispatch(addTimeline(timeline));
    }

    console.log('TimelineMain render');
    const timelines = store.getState().timeline.timelines;

    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} />
        </div>
    )
}