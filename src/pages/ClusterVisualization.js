import rd3 from 'react-d3-library';
import * as d3 from "d3";
import React, {Component} from 'react';
import APIFetcher from '../API';
const RD3Component = rd3.Component;


class ClusterVisualization extends Component {
    constructor() {
        super()
        this.state = {
            'data': {},
            'd3Node': '',
            'loading': true
        }
    }

    componentDidMount() {
        let node = document.createElement('div');
        this.setState({
            'd3Node': node
        })

        APIFetcher.getAnswerClusters(0).then(
            (results) => {
                this.setState({
                    'data': results
                })
                return results
            }
        ).then(
            (results) => {
                const answerData = results.answerGroups ?? [];
                const data = answerData.map(function(d) {
                    return {
                        id: d.id,
                        students: d.answers,
                        // TODO ADD PROFESSOR REFERENCE
                        reference: []
                }})

                var margin = {top: 20, right: 20, bottom: 30, left: 40},
                    width = 960 - margin.left - margin.right,
                    height = 500 - margin.top - margin.bottom;

                var svg = d3.select(this.state.d3Node)
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                            "translate(" + margin.left + "," + margin.top + ")");

                var groups = data.map(d=>d.id)
                var subgroups = Object.keys(data[0]).filter(x => x !== 'id')

                var x = d3.scaleBand()
                    .domain(groups)
                    .range([0, width])
                    .padding([0.2])

                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x).tickSize(0));

                var sizes = [...data.map(d => d.students.length), ...data.map(d => d.reference.length)]

                var y = d3.scaleLinear()
                    .domain([0, Math.max(...sizes) + (10 - Math.max(...sizes) % 10)])
                    .range([ height, 0 ]);

                svg.append("g")
                    .call(d3.axisLeft(y));

                var xSubgroup = d3.scaleBand()
                    .domain(subgroups)
                    .range([0, x.bandwidth()])
                    .padding([0.05])

                // color palette = one color per subgroup
                var color = d3.scaleOrdinal()
                    .domain(subgroups)
                    .range(['#ffffff','#377eb8','#4daf4a'])

                // Show the bars
                svg.append("g")
                    .selectAll("g")
                    // Enter in data = loop group per group
                    .data(data)
                    .enter()
                    .append("g")
                    .attr("transform", function(d) {
                        return "translate(" + x(d.id) + ",0)";
                    })
                    .selectAll("rect")
                    .data(function(d) {
                        return subgroups.map(function(key) {
                            return {key: key, value: d[key]};
                        });
                    })
                    .enter().append("rect")
                    .attr("x", function(d) { return xSubgroup(d.key); })
                    .attr("y", function(d) { return y(d.value.length); })
                    .attr("width", xSubgroup.bandwidth())
                    .attr("height", function(d) { return height - y(d.value.length); })
                    .attr("fill", function(d) { return color(d.key); });

                this.setState({
                    'loading': false
                })
            }
        )
    }

    render() {

        return <div className={"text-align-center"}>
            <RD3Component data={this.state.d3Node} />
        </div>
    }
}

export default ClusterVisualization;
