import axios from 'axios'
import * as React from 'react'
import { useEffect, useState } from 'react'
import InterviewRecap from './interviewRecap'

export interface Interview {
    date: Date,
    interviewer: string,
    candidate: string
}
const Schedule = () => {
  const aBeforeB = (a: any, b: any): number => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    return aDate > bDate ? 1 : aDate < bDate ? -1 : 0
  }
  const today = new Date()
  const [data2, setData2] = useState({})
  const data = [
    { date: new Date(2022, 5, 22, 12, 30, 0), interviewer: 'interviewer1', candidate: 'candidate1' },
    { date: new Date(2022, 5, 22, 11, 0, 0), interviewer: 'interviewer1', candidate: 'candidate2' }]

  useEffect(() => {
    axios.get('http://localhost:8000/interviews').then(res => {
    const interviews = res.data;
    setData2({ interviews });
  })
  }, []);

  return (
      <div>
        <p style={{ textAlign: 'center' }}>Interviews of the day</p>
        <div className="listbriefs">
            { data.length >= 1
              ? data.sort((a, b) => aBeforeB(a, b)).map((interview: Interview, index: number) => {
                return (today.getDate() === interview.date.getDate() &&
                        today.getMonth() === interview.date.getMonth() &&
                        today.getFullYear() === interview.date.getFullYear() &&
                        <InterviewRecap interviewer={interview.interviewer} data={interview} key={index}/>)
              })
              : <p style={{ textAlign: 'center' }}>No interviews today</p>
            }

        </div>
      </div>
      
  )
}

export default Schedule
