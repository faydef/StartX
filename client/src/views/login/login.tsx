import { useEffect, useState } from 'react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [interviewerName, setInterviewerName] = useState('gh')
  const [interviewerName2, setInterviewerName2] = useState('')
  const navigate = useNavigate()
  const sendForm = () => {
    localStorage.setItem('name', JSON.stringify(interviewerName))
    navigate('/schedule')
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
                  <legend>Inter your Interviewer Name</legend>
                  <input type="text" placeholder="What are you looking for" onChange={(e) => setInterviewerName(e.target.value)}></input>
                  <button onClick={()=>sendForm()}> Login </button>
                <p>
                  {interviewerName2.toString()!=='[object Object]'?'The saved interviewer name is ' + interviewerName2:'' }
                </p>
                </fieldset>
        </div>
  )
}

export default Login
