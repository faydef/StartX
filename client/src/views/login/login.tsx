import { useEffect, useState } from 'react'
import * as React from 'react'

const Login = () => {
  const [interviewerName, setInterviewerName] = useState('gh')
  const [interviewerName2, setInterviewerName2] = useState('')

  const sendForm = () => {
    localStorage.setItem('name', JSON.stringify(interviewerName))
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('name')|| '{}');
    if (items) {
        setInterviewerName2(items);
    };
  }, []);


  return (
          <div style={{ padding: '20px' }}>
                <fieldset>
                  <legend>Interviewer's name</legend>
                  <input type="text" placeholder="What are you looking for" onChange={(e) => setInterviewerName(e.target.value)}></input>
                  <button onClick={()=>sendForm()}> search </button>
                <p>
                  {'The saved interviewer name is ' + interviewerName2}
                </p>
                </fieldset>
        </div>
  )
}

export default Login
