export const PATH_UPDATE = "PATH_UPDATE"

export const pathUpdate = (path) => ({
    type: PATH_UPDATE,
    path
})

// Async Actions
export const redirect = (path) => (dispatch, getState) => {
    const currentPath = getState().router.path
    if (path !== currentPath) {
        dispatch(pathUpdate(path))
        if (window) window.history.pushState({ path }, "", path)
    }
}
