import { useEffect, useRef, useState } from 'react'
import './App.css'
import MoodSelector from './components/MoodSelector'

function App() {
  const [mood,setMood] = useState(null);
  const audioRef = useRef(null);

  useEffect (() =>{
    if(mood && audioRef.current){
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play();    }
  },[mood]);
  return (
    <div className="app" style={{backgroundColor:mood ? mood.color: "#f1f3f5"}}>
<h1>
  Mood Based App
</h1>


<MoodSelector onMoodChange={setMood}/>
{mood && (
  <>
  <p className='emoji' style={{ fontSize: "3rem", margin: "10px" }}>{mood.emoji}</p>
  <p className='message'>{mood.message}</p>
  <audio ref={audioRef} controls style={{marginTop : "20px"}}>
    <source src={mood.audio} type='audio/mp3'/>
    Your browser does nor suppoet the audio element
  </audio>
  
  </>
)}
    </div>
  )
}
   

export default App;
