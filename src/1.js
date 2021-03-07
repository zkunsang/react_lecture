import React, { useState, useEffect } from 'react';
import useOnMOunted from './useOnMounted'

export default function App() {
    return (
        <div>
            실전 리액트 <Profile />
        </div>
    )
}

function Profile({ userId }) {
    const [user, setUser] = useState();
    const [needDetail, setNeedDetail] = useState(false);

    useOnMOunted(() => fetchUser(userId, needDetail).then(data => setUser(data)))

    console.log(user, setNeedDetail);
    return null;
}

function fetchUser() { };