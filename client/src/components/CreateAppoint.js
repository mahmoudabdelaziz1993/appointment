import React ,{Component}from"react"
import {connect} from "react-redux"
import * as actions from '../actions'
class CreateAppoint extends Component{
    renderContent(){
        
        return this.props.auth.appointments.reverse().map(appointment=>{
            return(
                <div className="card indigo darken-4" key={appointment._id}>
                <div className="card-content">
                <span className="card-title white-text "> you have  an appointment with </span>
                <div className="center  white-text ">
                    <p><img src={appointment.image} alt="Avatar" style={{ width: "50px" }}></img>{appointment.name}</p>
                </div>
                <div className="card-action">
                    <button className="left red waves-effect waves-light btn" onClick={()=>console.log("nbnb")
                    } >cancel<i class="material-icons">cancel</i></button>
                </div>
                </div>
                </div>
            )
        })
    }
    render(){
        return(
            <div> {this.renderContent()}</div>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth }
}
export default connect(mapStateToProps,actions)(CreateAppoint)