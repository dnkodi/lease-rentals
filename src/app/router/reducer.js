import { PATH_UPDATE } from "./actions"

const initialState = {
    path: window.location.pathname,
    history: []
}

const router = (state = initialState, action) => {
    switch (action.type) {
        case PATH_UPDATE:
            return {
                ...state,
                path: action.path,
                history: state.history.concat(action.path)
            }
        default:
            return state
    }
}

export default router
