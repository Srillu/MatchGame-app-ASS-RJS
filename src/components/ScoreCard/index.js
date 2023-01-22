import './index.css'

const ScoreCard = props => {
  const {score, playAgainBtn} = props

  const onClickPlayAgain = () => {
    playAgainBtn()
  }

  return (
    <div className="trophy-container">
      <img
        alt="trophy"
        className="trophy-pic"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <p>YOUR SCORE</p>
      <h1 className="score">{score}</h1>
      <button
        type="button"
        onClick={onClickPlayAgain}
        className="play-again-btn"
      >
        <img
          className="reset-btn"
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        />
        Play Again
      </button>
    </div>
  )
}

export default ScoreCard
