function addTodo({ title, prority }) {
    return { type: 'todo/ADD', title, priority };
}

function removeTodo({ id }) {
    return { type: 'todo/REMOVE', id };
}

function removeAllTodo() {
    return { type: 'todo/REMOVE_ALL' };
}

store.dispatch(addTodo({ title: '영화보기', priority: 'high' }));
// 액션 크리에이터를 만드는 이유
// 이렇게 일관성있게 만들기 위함이ㅏ.