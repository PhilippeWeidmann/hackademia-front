import React, {Component} from 'react';

class AnswerGroupRow extends Component {

    render() {
        let answerGroup = this.props.answerGroup;
        let handleOrderUp = this.props.handleOrderUp;
        let handleOrderDown = this.props.handleOrderDown;

        return <li className="list-group-item">
            <div className="hstack gap-3">
                <div>
                    <div className="vstack gap-3">
                        <i onClick={() => handleOrderUp(answerGroup)} className="bi bi-arrow-up-square"
                           style={{fontSize: "2em"}}></i>
                        <i onClick={() => handleOrderDown(answerGroup)} className="bi bi-arrow-down-square"
                           style={{fontSize: "2em"}}></i>
                    </div>
                </div>
                <div>
                    {answerGroup.answers[0].text}
                </div>
            </div>
        </li>
    }
}

export default AnswerGroupRow;
