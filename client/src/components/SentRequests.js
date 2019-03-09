import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from '../actions';
import { Link } from 'react-router-dom'


class SentRequest extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:

                return (
                    <div>
                        <h1> Loading .....! </h1>
                    </div>
                )

            default:
                if (this.props.auth.sent_request.length > 0) {
                    return this.props.auth.sent_request.reverse().map(request => {
                        return (
                            <div className="card indigo darken-4" key={request._id}>
                                <div className="card-content">
                                    <span className="card-title white-text "> you  request an appointment with </span>
                                    <div className="center  white-text ">
                                        <p><img src={request.image} alt="Avatar" style={{ width: "50px" }}></img>{request.name}</p>
                                    </div>
                                    <div className="card-action">
                                        <button className="red waves-effect waves-light btn" onClick={() => this.props.cancelRequest(request.receiver)}>cancel</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                return (
                    <div className="container">
                        <h1> yo did't send request yet !!!! </h1>
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
            <div className="container center">{this.renderContent()}</div>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps, actions)(SentRequest)