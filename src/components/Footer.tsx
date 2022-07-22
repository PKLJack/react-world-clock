import React from "react"
import { ReactComponent as GithubIcon } from "../images/github.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__made-by">
        Made by
        <a href="https://github.com/PKLJack" className="footer__link code">
          <GithubIcon />
          PKLJack
        </a>
      </div>
      <div>
        <a
          className="footer__source code"
          href="https://github.com/PKLJack/react-world-clock"
        >
          view source
        </a>
      </div>
      <div>
        Build with <span className="code footer__build-with">React</span>
      </div>
    </div>
  )
}

export default Footer
