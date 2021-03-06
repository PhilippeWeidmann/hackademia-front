import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import AddAnswer from "./pages/AddAnswer";
import CreateQuestion from "./pages/CreateQuestion";
import OrderAnswerGroups from "./pages/OrderAnswerGroups";
import ClusterVisualization from "./pages/ClusterVisualization";
import EnterCode from "./pages/EnterCode";
import Statistics from "./pages/Statistics";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={"/stats"} component={Statistics}/>
                    <Route path={"/code"} component={EnterCode}/>
                    <Route path="/questions/:questionId/answers/add" component={AddAnswer}/>
                    <Route path="/questions/add" component={CreateQuestion}/>
                    <Route path="/questions/:questionId/order" component={OrderAnswerGroups}/>
                    <Route path="/questions/:questionId/graph" component={ClusterVisualization}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
