/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

export default class EmojiGame extends Component {
  state = {prevc: [], pres: 0, heigh: 0, flag: 0}

  scorec = id => {
    const {prevc, heigh, pres} = this.state
    if (prevc.includes(id) || pres > 11) {
      this.setState(prev => ({flag: 1}))
    } else {
      this.setState(prev => ({prevc: [...prev.prevc, id], pres: prev.pres + 1}))
    }
  }

  replay = () => {
    const {pres, heigh} = this.state
    const hih = pres > heigh ? pres : heigh

    this.setState(prev => ({prevc: [], pres: 0, flag: 0, heigh: hih}))
  }

  render() {
    const {prevc, flag, pres, heigh} = this.state
    console.log(prevc)
    console.log(flag)
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const k = shuffledEmojisList()

    console.log('image shuffled')
    return (
      <div className="main">
        <NavBar presscore={pres} hi={heigh} sc={flag} />
        <div className="cont">
          <ul className="lis">
            {pres < 12 && flag === 0 ? (
              k.map(each => (
                <EmojiCard item={each} key={each.id} onc={this.scorec} />
              ))
            ) : (
              <WinOrLoseCard pre={pres} onc={this.replay} />
            )}
          </ul>
        </div>
      </div>
    )
  }
}
