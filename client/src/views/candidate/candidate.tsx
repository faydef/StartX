import {  useEffect, useState } from 'react'
import * as React from 'react'
import axios from 'axios'

const Candidate = () => {
  const [CandidateName, setCandidateName] = useState('gh')
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8000/forms/?name='+CandidateName).then(res => {
    const ratings = res.data;
    setData({ ratings });
    console.log(ratings)
  })
  }, [CandidateName]);


  return (
        <div style={{ padding: '20px' }}>
            <fieldset>
                  <legend>Candidate name</legend>
                  <input type="text" placeholder="What are you looking for" onChange={(e) => setCandidateName(e.target.value)}></input>
                <p>
                  {'The saved interviewer name is ' + CandidateName}
                </p>
                </fieldset>
            <p>
                hello

            </p>
        </div>
  )
}

export default Candidate
