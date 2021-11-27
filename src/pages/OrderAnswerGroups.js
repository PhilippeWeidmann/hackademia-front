import React, {Component} from 'react';
import APIFetcher from "../API";
import AnswerRow from "./AnswerGroupRow";

class OrderAnswerGroups extends Component {

    constructor() {
        super();
        this.handleOrderDown = this.handleOrderDown.bind(this);
        this.handleOrderUp = this.handleOrderUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {loading: true, question: null, orderedAnswerGroups: []};
    }

    handleOrderUp(group) {
        let answerGroups = this.state.orderedAnswerGroups;
        let index = answerGroups.indexOf(group);
        if (index > 0) {
            let newAnswerGroups = [...answerGroups];
            let temp = newAnswerGroups[index - 1];
            newAnswerGroups[index - 1] = newAnswerGroups[index];
            newAnswerGroups[index] = temp;
            this.setState({...this.state, orderedAnswerGroups: newAnswerGroups});
        }
    }

    handleOrderDown(group) {
        let answerGroups = this.state.orderedAnswerGroups;
        let index = answerGroups.indexOf(group);
        if (index < answerGroups.length - 1) {
            let newAnswerGroups = [...answerGroups];
            let temp = newAnswerGroups[index + 1];
            newAnswerGroups[index + 1] = newAnswerGroups[index];
            newAnswerGroups[index] = temp;
            this.setState({...this.state, orderedAnswerGroups: newAnswerGroups});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let questionId = this.props.match.params.questionId;
        let answerGroupIds = this.state.orderedAnswerGroups.map(group => group.id);
        this.props.history.push('/stats');

        /* APIFetcher.postUserOrdering(questionId, answerGroupIds).then(() => {
         });*/
    }

    componentDidMount() {
        let questionId = this.props.match.params.questionId;
        APIFetcher.getAnswerClusters(questionId)
            .then(response => {
                this.setState({
                    loading: false,
                    question: response,
                    orderedAnswerGroups: response.answerGroups
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        if (this.state.loading) {
            return <div>Chargement...</div>;
        }

        let question = this.state.question;
        let answerGroups = this.state.orderedAnswerGroups;
        let answerGroupRows = answerGroups.map((answerGroup) => {
            return <AnswerRow handleOrderUp={this.handleOrderUp}
                              handleOrderDown={this.handleOrderDown}
                              key={answerGroup.id}
                              answerGroup={answerGroup}/>
        });
        return <div className="container-fluid">
            <div className={"card mt-2 mb-2 text-black p-3"}>
                {question.text}
            </div>
            <ul className="list-group">
                {answerGroupRows}
            </ul>
            <button onClick={this.handleSubmit} className={"mt-2 btn btn-success float-end justify-center"}>Envoyer
            </button>
        </div>
    }
}

export default OrderAnswerGroups;
