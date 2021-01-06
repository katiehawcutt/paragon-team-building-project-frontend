import React from 'react'
import { Route } from 'react-router-dom'

import { useAwsCognitoHostedUi } from '../../hooks/useAwsCognitoHostedUi'
import { useUserContext } from '../../contexts/User'

export const PrivateRoute = ({ component: Component, ...routeProps }) => {
    const { user } = useUserContext()
    const { redirectToAwsCognitoLogin } = useAwsCognitoHostedUi()

    return (
        <Route
            {...routeProps}
            render={(props) => {
                if (user) {
                    return <Component {...props} />
                }
                redirectToAwsCognitoLogin()
                return null
            }}
        />
    )
}
