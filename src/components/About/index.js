// Write your code here

// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      if (isDark) {
        return (
          <div className="bg-container">
            <Navbar />
            <div className="homeDark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                className="img"
                alt="about"
              />
              <h1>About</h1>
            </div>
          </div>
        )
      }
      return (
        <div className="bg-container">
          <Navbar />
          <div className="homeLight">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              className="img"
              alt="about"
            />
            <h1>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
