/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import { fetchLease } from "../actions/leaseRentalsActions"
import { connect } from "react-redux"
import { LeaseViewItem } from "./LeaseViewItem"

const mapStateToProps = ({ lease }) => ({
    lease: lease.leaseDetails,
    loading: lease.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    fetchLease: (id) => dispatch((fetchLease(id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(LeaseViewItem)
