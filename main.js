import { onSnapshot } from 'firebase/firestore'
import { addSuggestion, getAllSuggestion } from './src/suggestionsFirebase'
import './style.css'



document.querySelector('.form').addEventListener('submit',saveSuggestion)

function saveSuggestion(event){
  event.preventDefault()
  const text= document.querySelector('#text').value
  addSuggestion(text)
}


onSnapshot(getAllSuggestion() , dataArriving)

function dataArriving(snapshot){
  const data = snapshot.docs.map(
    suggestion => `- ${suggestion.data().text}`).join('<br/>')
  
  document.querySelector('#list').innerHTML = data



}