import React, {useContext, createContext} from 'react';

const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

export default function App() {
    return (
        <div>
            <ThemeContext.Provider value="light">
                <UserContext.Provider value="mike">
                    <div>upper menu</div>
                    <Profile />
                    <div>bottom menu</div>
                </UserContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

function Profile() {
    return (
        <div>
            <Greeting />
        </div>
    )
}

function Greeting() {
    const theme = useContext(ThemeContext);
    const username = useContext(UserContext);

    return (
    <p style={{color: theme === 'dark' ? 'gray': 'green'}}>{`${username}안녕하세요`}</p>
    )
}