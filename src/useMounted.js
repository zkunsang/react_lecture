import { useEffect, useState } from 'react';

export default function useMounted() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}


// 로그인 된만 유저만 할 수 있게 하는 방법
// useBlockIfNotLogin()
// 사용한 작성된 페이지가 있고 저장되지 않았을때 나가려고하면 
// useBlockUnsavedChange(desc)
// 로그인 유저인 경우에만 useEffect를 사용
// useEffectIfLoginUser(callback, deps)
// 쿠키 및 로컬 스토리지
// useLocalStorage(key, initialValue) => [value, setValue]