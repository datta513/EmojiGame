// Write your code here.
import './index.css'

const NavBar = props => {
  const {hi, presscore, sc} = props
  return (
    <div className="disp">
      <div className="const">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {presscore === 12 || sc === 1 ? (
        ''
      ) : (
        <div className="const">
          <p>Score: {presscore} </p>
          <p>Top Score: {hi}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
