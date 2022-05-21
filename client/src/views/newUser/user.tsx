import { useEffect, useState } from 'react'
import * as React from 'react'
import axios from 'axios'
const User = () => {
  const [interviewerName, setInterviewerName] = useState('gh')
  const [interviewerMail, setInterviewerMail] = useState('vb')
  
  const reset = () => {
    setInterviewerName('')
    setInterviewerMail('')
  }


  const sendForm = () => {
      axios.post('http://localhost:8000/interviewers', {
        name: interviewerName,
        email: interviewerMail,
      }).then(() => reset());
  }
  return (
          <div style={{ padding: '20px' }}>
                <fieldset>
                  <legend>interviewer's name</legend>
                  <input type="text" placeholder="What are you looking for" onChange={(e) => setInterviewerName(e.target.value)}></input>
                <p>
                  {'The username you entered is : ' + interviewerName}
                </p>
                </fieldset>
                <fieldset>
                  <legend>Candidate's name</legend>
                  <input type="text" placeholder="What are you looking for" onChange={(e) => setInterviewerMail(e.target.value)}></input>
                <button onClick={sendForm}> Sign up </button>
                <p>
                  {'The email you entered is : ' + interviewerMail}
                </p>
                </fieldset>
        </div>
  )
}

export default User
