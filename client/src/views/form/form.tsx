import { useEffect, useState } from 'react'
import * as React from 'react'

const Form = () => {
  const [candidateName, setCandidateName] = useState('')
  const [interviewerName, setInterviewerName] = useState('')
  const [rating, setRating] = useState('')

  useEffect(() => {
    setRating('')
  }, [candidateName])

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
                <p>
                  {'The name you entered is : ' + rating}
                </p>
                </fieldset>
        </div>
  )
}

export default Form
