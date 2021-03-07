function SelectFruit({ selectedFruit, onChange }) {
    return (
        <div>
            <Select
                options={FRUITS}
                selected={selectedFruit}
                onChange={onChange} />
        </div>
    )
}

// 속성값이 변경됐다고 인식을 한다.
// options와 같이 직접 object를 생성해 준다면
// 렌더링을 할때 변경된걸로 생각하고 rerendering을 하게 된다.

const FRUITS = [
    { name: 'apple', price: 500 },
    { name: 'banana', price: 1000 },
    { name: 'orange', price: 1500 },
]