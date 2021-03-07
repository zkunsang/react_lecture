import { useEffect } from "react";

useEffect(async () => {
    const data = await fetchUser(userId);
    SpeechSynthesisUtterance(data);
}, [userId]);

// useEffect는 함수를 반환하는 인자를 받음
// Promise를 받을 수 없음
// Promise를 받기 위해서는 함수를 하나 생성해야함

useEffect(() => {
    async function fetchAndSetUser() {
        const data = await fetchUser(userId);
        setuser(data);
    }

    fetchAndSetUser();
}, [userId]);