import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const put = functions.https.onCall((data,context) => {
    console.log(data);
});
