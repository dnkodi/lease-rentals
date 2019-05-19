# React-Redux-Router-Custom
A top-level router that is fully integrated with Redux and ready for server-side rendering.

## About
-The initial path is read from the request to the server, and loaded into the store.
-This path entry in the store determines which page to render, so redirecting just changes the path (and adds it to the history).  
-The Router component also interacts with the browser. It watches for the back-button, which will go back within the app. Also on redirecting, it updates the URL.  
-Because the window object isn't accessible on the server, any code that mentions the window has to make sure it exists first. 

## Usage

1. Add the router reducer.
```javascript
import { combineReducers } from "redux";
import { reducer as router } from "../modules/router";

const stateReducer = combineReducers({
    router
});

export default stateReducer;
```

2. Define your routes.
-React-Router defines them as React components, but that doesn't make sense to me.  
-The most important thing here is that the component is a function, not JSX (so `Home`, not `<Home />`).  
-Routes can have dynamic URL parameters. This mechanism relies on the [path-to-regexp module](https://www.npmjs.com/package/path-to-regexp). These are accessible via the elements props.  
```javascript
const routes = [
    {
        path: "/",
        component: (Home)
    }, {
        path: "/new",
        component: (NewThingPage)
    }, {
        path: "/edit/:urn",
        component: (EditThingPage) // this.props.urn
    }
];
```

3. Invoke the router wherever you want it rendered. For example, you may not want it at the root of the app, but within a padding-wrapper, or navigation bars, etc. It is only top-level, so there can only be one per application. It receives two props, the routes-object, and a default element function. The default component receives a `path=` prop, if you want to display the requested path or something. 
```javascript
<App>
    <Router routes={routes} default={Error404} />
</App>
```

4. Redirecting dynamically - one of the things that was important to me was to be able to redirect easily. With React-Router this was a pain, but with this it's easy, because the `redirect` action is exposed, so you can call it from wherever you like. 

Here is an example of what a Link component might look like:
```
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { redirect } from "../../modules/router";
import st from "../stylesheets/link.scss";

const Link = ({ to, redirectTo, children }) =>
    <a
        href={to}
        onClick={redirectTo(to)}
        className={st.link}
    >
        {children}
    </a>
;

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    redirectTo: (newPath) => (event) => {
        event.preventDefault();
        dispatch(redirect(newPath));
    }
});

Link.propTypes = {
    to: PropTypes.string.isRequired,
    redirectTo: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);

```
Or, if you wanted a navigation link that changed colour when it matched the current page, you could add the current path to mapStateToProps, and use that to determine the CSS.
