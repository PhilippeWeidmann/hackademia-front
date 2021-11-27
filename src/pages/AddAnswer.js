import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AddAnswer extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 'Rédiger votre question, ici.',
            name: ''
        };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleInput = event => {
        this.setState({ name: event.target.value });
    };

    logValue = () => {
        console.log(this.state.name);
    }

    render() {
        return (
            <div className="mb-3 p-3 text-center justify">
                <h1>Question</h1>
                <label for="Textarea" class="form-label">
                    Comment avez-vous compris notre manière de noter?
                </label>
                <br />
                <textarea
                    class="form-control"
                    id="Textarea"
                    rows="7"
                    onChange={this.handleInput}
                    defaultValue={this.state.value}
                    style={{ marginBottom: '1%' }}
                />
                <NavLink
                    onClick={this.logValue}
                    class="btn btn-success"
                    to={{
                        pathname: "/questions/" + this.props.match.params.questionId + "/order"
                    }}
                >Envoyer </NavLink>
            </div>
        );
    }
}

export default AddAnswer;