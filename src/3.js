function Parent() {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>increase count</button>
            <SelectFruit
                selected={selectedFruit}
                onChange={fruit => setSelectedFruit(fruit)} />
        </div>

    )
}

// SelectFruit이 렌더링 될까?
// selectedFruit이 변경되게 되면
// SelectFruit 의 setSelectedFruit도 새로 생성되게 됨으로
// fruit => setSelectedFruit이 다시 생성된다?
// SelectFruit역시 setSelectedFruit함수는 다시 생성되지 않는다!