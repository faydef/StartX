import { FunctionComponent, useState } from 'react'
import * as React from 'react'
import './interviewRecap.css'
import { Interview } from './schedule'
import { useNavigate } from 'react-router-dom';

interface InterviewProps {
  interviewer: string;
  data: Interview;
}

const InterviewRecap: FunctionComponent<InterviewProps> = ({
  interviewer,
  data
}) => {
  const [isHovered, setIsHovered] = useState('not-hovered')
  const navigate = useNavigate()

  const handleMouseOver = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsHovered('hovered')
  }

  const handleMouseOut = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsHovered('not-hovered')
  }

  const handleClick = () => {
    navigate('/form/?candidate=' + data.candidate)
  }

  return (
    <div
    className='hovering-action'
    onMouseOver={(event) => handleMouseOver(event)}
    onMouseOut={(event) => handleMouseOut(event)}
    onClick={() => handleClick()}
  >
    <div className={`margedContainer ${isHovered}`}>
    <p className="follow-button">Review &gt;&gt;&gt;</p>
        <div className='containerInterview'>
        <h3 className="properties title">{data.candidate}</h3>
        <div className="horizontal-align">
          <div className="wrapperProp">
            <div className="date properties">
              {data.date.toString()}
            </div>
            <p className="properties description">candidate: {data.candidate}</p>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default InterviewRecap
