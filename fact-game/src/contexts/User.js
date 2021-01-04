import { createContext, useContext } from 'react'

const UserContext = createContext({ user: 'some_user' })

export const UserContextProvider = ({ children }) => {
    return (
        <UserContext.Provider
            value={{
                user: {
                    username: 'Abe',
                    playerId: 'c869cb1a-e866-4d79-a675-2deb157dfbf8',
                },
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}
