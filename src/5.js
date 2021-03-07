function Parent() {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [count, setCount] = useState(0);

    const onChangeFruit = useCallback(fruit => {
        setSelectedFruit(fruit);
        sendLog({ type: 'fruit change', value: fruit });
    }, [])

    return (
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>increase count</button>
            <SelectFruit
                selected={selectedFruit}
                onChange={onChangeFruit} />
        </div>

    )
}

// SelectFruit이 렌더링 될까?
// selectedFruit이 변경되게 되면
// SelectFruit 의 setSelectedFruit도 새로 생성되게 됨으로
// fruit => setSelectedFruit이 다시 생성된다?
// SelectFruit역시 setSelectedFruit함수는 다시 생성되지 않는다!

// 위상황에서 더 복잡한 행동
// setSelectedFruit만이 아니라 sendLog같은 함수가 실행 된다 할때
// useCallback을 사용해서 처리