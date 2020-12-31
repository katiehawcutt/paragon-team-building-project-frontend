import { createContext } from 'react'

const UserContext = createContext()

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
