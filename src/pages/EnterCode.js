import React, {Component} from "react";
import {NavLink, Redirect} from "react-router-dom";
class EnterCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: ""
        };
    }

    handleInputChange = (event) => {
        this.setState({
            code: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push("/questions/" + this.state.code + "/answers/add");
    }

    render() {

        return (
            <div className={"container-fluid"}>
                <div className={"d-flex justify-content-center"} style={{marginTop: "100pt"}}>
                    <h1 style={{fontSize: "40pt"}}>Entrez le code du questionnaire</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className={"d-flex justify-content-center"} style={{marginTop: "15%"}}>
                        <div className={"input-group"} style={{width: "30%"}}>
                            <input type="text" className={"form-control"} style={{width: "300pt"}}
                                   value={this.state.code}
                                   onChange={this.handleInputChange}/>
                        </div>
                        <div className={"input-group-append"}>
                            <NavLink className={"btn btn-success"}
                                     to={"/questions/" + this.state.code + "/answers/add"}>
                                Valider
                            </NavLink>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default EnterCode;