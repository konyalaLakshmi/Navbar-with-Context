// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      if (isDark) {
        return (
          <div className="bg-container">
            <Navbar />
            <div className="homeDark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                className="img"
                alt="home"
              />
              <h1>Home</h1>
            </div>
          </div>
        )
      }
      return (
        <div className="bg-container">
          <Navbar />
          <div className="homeLight">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              className="img"
              alt="home"
            />
            <h1>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
