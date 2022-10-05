import React from 'react'
import './eventpage.css'
import {BsCalendar4Event} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'

export default function Eventpage() {
  return (
    <>
        <div className='mainEvent'>
            <div className='eventLeft'>
                <h1 className='eventHeading'>Birthday Bash</h1>
                <p className='eventDesc'>Hosted by <span className='eventPerson'>Elysia</span></p>

                <div className='eventDiv'>
                    <BsCalendar4Event/>
                    <div className='eventDate'>
                        <h2 className='firstDate'>18 August 6:00PM</h2>
                        <h2 className='lastDate'>19 August 1:00PM UTC+10</h2>
                    </div>
                </div>

                <div className='eventAddress'>
                    <GoLocation className='go'/>
                    <div className='address'>
                        <h3 className='streeHeading'>Street name</h3>
                        <h3 className='streeName'>Lucknow, India, 226023</h3>
                    </div>
                </div>
            </div>
            <div className='eventRight'>
                <img src='/Images/eventImage.png' className='eventImage' alt=''/>
            </div>
        </div>
    </>
  )
}
