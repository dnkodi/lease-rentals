/*
 * Created by Duleep Kodithuwakku on 19-05-2019.
 */
import { Link } from "./Link"
import { connect } from "react-redux"
import { redirect } from "../router"

const mapStateToProps = ({ router }, ownProps) => ({
    active: router.path === ownProps.to
})

const mapDispatchToProps = (dispatch) => ({
    redirectTo: (path) => (event) => {
        event.preventDefault()
        dispatch(redirect(path))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
