import React from 'react'
import './Intro.css'
export default function Intro() {
  return (
    <div className='introCotent'>
        <h1>Security Ownership</h1>
        <div className='urlContent'>
            <button className='btnGet'>GET</button>
            <span>https://api.fintel.io/web/v/0.0/so/</span>
            <p>Retrieves a list of institutions and funds reporting positions in a security.</p>
            <br/>
        </div>
    </div>
  )
}
