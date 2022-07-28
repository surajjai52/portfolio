import React from 'react'
import Typical from 'react-typical'
import "./Profile.css";
 
export default function 
() {
  return (
    <div className='profile-container'>
    <div className='profile-parent'>
          <div className='profile-details'>
            <div className='colz'>
            <div className='cloz-icon'>

             <a href='https://www.facebook.com/'>
                <i className='fa fa-facebook-square'>
                </i>
             </a>
             <a href='https://www.google.com/'>
                <i className='fa fa-google-plus-square'>
                </i>
             </a>
             <a href='https://www.instagram.com/'>
                <i className='fa fa-instagram'>
                </i>
             </a>
             <a href='https://www.youtube.com/'>
                <i className='fa fa-youtube'>
                </i>
             </a>
             <a href='https://twitter.com/?lang=en'>
                <i className='fa fa-twitter'>
                </i>
             </a>
            </div>
            
            </div>
            <div className="profile-detail-name">
                <span className="primary-text">
                {"  "}
                Hello, I'M SURAJ</span>
                
                </div>

            <div className='profile-detail-role'>
                <span className='primary-text'>
                {"  "}
                <h1>
                    {" "}
                    <Typical
                    loop={Infinity}
                    steps={[
                        "I am a SOFTWARE ENGINEER",
                        1000,
                        "I work at BYJUS💻 ",
                        1000,
                        "I love TABLE TEnnis 🏓",
                        1000,
                        "I Studied at NIT ALLAHABAD 🧑🏼‍🎓",
                        1000,

                    ] }
                    />
                </h1>
                    <span className='profile-role-tagline'>
                        Knack of bulifing application with front end operation REACT..
                    </span>
                </span>
            </div>
            <div className='profile-option'>
                <button className='btn primary-btn'>
            {" "}
            Hire Me{" "}
            </button>
            <a href='SURAJ.pdf' download='Suraj SURAJ.pdf'>
            <button className='btn highlighted-btn'>Get Resume</button>
            </a>
            </div>
             </div>
             <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
             </div>
          </div>
      </div>
  )
}
