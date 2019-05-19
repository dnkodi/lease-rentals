/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import React from "react"
import PropTypes from "prop-types"
import { Navigation } from "./Navigation"
import st from "./custom.scss"

export const Layout = ({ children }) =>
    <div>
        <div className={st.sideBar}>
            <Navigation />
        </div>

        <div className={st.container}>
            <div className={st.card}>
                {children}
            </div>
        </div>
    </div>

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
