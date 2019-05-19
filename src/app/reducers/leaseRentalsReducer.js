/* eslint-disable camelcase */
/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import * as actions from "../actions/leaseRentalsActions"

const initialState = {
    isLoading: false,
    leaseData: {},
    leaseDetails: {
        id: "",
        start_date: "",
        end_date: "",
        rent: "",
        frequency: "",
        payment_day: ""
    }
}

export const leaseRentalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_LEASES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actions.FETCH_LEASES_SUCCESS:
            return {
                ...state,
                leaseData: action.data,
                isLoading: false
            }
        case actions.FETCH_LEASES_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case actions.LEASE_DETAIL_FETCH_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actions.LEASE_DETAIL_FETCH_SUCCESS:
            return {
                ...state,
                leaseDetails: {
                    ...state.leaseDetails,
                    ...action.leaseDetail
                },
                isLoading: false
            }
        case actions.LEASE_DETAIL_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}
