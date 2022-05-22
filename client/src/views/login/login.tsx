import { useEffect, useState } from 'react'
import * as React from 'react'

const Login = () => {
  const [candidateName, setCandidateName] = useState('gh')
  const [candidateName2, setCandidateName2] = useState('')

  const sendForm = () => {
    localStorage.setItem('name', JSON.stringify(candidateName))
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('name')|| '{}');
    if (items) {
        setCandidateName2(items);
    };
  }, []);


  return (
          <div style={{ padding: '20px' }}>
                <fieldset>
                  <legend>Candidate's name</legend>
                  <input type="text" placeholder="What are you looking for" onChange={(e) => setCandidateName(e.target.value)}></input>
                  <button onClick={()=>sendForm()}> search </button>
                <p>
                  {'The Candidate name you entered is : ' + candidateName + '   the other' + candidateName2}
                </p>
                </fieldset>
        </div>
  )
}

export default Login
