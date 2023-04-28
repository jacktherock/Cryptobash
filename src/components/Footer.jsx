import React from 'react'
import "../assets/style.css"

const Footer = () => {

  return (
    <div className="footer" fixed="bottom" >
      <ul className="footer-group">
        <li className='footer-subgroup'>
          <a className='footer-link text-decoration-none' target="_blank" rel="noreferrer" href="https://github.com/jacktherock/Cryptobash"><i className="bi bi-github"></i> GitHub</a>
        </li>
        <li className='footer-subgroup'>
          <a className='footer-link' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abhijeetsss"><i className="bi bi-linkedin"></i> LinkedIn</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer