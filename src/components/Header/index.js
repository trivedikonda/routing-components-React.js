import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <header className="header-container">
    <div className="next-wave-logo">
      <img
        width={20}
        height={20}
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="item-name">Wave</p>
    </div>

    <ul className="list-container">
      <li>
        <Link className="item-name" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="item-name" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="item-name" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
