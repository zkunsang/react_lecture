import { createReducer, setValueReducer, createSetValueAction } from '../../common/redux-helper';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';

const ADD = 'friend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT';

const SET_VALUE = 'friend/SET_VALUE'

export const actions = {
    addFriend: friend => ({ type: ADD, friend }),
    removeFriend: friend => ({ type: REMOVE, friend }),
    editFriend: friend => ({ type: EDIT, friend }),
    setValue: createSetValueAction(SET_VALUE),
}

// export const addFriend = friend => ({ type: ADD, friend });
// export const removeFriend = friend => ({ type: REMOVE, friend });
// export const editFriend = friend => ({ type: EDIT, friend });
// export const setValue = createSetValueAction(SET_VALUE);

const INITIAL_STATE = { friends: [], ageLimit: MAX_AGE_LIMIT, showLimit: MAX_SHOW_LIMIT };

// redux사용시 불편한게
// 상태값에 name이 추가 됐다면
// 액션도 추가해야하고
// 액션 크리에이터도 생성해야함.
// 번거러워

const reducer = createReducer(INITIAL_STATE, {
    [ADD]: (state, action) => state.friends.push(action.friend),
    [REMOVE]: (state, action) => (state.friends = state.friends.filter(friend => friend.id !== action.friend.id)),
    [EDIT]: (state, action) => {
        const index = state.friends.findIndex(
            friend => friend.id === action.friend.id
        );

        if (index >= 0) {
            state.friends[index] = action.friend;
        }
    },
    [SET_VALUE]: setValueReducer
})

export default reducer;