import { useEffect, useState } from 'react'
import * as React from 'react'
import axios from 'axios'
import { Rating } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
const Form = () => {
  const search = useLocation().search
  const candidate = new URLSearchParams(search).get('candidate')
  const [candidateName, setCandidateName] = useState(candidate)
  const [interviewerName, setInterviewerName] = useState('')
  const [ratingPC, setRatingPC] = useState(0)
  const [ratingTD, setRatingTD] = useState(0)
  const [ratingEX, setRatingEX] = useState(0)
  const [ratingID, setRatingID] = useState(0)
  const [notePC, setNotePC] = useState('')
  const [noteTD, setNoteTD] = useState('')
  const [noteEX, setNoteEX] = useState('')
  const [noteID, setNoteID] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('name')|| '{}');
    if (items) {
        setInterviewerName(items);
    };
  }, []);

  const handleClick = () => {
    navigate('/candidate/?candidate=' + candidateName)
  }

  const sendForm = () => {
      axios.post('http://localhost:8000/forms', {
        candidate: candidateName,
        interviewer: interviewerName,
        ratingPC: ratingPC,
        ratingTD: ratingTD,
        ratingEX: ratingEX,
        ratingID: ratingID,
        notePC: notePC,
        noteTD: noteTD,
        noteEX: noteEX,
        noteID: noteID
      }).then(() => {navigate('/candidate/?candidate='+candidateName)});
  }
  return (
          <div style={{ padding: '20px' }}>
                <button onClick = {()=>{handleClick()}}>Check other ratings</button>
                <fieldset>
                  <legend>Candidate's name</legend>
                  <textarea  placeholder="Candidate's name" onChange={(e) => setCandidateName(e.target.value)}></textarea>
                <p>
                  {'The Candidate name you entered is : ' + candidateName}
                </p>
                </fieldset>
                <fieldset>
                  <legend>Passion and Commitment</legend>
                  <Rating
                name="simple-controlled"
                value={ratingPC}
                onChange={(event, newValue) => {
                setRatingPC(newValue?newValue:0);
                }}
                />
                  <textarea placeholder="your note" onChange={(e) => setNotePC(e.target.value)}></textarea>
                </fieldset>
                <fieldset>
                  <legend>Team Dynamics</legend>
                  <Rating
                name="simple-controlled"
                value={ratingTD}
                onChange={(event, newValue) => {
                setRatingTD(newValue?newValue:0);
                }}
                />
                  <textarea placeholder="Your note" onChange={(e) => setNoteTD(e.target.value)}></textarea>
                </fieldset>
                <fieldset>
                  <legend>Ability to Execute</legend>
                  <Rating
                name="simple-controlled"
                value={ratingEX}
                onChange={(event, newValue) => {
                setRatingEX(newValue?newValue:0);
                }}
                />
                  <textarea placeholder="Your note" onChange={(e) => setNoteEX(e.target.value)}></textarea>
                </fieldset>
                <fieldset>
                  <legend>Idea</legend>
                  <Rating
                name="simple-controlled"
                value={ratingID}
                onChange={(event, newValue) => {
                setRatingID(newValue?newValue:0);
                }}
                />
                  <textarea placeholder="Your note" onChange={(e) => setNoteID(e.target.value)}></textarea>
                </fieldset>
                <button onClick={()=>sendForm()}> validate </button>
        </div>
  )
}

export default Form
