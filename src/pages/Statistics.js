import {React, Component} from 'react';
import ClusterVisualization from './ClusterVisualization.js';

class Statistics extends Component{

    render() {
        return(
            <div className={"container-fluid"}>
                <div className={"d-flex justify-content-center"} style={{marginTop: "100pt"}}>
                    <h1 style={{fontSize: "40pt"}}>Statistiques</h1>
                </div>
                <ClusterVisualization />
            </div>
        )
    }
}
export default Statistics;