/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import React from "react"
import PropTypes from "prop-types"
import { ResponsiveTable, RespTBody, RespTHead, RespTRow, RespTH, RespTD, Button, Spinner } from "../reusable"

class LeaseView extends React.PureComponent {

    componentDidMount() {
        this.props.fetchLeases()
    }

    render() {
        const { leases, loading } = this.props

        return (
            !loading && leases.length > 0 ?
                <div>
                    <ResponsiveTable>
                        <RespTHead>
                            <RespTRow>
                                <RespTH>ID</RespTH>
                                <RespTH>Tenant</RespTH>
                            </RespTRow>
                        </RespTHead>
                        <RespTBody>
                            {leases.map(lease =>
                                <RespTRow key={lease.id}>
                                    <RespTD>{lease.id}</RespTD>
                                    <RespTD>{lease.tenant}</RespTD>
                                    <RespTD>
                                        <Button onClick={this.props.redirectTo(`/leases/${lease.id}`)}>View</Button>
                                    </RespTD>
                                </RespTRow>
                            )}
                        </RespTBody>
                    </ResponsiveTable>
                </div> : <Spinner />
        )
    }
}

LeaseView.propTypes = {
    fetchLeases: PropTypes.func.isRequired,
    leases: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    redirectTo: PropTypes.func.isRequired
}

export default LeaseView
