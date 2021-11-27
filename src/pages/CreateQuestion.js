import React, {Component} from 'react';
import "../App.css"

class CreateQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question: "",
            answer: "",
            id: Math.floor(Math.random() * 9999)
        };
    }

    handleInputChangeQuestion = (event) => {
        this.setState({question: event.target.value});
    };

    handleInputChangeAnswer = (event) => {
        this.setState({answer: event.target.value});
    };

    handleSubmitQuestion = (event) => {
        event.preventDefault();
        //APIFetcher.postQuestion(this.state.id, this.state.question);
        this.props.history.push("/stats");

    };

    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"d-flex justify-content-center"} style={{marginTop: "100pt"}}>
                    <h1 style={{fontSize: "40pt"}}>Créer une question</h1>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <form style={{width: "50%"}} onSubmit={this.handleSubmitQuestion}>
                        <div className="mb-5 mt-5">
                            <label className="form-label">Question</label>
                            <input className="form-control" style={{height: "100pt"}} value={this.state.question}
                                   onChange={this.handleInputChangeQuestion}/>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Réponse</label>
                            <input className="form-control" style={{height: "100pt"}} value={this.state.answer}
                                   onChange={this.handleInputChangeAnswer}/>
                            <div className="form-text" style={{color: "white"}}>
                                Il n'est pas obligatoire de renseigner une réponse
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success">Envoyer</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateQuestion;
