import * as React from 'react'
import {
  useNavigate
} from 'react-router-dom'
import './navBar.css'
import Logo from './../../static/logo_startX.jpg'

const NavBar = () => {
  const navigate = useNavigate()
  const handleNavigation = (to: string) => {
    navigate('/' + to)
  }

  return (
    <nav className="navbar">
      <div style={{ display: 'inline-flex', width: '100%' }}>
        <img className="logo" alt="StartX Logo" src={Logo} />

        <ul className="left">
            <div>
                <li onClick={() => handleNavigation('form')}> Evaluate a Candidate </li>
                <li onClick={() => handleNavigation('user')}> Add an interviewer </li>
            </div>
        </ul>
      </div>

    </nav>

  )
}

export default NavBar