// useEffect가 렌더링 후에 비동기적으로 처리된다고 할때
// useLayoutEffect는 동기적으로 처리된다.
// 성능상 문제혹은 ux상 불편한 상황이 발생할 수 있다.
// 돔의 값을 렌더링 직후에 가져올때 필요하다.
// 또는 조건에 따라서 컴포넌트를 다시 렌더링 하고 싶은경우 ??
// 리액트가 렌더링을 했지만
// '브라우저'가 화면을 그리기 전에 렌더링을 하게 됨

import React, {useState, useRef, useLayoutEffect} from 'react';

export default function App() {
    const [width, setWidth] = useState(200);
    const boxRef = useRef();

    // 깜빡깜빡하게 되는데 
    // 500으로 큰값으로 했다가
    // useEffect가 발동하게 되면서 다시 500으로 줄이는 과정에서
    // 다시 렌더링 하게 된다.
    // useEffect(() => {
    //     if(width > 500) {
    //         setWidth(500);
    //     }
    // }, [width]);
    useLayoutEffect(() => {
      console.log(boxRef.current.getBoundingClientRect().width);
        if(width > 500) {
            setWidth(500);
        }
    }, [width]);

    return (
        <div>
            <div ref={boxRef} style ={{width, height: 100, backgroundColor: 'green'}}>test</div>
            <button onClick={() => {
                const value =Math.floor(Math.random() * 499 + 1);
                setWidth(value);
            }}>
                500이하
            </button>
            <button onClick={() => {
                const value =Math.floor(Math.random() * 500 + 501);
                setWidth(value);
            }}>
                500이상
            </button>
        </div>
    )
}