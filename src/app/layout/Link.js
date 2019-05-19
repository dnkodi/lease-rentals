/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import st from "./Link.scss"

const cx = classNames.bind(st)

export const Link = ({ active, children, margin, redirectTo, to, underline, white }) =>
    <a
        className={cx(st.link, {
            [st.active]: active,
            [st.underline]: underline,
            [st.white]: white
        })}
        href={to}
        onClick={redirectTo(to)}
        style={{ margin }}
    >
        {children}
    </a>

Link.defaultProps = {
    active: false,
    margin: "",
    underline: false,
    white: false
}

Link.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any.isRequired,
    margin: PropTypes.string,
    redirectTo: PropTypes.func.isRequired,
    to: PropTypes.string.isRequired,
    underline: PropTypes.bool,
    white: PropTypes.bool
}
