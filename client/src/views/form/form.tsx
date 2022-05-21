import { useEffect, useState } from 'react'
import * as React from 'react'
import axios from 'axios'
const Form = () => {
  const [candidateName, setCandidateName] = useState('gh')
  const [interviewerName, setInterviewerName] = useState('vb')
  const [rating, setRating] = useState('6')

  useEffect(() => {
    setRating('')
  }, [candidateName])
  
  const reset = () => {
    setCandidateName('')
    setInterviewerName('')
    setRating('')
  }


  const sendForm = () => {
      axios.post('http://localhost:8000/forms', {
        candidate: candidateName,
        interviewer: interviewerName,
        rating: parseInt(rating),
      }).then(() => reset());
  }
  return (
          <div style={{ padding: '20px' }}>
                <fieldset>
                  <legend>interviewer's name</legend>
                  <input type="text" placeholder="What are you looking for" onChange={(e) => setInterviewerName(e.target.value)}></input>
                <p>
                  {'The interviewer name you entered is : ' + interviewerName}
                </p>
                </fieldset>
                <fieldset>
                  <legend>Candidate's name</legend>
                  <input type="text" placeholder="What are you looking for" onChange={(e) => setCandidateName(e.target.value)}></input>
                <p>
                  {'The Candidate name you entered is : ' + candidateName}
                </p>
                </fieldset>
                <fieldset>
                  <legend>Score</legend>
                  <input type="text" placeholder="Your rating is" onChange={(e) => setRating(e.target.value)}></input>
                  <button onClick={()=>sendForm()}> search </button>
                <p>
                  {'The name you entered is : ' + rating}
                </p>
                </fieldset>
        </div>
  )
}

export default Form
