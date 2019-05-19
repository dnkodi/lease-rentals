/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import { HomeView } from "./views/HomeView"
import LeaseView from "./views/LeaseView.container"
import LeaseViewItem from "./views/LeaseViewItem.container"

export const routes = [
    {
        path: "/",
        component: HomeView,
        title: "Home"
    },
    {
        path: "/leases",
        component: LeaseView,
        title: "Lease Rentals"
    },
    {
        path: "/leases/:leaseId",
        component: LeaseViewItem,
        title: "Lease Rentals"
    }
]


export const defaultRoute = {
    component: HomeView,
    title: "Home"
}
