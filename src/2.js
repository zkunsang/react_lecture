const prevProps = {
    todos: [
        { title: 'fix bug', priority: 'high' },
        { title: 'meeting with jone', priority: 'low' }
    ]
}

const nextProps = {
    todos: [
        { title: 'fix bug', priority: 'high' },
        { title: 'meeting with jone', priority: 'low' }
    ]
}

// ****객체를 불변객체로 관리
// 모든 요소를 
// nextProps === prevProps 같은 것이 가능하다


// 아래와 같이 하는게 아니라
const todos = [1, 2, 3];
todos.push(4)

// 불변 객체는
const nextTodos = [...todos, 4];