import React from 'react'
import './homepage.css'
import {useNavigate} from 'react-router-dom'

export default function Homepage() {

    const navigate = useNavigate()

    const navigateToEvent = () => {
        navigate('/event')
    }
  return (
    <>
        <div className='mainBackground'>
            <div className='main-left'>
                <img src='/Images/homeImage.png' alt='' className='homeImage'/>
            </div>
            <div className='main-right'>
                <div className='rightText'>
                    <span className='firstHeading'>Imagine if</span>
                    <span className='secondHeading'>Snapchat</span>
                    <span className='firstHeading'>had events.</span>
                </div>
                <p className='mainDesc'>Easily host and share events with your friends across any social media.</p>
                <button className='mainButton' onClick={navigateToEvent} >Create my event</button>
            </div>
        </div>
    </>
  )
}
