import {  useEffect, useState } from 'react'
import * as React from 'react'
import axios from 'axios'
import { Rating, Typography } from '@mui/material'

export interface FeedBack {
    id: number,
    creationDate: string,
    interviewer: string,
    candidate: string,
    ratingPC: number,
    ratingTD: number,
    ratingEX: number,
    ratingID: number,
    notePC: string,
    noteTD: string,
    noteEX: string,
    noteID: string
  }

const Candidate = () => {
  const [CandidateName, setCandidateName] = useState('gh')
  const [data, setData] = useState<FeedBack[]>([{
    id: 1,
    creationDate: "",
    interviewer: 'string',
    candidate: 'string',
    ratingPC: -1,
    ratingTD: -1,
    ratingEX: -1,
    ratingID: -1,
    notePC: 'string',
    noteTD: 'string',
    noteEX: 'string',
    noteID: 'string'
  }])


  useEffect(() => {
    const interval = setInterval(() => {
    axios.get('http://localhost:8000/forms/candidate/'+CandidateName).then(res => {
    const ratings = res.data;
    setData(ratings);
  })
    }, 500) 
    return () => clearInterval(interval)
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
                { data.length >= 1
              ? data.map((interview, index: number) => {
                return (
                    <fieldset key={index}>
                        <legend>interviewer: {interview.interviewer}</legend>
                        <Typography component="legend">noteEX</Typography>
                        <Rating name="read-only" value={interview.ratingEX} readOnly />
                        <p>comments :{interview.noteEX}</p>
                        <Typography component="legend">noteEX</Typography>
                        <Rating name="read-only" value={interview.ratingPC} readOnly />
                        <p>comments :{interview.notePC}</p>
                        <Typography component="legend">noteEX</Typography>
                        <Rating name="read-only" value={interview.ratingTD} readOnly />
                        <p>comments :{interview.noteTD}</p>
                        <Typography component="legend">noteEX</Typography>
                        <Rating name="read-only" value={interview.ratingID} readOnly />
                        <p>comments :{interview.noteID}</p>
                    </fieldset>
              )})
              : <p style={{ textAlign: 'center' }}>No interviews today</p>
            }
        </div>
  )
}

export default Candidate
