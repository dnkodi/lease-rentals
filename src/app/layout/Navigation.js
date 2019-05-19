/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import React from "react"
import Link from "./ConnectedLink"
import st from "./custom.scss"

export const Navigation = () =>
    <ul>
        <li className={st.navTitle}>Services</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leases">Leases</Link></li>
    </ul>
