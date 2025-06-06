import React from "react";


const moods = [
  {
    name: "Happy",
    color: "#ffe066", 
    message: "You look cheerful!",
    emoji: "😄",
    audio: "/songs/Happy.mp3"
  },
  {
    name: "Angry",
    color: "#ff6b6b", 
    message: "Take a deep breath and stay calm.",
    emoji: "😡",
    audio: "/songs/Angry.mp3"
  },
  {
    name: "Relax",
    color: "#a3d2ca", 
    message: "Enjoy your calm and peace.",
    emoji: "😌",
    audio: "/songs/Relaxing.mp3"
  },
  {
    name: "Sad",
    color: "#74c0fc", 
    message: "It's okay to feel down. Better days are ahead.",
    emoji: "😢",
    audio: "/songs/sad.mp3"
  },
];


const MoodSelector = ({onMoodChange}) => {
    return (
<div className="mood-buttons">
    {moods.map((mood) => (
        <button key={mood.name} style={{backgroundColor:mood.color}} onClick={() => onMoodChange(mood)}>
           {mood.name}
            </button>
    ))}
</div>

    )
}

export default MoodSelector;