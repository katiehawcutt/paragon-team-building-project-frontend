import { createContext, useContext } from 'react'

const UserContext = createContext({ user: 'some_user' })

export const UserContextProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ user: 'some_user' }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}
