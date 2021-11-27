import React, {Component} from 'react';
import "../App.css"

class CreateQuestion extends Component {
    render() {
        return <div className={"container-fluid"}>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <h1>Create Question</h1>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <form>
                        <div className={"form-group"}>
                            <label htmlFor={"question"}>Question</label>
                            <input type="text" className={"form-control"} id={"question"} placeholder={"Enter question"}/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor={"answer"}>Answer</label>
                            <input type="text" className={"form-control"} id={"answer"} placeholder={"Enter answer"}/>
                        </div>
                        <button type={"submit"} className={"btn btn-success"}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default CreateQuestion;
