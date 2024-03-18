import React from 'react'
import './home.css';

function home() {
  console.log("home");
  return (
    <div id="home">
      <div id="cover">
        <div className='container padding-top60'>
          <div id="theme-comp">Dream Mill Corp.</div>
          <div id="theme-mobile">2023學術研討會<div>&</div>田間機器人競賽</div>
          <div id="information">CEO: 陳榮治</div>
          <div id="information">單位:國立陽明交通大學</div>
        </div>
      </div>
    </div>
  )
}



export default home