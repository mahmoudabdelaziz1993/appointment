import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { fetchUserList ,sendRequest } from '../actions'
class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchUserList();
    }
    renderContent() {
        return this.props.users.reverse().map(user => {
            return (
                <div className="card indigo darken-4" key={user._id}>
                    <div className="card-content">
                        <span className="card-title white-text ">
                            <div className='left'> <img src={user.image} alt="Avatar" style={{ width: "50px" }}></img>{user.name}</div>
                            <div className="right">
                                <a  className="btn-floating btn-large waves-effect waves-light red"  onClick={()=>this.props.sendRequest(user._id)}>
                                <i class="material-icons">person_add</i>
                            </a></div>
                        </span>
                        <div className="card-action">

                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container"> {this.renderContent()} </div>
        )
    }
}
function mapStateToProps(state) {
    return { users: state.users }
}
export default connect(mapStateToProps, { fetchUserList ,sendRequest})(Dashboard)