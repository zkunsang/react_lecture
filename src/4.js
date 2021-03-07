import { useEffect } from "react";

function Timer({ initialTotalSeconds }) {
    const [hour, setHour] = useState(Math.floor(initialTotalSeconds / 3600));
    const [minute, setMinute] = useState(
        Math.floor((initialTotalSeconds % 3600) / 60),
    )

    const [seconds, setSeconds] = useState(initialTotalSeconds % 60);

    useEffect(() => {
        const id = setInterval(() => {
            if (seconds) {
                setSeconds(second - 1);
            } else if (minute) {
                setMinute(minute - 1);
                setSeconds(59);
            } else if (hour) {
                setHour(hour - 1);
                setMinute(59);
                setSeconds(59);
            }
        }, 1000);

        return () => clearInterval(id);
    }, [hour, minute, seconds]);
}

// 여러 상태값을 찹조할때는 어떻게 처리할 것인가.
// 위에는 1초마다 seconds가 수정되서 setInterval -> clear를 반복

// reducer를 사용하는것이 좋다!