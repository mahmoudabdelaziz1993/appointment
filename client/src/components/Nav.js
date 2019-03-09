import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


class Nav extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return "Loading ....";
            case false:
                return <li><a href="/auth/google" >Login with google </a ></li>;
            default:
                return <div>

                    <li style={{ margin: '0 10px' }}>
                        <Link to='/appointments'>
                            <i class="material-icons">access_time</i>
                        </Link>
                    </li>
                    
                    <li style={{ margin: '0 10px' }}>
                        <Link to='/sent-requests'>
                            <i class="material-icons">{this.props.auth.sent_request.length > 0 ? `exposure_plus_${this.props.auth.sent_request.length}` : "exposure_zero"} </i>
                        </Link>
                    </li>

                    <li style={{ margin: '0 10px' }}>
                        <Link to='/coming-requests'>
                            <i class="material-icons">{this.props.auth.coming_reqquest.length > 0 ? "notifications_active" : "notifications"
                            }</i>
                        </Link>
                    </li>

                    <li><a href="/auth/logout" >Logout  </a ></li></div>;

        }
    }
    render() {

        return (
            <nav className="deep-orange accent-3">
                <div className="nav-wrapper">
                    <div className="container">
                        <Link to={this.props.auth ? '/home' : '/'} className="brand-logo right">Appointments</Link>
                        <ul id='nav-mobile' className="left ">
                            {this.renderContent()}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps)(Nav)