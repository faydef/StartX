import axios from 'axios'
import * as React from 'react'
import { useEffect, useState } from 'react'
import InterviewRecap from './interviewRecap'

export interface Interview {
    date: Date,
    interviewer: string,
    candidate: string,
    id: number,
    creationDate: string,
}
const Schedule = () => {
  const [interviewer,setInterviewer]=useState('')
  const aBeforeB = (a: any, b: any): number => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    return aDate > bDate ? 1 : aDate < bDate ? -1 : 0
  }
  const today = new Date()
  const [data2, setData2] = useState<Interview[]>([{ id:1, creationDate:"",date: new Date(2022, 4, 22, 12, 30, 0), interviewer: 'interviewer1', candidate: 'candidate1' }])

  useEffect(() => {
  const items = JSON.parse(localStorage.getItem('name')|| '{}');
  if (items) {
    setInterviewer(items)
  };
    axios.get('http://localhost:8000/interviews/interview/'+items).then(res => {
    const interviews = res.data;
    console.log(interviews)
    setData2(interviews);
    console.log(new Date(2022, 4, 22, 12, 30, 0))
  })
  }, []);

  return (
      <div>
        <p style={{ textAlign: 'center' }}>Interviews of the day</p>
        <div className="listbriefs">
            { data2.length >= 1
              ? data2.sort((a, b) => aBeforeB(a, b)).map((interview: Interview, index: number) => {
                return (today.getDate() === (new Date(interview.date)).getDate() &&
                        today.getMonth() === (new Date(interview.date)).getMonth() &&
                        today.getFullYear() === (new Date(interview.date)).getFullYear() &&
                        <InterviewRecap interviewer={interview.interviewer} data={interview} key={index}/>)
              })
              : <p style={{ textAlign: 'center' }}>No interviews today</p>
            }

        </div>
      </div>
      
  )
}

export default Schedule
