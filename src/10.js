function SelectFruit({ selectedFruit, onChange }) {
    const [fruits, setFruits] = useSTate(['apple', 'banana', 'orange']);
    const [newFruit, setNewFruit] = useState('');

    function addNewFruit() {
        fruits.push(newFruit);
        setFruits([...fruits, newFruit]);
        // setFruits(fruits) 를 해도 렌더링이 안됨. 왜? 불변성 객체이기 때문에 push만하면 안됨
        // 아래 함수에 따라서 다시 렌더링 하게 됨
        setNewFruit('');
    }

    return (
        <div>
            <Select options={fruits} selected={selectedFruit} onChange={onChange} />
            <input
                type="text"
                value={newFruit}
                onChange={e => setNewFruit(e.target.value)} />
            <button onClick={addNewFruit}>추가하기</button>
            {/** */}
        </div>
    )
}