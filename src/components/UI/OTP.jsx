import React from 'react'
import "./otp.css";

function OTP() {
  return (
    <>
    <form class="form">
  <div class="content">
    <p align="center">Enter your OTP Code</p>
    <div class="inp">
    <input maxlength="1" class="input" type="text" placeholder=""/>
    <input maxlength="1" class="input" type="text" placeholder=""/> 
    <input maxlength="1" class="input" type="text" placeholder=""/> 
    <input maxlength="1" class="input" type="text" placeholder=""/> 
    <input maxlength="1" class="input" type="text" placeholder=""/> 
    <input maxlength="1" class="input" type="text" placeholder=""/> 
    </div>
    <button>Verify</button>
  </div>
  
</form>
    </>
  )
}

export default OTP
