/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import { connect } from "react-redux"
import { fetchLeases } from "../actions/leaseRentalsActions"
import { redirect } from "../router/"
import LeaseView from "./LeaseView"

const mapStateToProps = ({ lease }) => ({
    leases: lease.leaseData,
    loading: lease.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    fetchLeases: () => dispatch(fetchLeases()),
    redirectTo: (path) => (event) => {
        event.preventDefault()
        dispatch(redirect(path))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LeaseView)
