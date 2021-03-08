import produce from 'immer'

export function createReducer(initialState, handleMap) {
    return function (state = initialState, action) {
        return produce(state, draft => {
            const handler = handleMap[action.type];
            if (handler) {
                handler(draft, action);
            }
        })
    }
};

export function createSetValueAction(type) {
    return (key, value) => ({ type, key, value });
}

export function setValueReducer(state, action) {
    state[action.key] = action.value;
}

// 심볼 사용 이유는 이름 충돌 문제를 해결할 수 있음
export const FETCH_PAGE = Symbol('FETCH_PAGE');
export const FETCH_KEY = Symbol('FETCH_KEY');