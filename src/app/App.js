/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import React from "react"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./reducers/rootReducer"
import { Router } from "./router"
import { defaultRoute, routes } from "./routes"
import "./global.scss"
import { Layout } from "./layout/Layout"

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export const App = () =>
    <Provider store={store}>
        <Layout><Router default={defaultRoute} routes={routes} /></Layout>
    </Provider>
