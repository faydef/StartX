import {  useState } from 'react'
import * as React from 'react'
import axios from 'axios'
import DatePicker from 'react-date-picker';

const Interview = () => {
  const [interviewerName, setInterviewerName] = useState('gh')
  const [candidateName, setcandidateName] = useState('vb')
  const [interviewDate, setinterviewDate] = useState(new Date())
  
  const reset = () => {
    setInterviewerName('')
    setcandidateName('')
    setinterviewDate(new Date())
  }

  const sendForm = () => {
      axios.post('http://localhost:8000/interviews', {
        interviewer: interviewerName,
        candidate: candidateName,
        date: interviewDate.toString(),
      }).then(() => reset());
  }
  return (
          <div style={{ padding: '20px' }}>
                <fieldset>
                  <legend>interviwer</legend>
                  <input type="text" placeholder="What are you looking for" onChange={(e) => setInterviewerName(e.target.value)}></input>
                <p>
                  {'The interviewer you entered is : ' + interviewerName}
                </p>
                </fieldset>
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
