import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import pathToRegex from "path-to-regexp"

import { pathUpdate } from "./actions"

const isBrowser = () => Boolean(typeof window !== "undefined" && window.document)

class Router extends React.Component {

    constructor(props) {
        super(props)
        this.handleNavigation = this.handleNavigation.bind(this)
    }

    componentDidMount() {
        const initialPath = this.props.path
        window.history.replaceState({ path: initialPath }, "", initialPath)
        window.addEventListener("popstate", this.handleNavigation)
    }

    componentWillUnmount() {
        window.removeEventListener("popstate", this.handleNavigation)
    }

    handleNavigation(popstateEvent) {
        this.props.updatePath(popstateEvent.state.path)
    }

    render() {
        const match = this.props.routes.find(route => {
            const regexp = pathToRegex(route.path)
            return regexp.test(this.props.path)
        })
        if (match) {
            if (isBrowser()) document.title = match.title

            const keys = []
            const [, ...matches] = pathToRegex(match.path, keys).exec(this.props.path)
            const params = keys.reduce((acc, key, index) => ({
                ...acc,
                [key.name]: decodeURIComponent(matches[index])
            }), {})
            return <match.component {...params} />
        }
        else {
            const fallback = this.props.default
            if (isBrowser()) document.title = fallback.title
            return <fallback.component path={this.props.path} />
        }
    }

}

Router.propTypes = {
    default: PropTypes.any.isRequired,
    path: PropTypes.string.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string,
        component: PropTypes.any
    })).isRequired,
    updatePath: PropTypes.func.isRequired
}

const mapStateToProps = ({ router }) => ({
    path: router.path
})

const mapDispatchToProps = (dispatch) => ({
    updatePath: (newPath) => dispatch(pathUpdate(newPath))
})

export default connect(mapStateToProps, mapDispatchToProps)(Router)
