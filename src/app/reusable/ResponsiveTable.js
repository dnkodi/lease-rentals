/* eslint-disable react/require-default-props */
/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import React from "react"
import PropTypes from "prop-types"

import st from "./ResponsiveTable.scss"

/* Elements */
const ResponsiveTable = ({ children }) => <table className={st.table}>{children}</table>

const RespTHead = ({ children }) => <thead className={st.thead}>{children}</thead>

const RespTRow = ({ children }) => <tr className={st.tr}>{children}</tr>

const RespTH = ({ children }) => <th className={st.th}>{children}</th>

const RespTBody = ({ children }) => <tbody className={st.tbody}>{children}</tbody>

const RespTD = ({ children, label }) => <td className={st.td} data-label={label}>{children}</td>

/* PropTypes */
ResponsiveTable.propTypes = { children: PropTypes.arrayOf(PropTypes.element).isRequired }

RespTHead.propTypes = { children: PropTypes.element }

RespTRow.propTypes = { children: PropTypes.arrayOf(PropTypes.element).isRequired }

RespTH.propTypes = { children: PropTypes.string.isRequired }

RespTBody.propTypes = { children: PropTypes.arrayOf(PropTypes.element) }

RespTD.propTypes = {
    children: PropTypes.any,
    label: PropTypes.string.isRequired
}

export { ResponsiveTable, RespTHead, RespTRow, RespTH, RespTBody, RespTD }
