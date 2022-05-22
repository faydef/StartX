import {  useEffect, useState } from 'react'
import * as React from 'react'
import axios from 'axios'
import DatePicker from 'react-date-picker';
import { useNavigate } from 'react-router-dom';

const Interview = () => {
  const [interviewerName, setInterviewerName] = useState('')
  const [candidateName, setcandidateName] = useState('')
  const [interviewDate, setinterviewDate] = useState(new Date())
  const navigate = useNavigate()
  const reset = () => {
    setcandidateName('')
    setinterviewDate(new Date())
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('name')|| '{}');
    if (items) {
        setInterviewerName(items);
    };
  }, []);

  const sendForm = () => {
      axios.post('http://localhost:8000/interviews', {
        interviewer: interviewerName,
        candidate: candidateName,
        date: interviewDate,
      }).then(() => navigate('/schedule'));
  }
  return (
          <div style={{ padding: '20px' }}>

                <fieldset>
                  <legend>candidate</legend>
                  <input type="text" placeholder="What are you looking for" onChange={(e) => setcandidateName(e.target.value)}></input>
                <p>
                  {'The candidate you entered is : ' + candidateName}
                </p>
                </fieldset>
                <fieldset>
                  <legend>date</legend>
                  <DatePicker onChange={setinterviewDate} value={interviewDate} />
                <button onClick={sendForm}> Sign up </button>
                </fieldset>
        </div>
  )
}

export default Interview
