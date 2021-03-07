const state = {
    user: {
        name: 'mike',
        friends: [
            {
                name: 'jane',
                age: 23,
            },
            {
                name: 'jake',
                age: 24,
            }
        ]
    },
    products: []
}

// 불변 객체를 사용한다는것!
// friends[0]을 변경하려면
// prevState === nextState 단순 비교로 변경되었는지 확인 가능