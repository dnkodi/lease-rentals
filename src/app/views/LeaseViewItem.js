/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import React from "react"
import PropTypes from "prop-types"
import { ResponsiveTable, RespTBody, RespTHead, RespTRow, RespTH, RespTD, Spinner } from "../reusable"

export class LeaseViewItem extends React.PureComponent {

    componentDidMount = () => {
        this.props.fetchLease(this.props.leaseId)
    }

    render = () => {
        const { lease, loading } = this.props

        return (
            !loading ?
                <div>
                    <ResponsiveTable>
                        <RespTHead>
                            <RespTRow>
                                <RespTH>ID</RespTH>
                                <RespTH>From</RespTH>
                                <RespTH>To</RespTH>
                                <RespTH>Payment Day</RespTH>
                                <RespTH>Interval</RespTH>
                                <RespTH>Amount</RespTH>
                            </RespTRow>
                        </RespTHead>
                        <RespTBody>
                            <RespTRow>
                                <RespTD>{lease.id}</RespTD>
                                <RespTD>{lease.start_date}</RespTD>
                                <RespTD>{lease.end_date}</RespTD>
                                <RespTD>{lease.payment_day}</RespTD>
                                <RespTD>{lease.frequency}</RespTD>
                                <RespTD>{lease.rent}</RespTD>
                            </RespTRow>
                        </RespTBody>
                    </ResponsiveTable>
                </div> : <Spinner />
        )
    }
}

LeaseViewItem.propTypes = {
    fetchLease: PropTypes.func.isRequired,
    lease: PropTypes.object.isRequired,
    leaseId: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired
}
