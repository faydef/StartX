import {  useEffect, useState } from 'react'
import * as React from 'react'
import axios from 'axios'
import { Rating, Typography } from '@mui/material'
import jsPDF from 'jspdf'
import { useLocation } from 'react-router-dom'


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
    const search = useLocation().search
    const candidate = new URLSearchParams(search).get('candidate')
  const [CandidateName, setCandidateName] = useState(candidate)
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


  var meanPC = 0
  var meanID = 0
  var meanTD = 0
  var meanEX = 0
  var feed =''

  const generatePdf = () => {
    data.map((interview, index: number) => {
    meanEX +=interview.ratingEX/data.length
    meanPC +=interview.ratingPC/data.length
    meanTD +=interview.ratingTD/data.length
    meanID +=interview.ratingID/data.length
    feed += interview.noteEX+ '\n'
    feed += interview.noteTD+ '\n'
    feed += interview.noteID+ '\n'
    feed += interview.notePC+ '\n'})
    var doc = new jsPDF('p', 'pt');
    doc.text( 'Score',20, 20)
    doc.setFont('helvetica')
    doc.text('meanPC: '+ meanPC+'/5',20, 60)
    doc.text('meanID: '+ meanID+'/5',20, 80)
    doc.text('meanTD: '+ meanTD+'/5',20, 100)
    doc.text('meanEX: '+ meanEX+'/5',20, 120)
    doc.addPage()
    doc.text( 'Feedback',20, 20)
    doc.setFont('helvetica')
    doc.text( feed,20, 100)
    doc.save('Result_'+CandidateName+'.pdf')
    }

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
            <button onClick={()=>{generatePdf()}}>Download pdf</button>
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
                            <Typography component="legend">comment EX</Typography>
                            <Rating name="read-only" value={interview.ratingEX} readOnly />
                            <p>comments :{interview.noteEX}</p>
                            <Typography component="legend">comment PC</Typography>
                            <Rating name="read-only" value={interview.ratingPC} readOnly />
                            <p>comments :{interview.notePC}</p>
                            <Typography component="legend">comment TD</Typography>
                            <Rating name="read-only" value={interview.ratingTD} readOnly />
                            <p>comments :{interview.noteTD}</p>
                            <Typography component="legend">comment ID</Typography>
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
