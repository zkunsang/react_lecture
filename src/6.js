import { useEffect } from "react";

function Profile({ userId }) {
    const [user, setUser] = useState();


    // 아래 fetchAndSetUser를 밖으로 빼고 싶어
    // 왜? 다른곳에서도 쓸수 있으니까
    // 근데 문제가 발생됨 Profile이 발생하게 되면 함수가 계속해서 실행되고

    // 그래서 useCallback을 사용함
    const fetchAndSetUser = useCallback(
        async function (needDetail) {
            const data = await fetchUser(userId, needDetail);
            setUser(data);
        },
        [userId]
    )

    // async function fetchAndSetUser(needDetail) {
    //     const data = await fetchUser(userId, needDetail);
    //     setUser(data);
    // }

    useEffect(() => {
        fetchAndSetuser(false);
    }, [fetchAndSetuser])

    if (!user) {
        return <h1>로딩...</h1>
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{`캐시: ${user.cash}`}</p>
            <button onClick={() => fetchAndSetUser(true)}>더보기</button>
            <UserDetail user={user} />
        </div>
    )
}