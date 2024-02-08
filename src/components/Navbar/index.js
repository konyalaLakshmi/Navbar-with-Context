// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, toggleTheme} = value

      const navClass = isDark ? 'navDark' : 'navLight'

      const onToggle = () => {
        toggleTheme()
      }

      const textClass = isDark ? 'textDark' : 'textLight'

      const themeUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const websiteUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      return (
        <nav className={navClass}>
          <img className="logo" alt="website logo" src={websiteUrl} />

          <ul className="ul">
            <li className={`items ${textClass}`}>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className={`items ${textClass}`}>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="theme-btn"
            data-testid="theme"
            onClick={onToggle}
          >
            <img src={themeUrl} alt="theme" className="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
