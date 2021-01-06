import React, { useEffect } from 'react'
import { useAwsCognitoHostedUi } from '../../hooks/useAwsCognitoHostedUi'

import { useUserContext } from '../../contexts/User'

export const HandleLogout = () => {
    const { user, setUser } = useUserContext()
    const { redirectToAwsCognitoLogout } = useAwsCognitoHostedUi()
    useEffect(() => {
        if (user) {
            setUser(null)
            redirectToAwsCognitoLogout()
        }
    }, [redirectToAwsCognitoLogout, user, setUser])

    if (user) {
        return <p>Just logging you out...</p>
    }
    return <p>You've been logged out! Come back soon!</p>
}
