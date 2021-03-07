function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: getNewId(), title: action.title, priority: action.priority }
                ]
            }
    }
}

// 불변객체를 만들기 위해서 복잡한 객체를 전개연산자로 풀어주는게 쉽지가 않음