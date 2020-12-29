/**
 * Default, catch-all function. If the back end sends a message that the
 * front end doesn't have a function to handle, it'll get passed to this function.
 */
export const $default = ({ data }) => {
    console.warn(`No message handler implemented for action "${data.action}".`)
}

/**
 * Set "gameId" in React app's state (if it's not yet set)
 * and set "response received" to true.
 */
export const CREATE_AND_JOIN_GAME = ({ data, setGame }) => {
    setGame((prev) => ({
        ...prev,
        gameId: data.gameId,
        responseReceived: true,
    }))
}

/**
 * Set "joined" to true in React app's state.
 */
export const JOIN_GAME = ({ data, setGame }) => {
    setGame((prev) => ({
        ...prev,
        gameId: data.gameId,
        responseReceived: true,
    }))
}

/**
 * Mark the game as having started.
 */
export const GAME_STARTED = ({ setGame }) => {
    setGame((prev) => ({
        ...prev,
        started: true,
    }))
}

export const ERROR = ({ data, setGame }) => {
    setGame((prev) => ({
        ...prev,
        error: data.error ?? 'An error occurred, please try again later.',
    }))
}
