import React, {useRef, useEffect} from 'react';

export default function App() {
    const inputRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <InputAndSave ref={inputRef} />
            <Button ref={buttonRef}/>
            <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
        </div>
    )
}

function InputAndSave({inputRef, buttonRef}) {
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button ref={buttonRef}>저장</button>
        </div>
    )
}

// 일반적으로 ref를 사용하면 리액트에서 내부적으로 사용하게 된다
// 그래서 forwardRef를 사용해야한다
const Button = React.forwardRef(function({onClick}, ref) {
    return(
        <button onClick={onClick} ref={ref}></button>
    )
})