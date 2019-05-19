/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import BackendClient from "../services/BackendClient"

export const FETCH_LEASES_REQUEST = "FETCH_LEASES_REQUEST"
export const FETCH_LEASES_SUCCESS = "FETCH_LEASES_SUCCESS"
export const FETCH_LEASES_FAILURE = "FETCH_LEASES_FAILURE"

export const LEASE_DETAIL_FETCH_REQUEST = "LEASE_DETAIL_FETCH_REQUEST"
export const LEASE_DETAIL_FETCH_SUCCESS = "LEASE_DETAIL_FETCH_SUCCESS"
export const LEASE_DETAIL_FETCH_FAILURE = "LEASE_DETAIL_FETCH_FAILURE"


// Action creators
export const leasesFetchRequest = () => ({
    type: FETCH_LEASES_REQUEST
})

export const leasesFetchSuccess = (data) => ({
    type: FETCH_LEASES_SUCCESS,
    data
})

export const leasesFetchFailure = () => ({
    type: FETCH_LEASES_FAILURE
})

export const leaseDetailFetchRequest = () => ({
    type: LEASE_DETAIL_FETCH_REQUEST
})

export const leaseDetailFetchSuccess = (leaseDetail) => ({
    type: LEASE_DETAIL_FETCH_SUCCESS,
    leaseDetail
})

export const leaseDetailFetchFailure = () => ({
    type: LEASE_DETAIL_FETCH_FAILURE
})

// Async actions
export const fetchLeases = () => (dispatch) => {
    dispatch(leasesFetchRequest())
    return BackendClient.getLeaseRentals()
        .then((data) => dispatch(leasesFetchSuccess(data)))
        .catch(() => dispatch(leasesFetchFailure()))
}

export const fetchLease = (leaseId) => (dispatch) => {
    dispatch(leaseDetailFetchRequest())
    return BackendClient.getLeaseRentalDetails(leaseId)
        .then((data) => dispatch(leaseDetailFetchSuccess(data)))
        .catch(() => dispatch(leaseDetailFetchFailure()))
}
