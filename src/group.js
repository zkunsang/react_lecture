
import { useEffect } from "react";


// 아래와 같이 useState끼리 모으는게 아니라
// user끼리 묶어서 관리하는게 좋다.
// 커스텀 훅으로 분리 용의
function Profile({ userId }) {
    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     getUserApi(userId).then(data => setUser(data))
    // }, []);

    const user = useUser(userId);
    const width = useWindowWidth();
    // const [width, setWidth] = useState(0);

}