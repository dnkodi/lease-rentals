/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import "whatwg-fetch"

const promiseReject = (value) => new Promise((resolve, reject) => reject(value))

const DIFFERENT_API_BASE_URL = "https://hiring-task-api.herokuapp.com/v1" // Ideally this should be in evars file along with any basic auth credentials

class BackendClient {

    initialise = (dispatch) => {
        this.dispatch = dispatch
    }

    static checkStatusAndGetJSON = (fetchResponse) =>
        fetchResponse.ok
            ? fetchResponse.json()
            : fetchResponse.json().then(promiseReject)

    get = (method) => (path) => fetch(DIFFERENT_API_BASE_URL + path, {
        headers: {
            Accept: "application/json"
        },
        method
    }).then(BackendClient.checkStatusAndGetJSON)

    get = this.get("GET")

    getLeaseRentals = () => this.get("/leases")

    getLeaseRentalDetails = (id) => this.get("/leases/" + id)

}

export default new BackendClient()
