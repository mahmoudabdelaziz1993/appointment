import React ,{Component}from"react"
import {connect} from "react-redux"
import * as actions from '../actions'
class ComingRequest extends Component{
    componentDidMount() {
        this.props.fetchUserList();
    }
    renderContent(){
        return this.props.auth.coming_reqquest.reverse().map(request=>{
            return(
                <div className="card indigo darken-4" key={request._id}>
                <div className="card-content">
                <span className="card-title white-text "> you  receive  an appointment request from  </span>
                <div className="center  white-text ">
                    <p><img src={request.image} alt="Avatar" style={{ width: "50px" }}></img>{request.name}</p>
                </div>
                <div className="card-action">
                    <button className="left red waves-effect waves-light btn" onClick={()=>this.props.rejectRequest(request.requester)} >reject<i class="material-icons">cancel</i></button>
                    <button className="right green waves-effect waves-light btn" onClick={()=>this.props.apCreate(request.requester)
                     }> accept<i class="material-icons">check</i></button>
                </div>
                </div>
                </div>
            )
        })
    }
    render(){
        return (
            <div className="container center">{this.renderContent()}</div>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps,actions)(ComingRequest)