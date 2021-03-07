function reducer(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case SAY_HELLO:
                const random = Math.floor(Math.random() * 10 + 1);
                draft.mst = `hello! ${action.name} lucky ${random}`
                break;
            case INCREMENT:
                callApi({ url: '/sendActionLog', data: action });
                draft.value += 1;
                break;
        }
    })
}

// api를 호출하면 안된다
// 리듀서에서
// 입력이 랜덤함수 역시
// 타임함수 역시 사용 X

// action으로 만들고 넘겨 주어야 한다.