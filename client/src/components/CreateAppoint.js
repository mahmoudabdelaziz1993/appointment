import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from '../actions'
import { Link } from 'react-router-dom'

class CreateAppoint extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:

                return (
                    <div>
                        <h1> Loading .....! </h1>
                    </div>
                )
            default:
                if (this.props.auth.appointments.length > 0) {
                    return this.props.auth.appointments.reverse().map(appointment => {
                        return (
                            <div className="card indigo darken-4" key={appointment._id}>
                                <div className="card-content">
                                    <span className="card-title white-text "> you have  an appointment with </span>
                                    <div className="center  white-text ">
                                        <p><img src={appointment.image} alt="Avatar" style={{ width: "50px" }}></img>{appointment.name}</p>
                                    </div>
                                    <div className="card-action">
                                        <button className="left red waves-effect waves-light btn" onClick={() => this.props.apCancle(appointment.with)
                                        } >cancel<i class="material-icons">cancel</i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                return (
                    <div className="container">
                        <h1> yo did't have coming appointments yet !!!! </h1>
                        <div className='fixed-action-btn'>
                            <Link to='/home' className='btn-floating btn-large black '>
                                <i className='large material-icons'> home </i>
                            </Link>
                        </div>
                    </div>
                )

        }
    }
    render() {
        return (
            <div> {this.renderContent()}</div>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps, actions)(CreateAppoint)