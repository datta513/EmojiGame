// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {pre, onc} = props
  const imgurl =
    pre < 12
      ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const text = pre < 12 ? 'You Lose' : 'You Won'
  const alty = 'win or lose'
  const rep = () => {
    onc()
  }
  return (
    <div className="ima">
      <div className="out">
        <div className="fo">
          <h1>{text}</h1>
          <p>Score</p>
          <p>{pre}/12</p>
          <button type="button" onClick={rep}>
            Play Again
          </button>
        </div>
        <img src={imgurl} alt={alty} />
      </div>
    </div>
  )
}
export default WinOrLoseCard
