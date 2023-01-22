import './index.css'

const Header = props => {
  const {score, seconds} = props

  return (
    <div className="header-container">
      <img
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="logo"
      />

      <div className="score-container">
        <p className="seconds-name">
          Score: <span className="seconds">{score}</span>
        </p>

        <div className="timer-container">
          <img
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer-icon"
          />
          <p className="seconds">{seconds} sec</p>
        </div>
      </div>
    </div>
  )
}

export default Header
