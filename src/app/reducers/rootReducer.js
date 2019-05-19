/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import { combineReducers } from "redux"

import { reducer as router } from "../router"
import { leaseRentalsReducer as lease } from "./leaseRentalsReducer"

const rootReducer = combineReducers({
    router,
    lease
})

export default rootReducer
