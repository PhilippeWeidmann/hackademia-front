import React, { Component } from 'react';

class AddAnswer extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Réfiger votre question, ici.' };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }


    render() {
        return (
            <div className="mb-3">
                <h1 class="display-3">Question</h1>
                <label for="Textarea" class="form-label">
                    Comment avez-vous compris notre manière de noter?
                </label>
                <br />
                <textarea
                    class="form-control"
                    id="Textarea"
                    rows="7"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />

            </div>
        );
    }
}

export default AddAnswer;
