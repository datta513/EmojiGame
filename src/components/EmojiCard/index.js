// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {item, onc} = props
  const {emojiUrl, emojiName, id} = item
  const check = () => {
    onc(id)
  }

  return (
    <li className="style">
      <button onClick={check} type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
