import React from 'react'
import { Route } from 'react-router-dom'

import { useAwsCognitoHostedUi } from '../../hooks/useAwsCognitoHostedUi'
import { useUserContext } from '../../contexts/User'

export const PrivateRoute = ({ component: Component, ...routeProps }) => {
    const { user } = useUserContext()
    const { sendUserToAwsCognitoLogInUrl } = useAwsCognitoHostedUi()

    return (
        <Route
            {...routeProps}
            render={(props) => {
                if (user) {
                    return <Component {...props} />
                }
                sendUserToAwsCognitoLogInUrl()
                return null
            }}
        />
    )
}
