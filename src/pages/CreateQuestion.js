import React, {Component} from 'react';
import { getFunctions, httpsCallable } from "firebase/functions";
import { FBapp } from '../App';

const functions = getFunctions();
const put = httpsCallable(functions, 'put');
// put({ text: messageText })
//   .then((result) => {
//     // Read result of the Cloud Function.
//     /** @type {any} */
//     const data = result.data;
//     const sanitizedMessage = data.text;
//   });

class CreateQuestion extends Component {

    constructor(props){
        super(props);
        this.FBapp = this.props.FBapp;
    }



    render() {
        return <div>
            <button onClick={}>
            </button>
        </div>
    }
}

export default CreateQuestion;
