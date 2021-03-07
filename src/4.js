import { useEffect } from "react";

// 2번이 변경되더라도 의존성 배열에 있지 않으므로
// value1이 가지고 있던 value2의 값을 보유주게됨.

function MyComponent() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    useEffect(() => {
        const id = setInterval(() => console.log(value1, value2), 1000);
        return () => clearInterval(id);
    }, [value1]);

    return (
        <div>
            <button onClick={() => setValue1(value1 + 1)}>value1 증가</button>
            <button onClick={() => setValue2(value2 + 1)}>value2 증가</button>
        </div>
    )
}