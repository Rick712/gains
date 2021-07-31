import React, { useState, createContext } from 'react';

const userData = {
    name: '',
    email: '',
    token: '',
};

const UserContext = createContext({
    setUser: (dataFromUser) => dataFromUser,
    user: userData,
});

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(userData);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContextProvider, UserContext };
