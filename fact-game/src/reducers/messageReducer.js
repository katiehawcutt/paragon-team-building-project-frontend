import { actionTypes } from '../constants/messageReducerActions'

export const messageReducer = (state, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_COMPONENT_TO_RENDER:
            return {
                ...state,
                ComponentToRender: payload.ComponentToRender,
                renderProps: { ...payload.renderProps },
            }
        case actionTypes.CREATE_AND_JOIN_GAME:
            return {
                ...state,
                gameId: payload.gameId,
                gameNotCreatedError: false,
                gameCreated: true,
            }
        case actionTypes.JOIN_GAME:
            return {
                ...state,
                gameId: payload.gameId,
                gameNotJoinedError: false,
                gameJoined: true,
            }
        case actionTypes.ERROR_GAME_NOT_CREATED:
            return {
                ...state,
                gameId: null,
                gameCreated: false,
                gameNotCreatedError: payload.error,
            }
        case actionTypes.ERROR_GAME_NOT_JOINED:
            return {
                ...state,
                gameId: null,
                gameJoined: false,
                gameNotJoinedError: payload.error,
            }
        case actionTypes.ERROR_GAME_NOT_STARTED:
            return {
                ...state,
                gameStarted: false,
                gameNotStartedError: payload.error,
            }
        case actionTypes.ERROR_ANSWER_NOT_UPDATED:
            return {
                ...state,
                currentChoiceId: null,
                answerNotUpdatedError: payload.error,
            }
        case actionTypes.UNKNOWN_ERROR:
            return {
                ...state,
                unknownError: true,
            }
        case actionTypes.ANSWER: {
            return {
                ...state,
                answerNotUpdatedError: false,
                currentChoiceId: payload.choiceId,
            }
        }
        default:
            console.warn(`No message handler implemented for action "${type}".`)
            return state
    }
}
