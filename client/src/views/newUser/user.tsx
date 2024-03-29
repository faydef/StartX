import { useEffect, useState } from 'react'
import * as React from 'react'
import axios from 'axios'
const User = () => {
  const [interviewerName, setInterviewerName] = useState('gh')
  const [interviewerMail, setInterviewerMail] = useState('vb')
  const [interviewerRole, setInterviewerRole] = useState('interviewer')
  
  const reset = () => {
    setInterviewerName('')
    setInterviewerMail('')
    setInterviewerRole('')
  }


  const sendForm = () => {
      axios.post('http://localhost:8000/users', {
        name: interviewerName,
        email: interviewerMail,
        role: interviewerRole,
      }).then(() => reset());
  }
  return (
          <div style={{ padding: '20px' }}>
                <fieldset>
                  <legend>user's name</legend>
                  <textarea placeholder="What are you looking for" onChange={(e) => setInterviewerName(e.target.value)}></textarea>
                </fieldset>
                <fieldset>
                  <legend>user's role</legend>
                  <textarea placeholder="What are you looking for" onChange={(e) => setInterviewerRole(e.target.value)}></textarea>
                <p>
                  {'The username you entered is : ' + interviewerRole}
                </p>
                </fieldset>
                <fieldset>
                  <legend>user's email</legend>
                  <textarea placeholder="What are you looking for" onChange={(e) => setInterviewerMail(e.target.value)}></textarea>
                <button onClick={sendForm}> Sign up </button>
                <p>
                  {'The email you entered is : ' + interviewerMail}
                </p>
                </fieldset>
        </div>
  )
}

export default User
