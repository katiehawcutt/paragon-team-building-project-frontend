import { createContext, useContext, useState } from 'react'

const UserContext = createContext({
    user: {
        displayName: 'Indigo',
        playerId: '732192d3-3ac7-4f46-802d-23d8250a537f',
    },
    setUser() {},
})

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}
