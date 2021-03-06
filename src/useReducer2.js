import React, {useReducer} from 'react';

export const ProfileDispatch = React.createContext(null);

export default function App() {
    const [state, dispatch]  = useReducer(reducer, INITIAL_STATE);

    return (
        <div>
            <p>{`name is ${state.name}`}</p>
            <p>{`age is ${state.age}`}</p>
            <ProfileDispatch.Provider value={dispatch}>
                <SomeComponent />
            </ProfileDispatch.Provider>
        </div>
    )
}


// SomeComponent에서는 dispatch를 가지고와서 처리
// Consumer 
function SomeComponent() {

}


const INITIAL_STATE = { name: 'empty', age: 0 };
const MAX_AGE = 50;

function reducer(state, action) {
    switch (action.type) {
        case 'setName':
            return { ...state, name: action.name };
        case 'setAge':
            return { ...state, age: action.age };
        default:
            return state;
    }
}