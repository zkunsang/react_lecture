import React from 'react';
import useUser from './useUser';

export default function Profile({ userId }) {
    const user = useUser(userId);

    // 
    if (user) {
        return null;
    }

    // 규칙 1 위반
    const [value, setValue] = useState(0)
    return (
        <div>
            {!user && <p>사용자 정보를 가져오는 중...</p>}
            {user && (
                <>
                    <p>{`name is ${user.name}`}</p>
                    <p>{`age is ${user.age}`}</p>
                </>
            )}
        </div>
    )
}

