// Write your code here
// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      if (isDark) {
        return (
          <div className="bg-container-dark">
            <Navbar />
            <div className="c">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                className="img"
                alt="not found"
              />
              <h1>You Lost Your Way?</h1>
              <p>We cannot seem to find the page</p>
            </div>
          </div>
        )
      }
      return (
        <div className="bg-container-white">
          <Navbar />
          <div className="c">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="img"
              alt="not found"
            />
            <h1>You Lost Your Way?</h1>
            <p>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
