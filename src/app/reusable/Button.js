/* eslint-disable react/button-has-type */
/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import React from "react"
import PropTypes from "prop-types"

import st from "./Button.scss"

const Button = ({ children, disabled, onClick, colour }) => <button className={st[colour]} disabled={disabled} onClick={onClick}>{children}</button>

Button.propTypes = {
    children: PropTypes.string.isRequired,
    colour: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    disabled: false,
    colour: "default"
}

export default Button
