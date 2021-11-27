import React, {Component} from 'react';
import "../App.css"
import {NavLink} from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"d-flex justify-content-center"} style={{marginTop: "100pt"}}>
                    <h1 style={{fontSize: "60pt"}}>Qual-E</h1>
                </div>
                <div className={"d-flex justify-content-center"} style={{marginTop: "200pt"}}>
                    <NavLink to={"/questions/add"} className={"btn btn-success btn-lg"} style={{marginRight: "10%"}}>Poser
                        une question</NavLink>
                    <NavLink to={"/code"} className={"btn btn-success btn-lg"}>Entrer un code</NavLink>
                </div>
            </div>
        )

    }
}

export default Home;
