import {app} from './configFirebase'

import { collection, addDoc, serverTimestamp , getFirestore} from "firebase/firestore"; 
const db= getFirestore(app)

// Add a new document with a generated id.
  const addSuggestion =  async text =>
        await addDoc(collection(db, "suggestions"), {text, date: serverTimestamp()})



const getAllSuggestion =  () =>  collection(db, 'suggestions')


export {addSuggestion , getAllSuggestion}




