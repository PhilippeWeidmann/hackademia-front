import rd3 from 'react-d3-library';
import React, {Component} from 'react';
import APIFetcher from '../API';
const RD3Component = rd3.Component;


class ClusterVisualization extends Component {    
    getNode() {
        let node = document.createElement('div');
        return node
    }

    constructor() {
        super()
        this.state = {
            'sadboi': 'no',
            d3: this.getNode(),
            'data': {}
        }
    }

    componentDidMount() {
        let questionId = this.props.match.params.questionId;
        APIFetcher.getAnswerClusters(questionId).then(
            (results) => this.setState({
                'data': results
            })
        )
    }

    render() {
        var me = this.state.sadboi ?? 'test'
        return <div>
            { this.state.data.id ?? 'null' }
            <RD3Component data={this.state.d3} />
        </div>
    }
}

export default ClusterVisualization;
