// 규칙 1 훅은 항상 같은 순서로 호출 되어야 한다.
// if문 안에 들어가면 안됨

function MyComponent() {
    const [value, setValue] = useState(0);
    if (value === 0) {
        const [v1, setV1] = useState(0);
    }
    else {
        const [v2, setV2] = useState(0);
        const [v3, setV3] = useState(0);
    }

    // 
    for (let i = 0; i < value; i++) {
        const [num, setNum] = useState(0)
    }

    // 함수 안에서 하면 안됨
    // 이 함수가 호출 될지 안될지 알 수가 없음
    function temp() {
        const [num, setNum] = useState(0)
    }
}

function Profile() {
    if (!value) {
        const [name, setName] = useState('mike');
    }

    const [country, setCountry] = useState('korea');

    // 내가 고민했던 내용이 나옴
    // 이걸 어떻게 구분할까 인데
    // 구분할 방법이 없었음
}

// 훅에 대한 수도 코드
let hooks = null;
function useHook() {
    hooks.push(hookData)
}

function process_a_compnenet_rendering(component) {
    hooks = [];
    component();
    // component가 실행되면 
    // 안에 훅들이 차곡차곡 쌓이게 됨
    // 그래서 규칙1 을 지키지 않으면 인덱스가 변하게 되서 
    // 잘못된 동작들을 하게 된다.
    let hooksForThisComponent = hooks;
    hooks = null;
}