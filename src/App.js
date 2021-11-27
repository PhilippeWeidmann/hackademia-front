import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddAnswer from "./pages/AddAnswer";
import CreateQuestion from "./pages/CreateQuestion";
import OrderAnswerGroups from "./pages/OrderAnswerGroups";


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDrKkelBFdGGNnETurK7g30hwUKYrFHY28",
    authDomain: "qual-e-d0417.firebaseapp.com",
    projectId: "qual-e-d0417",
    storageBucket: "qual-e-d0417.appspot.com",
    messagingSenderId: "92401016369",
    appId: "1:92401016369:web:dd6f6459970edd243eff10"
};

const FBapp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(FBapp);

function App() {

    // // Signout function
    // const logout = () => {
    //     auth.signOut();
    // }

    signInAnonymously(auth)
        .then(() => {
            console.log('uid = ' + auth.currentUser.uid);
        })
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    
    // const [user] = useAuthState(auth);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/questions/:questionId/answers/add" component={AddAnswer} />
                    <Route path="/questions/add" component={CreateQuestion} />
                    <Route path="/questions/:questionId/order" component={OrderAnswerGroups} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export { FBapp, db, auth }
export default App;
