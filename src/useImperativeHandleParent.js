import React, { useRef } from 'react';
import Profile from './Profile';

export default function App() {
    const profileRef = useRef();

    // profileRef.current 는 자식에서 
    // useImperativeHandle 안에 있는 함수를 참조
    const onClick = () => {
        if (profileRef.current) {
            console.log('current name lneght: ', profileRef.current.getNameLength());
            profileRef.current.addAge(50);
        }
    };

    return (
        <div>
            <Profile ref={profileRef}/>
            <button onClick={onClick}>add age 5</button>
        </div>
    )
};