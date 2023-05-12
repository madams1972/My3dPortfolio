import React from 'react'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import '../styles/frame.scss'

const Frame = () => {
  return (
    <div className="frame">
      <div className="frame__copyright">
        ©2023 — Malissa Adams. All rights reserved.
      </div>
      <div className="frame__instructions">
        Explore! Interact with the objects on the screen&apos;s <b>File</b> menu
        and <b>objects on the desk</b>.
      </div>
      <div className="frame__links">
        <a
          href="https://github.com/madams1972"
          target="_blank"
          rel="noreferrer"
        >
          <FaExternalLinkSquareAlt size={18} />
          <img src="/images/logos/github-logo.png" height="18px" />
        </a>
      </div>
    </div>
  )
}

export default Frame


