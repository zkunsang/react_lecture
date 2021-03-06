import React, {useContext, createContext} from 'react';

// context사용할려면 Profile은 Context안에 있어야 한다.
const UserContext = createContext('unknown');
export default function App() {
    return (
        <div>
            <UserContext.Provider value="mike"></UserContext.Provider>
            <Profile />
        </div>
    )
}

function Profile() {

}