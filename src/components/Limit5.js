import React, { Component } from 'react';
import { play } from '../sound.js'

let lim5 = [
  ['256/225', '128/75', '32/25', '48/25', '36/25'],
  ['64/45', '16/15', '8/5', '6/5', '9/5'],
  ['16/9', '4/3', '1/1', '3/2', '9/8'],
  ['10/9', '5/3', '5/4', '15/8', '45/32'],
  ['50/36', '50/48', '25/16', '75/64', '225/128']
]

/*for (let i = -2; i < 3; i++) {
  lim5.push([])
  for (let j = -2; j < 3; j++) {
    lim5[i+2].push(norm())
  }
}


for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    if (i === 0) {
      if (j === 0) {

      }
    }
  }
}*/

export default class Limit5 extends Component {
  /*constructor(props) {
    super(props)
  }*/

  playInterval(e) {
    const fraction = e.target.innerHTML
    const [numerator, denominator] = fraction.split('/')
    if (numerator === denominator) play([440], '3', 'sine')
    else play([440, 440 * numerator / denominator], '3', 'sine')
  }

  render() {
    return (
      <div className='page'>
        <div className='page__5-limit'>
          <div className='page__5-limit--empty'></div>
          <div className='page__5-limit--number-top'>1/9</div>
          <div className='page__5-limit--number-top'>1/3</div>
          <div className='page__5-limit--number-top'>1</div>
          <div className='page__5-limit--number-top'>3</div>
          <div className='page__5-limit--number-top'>9</div>

          <div className='page__5-limit--number-left'>1/25</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[0][0]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[0][1]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[0][2]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[0][3]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[0][4]}</div>

          <div className='page__5-limit--number-left'>1/5</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[1][0]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[1][1]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[1][2]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[1][3]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[1][4]}</div>

          <div className='page__5-limit--number-left'>1</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[2][0]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[2][1]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[2][2]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[2][3]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[2][4]}</div>

          <div className='page__5-limit--number-left'>5</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[3][0]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[3][1]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[3][2]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[3][3]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[3][4]}</div>

          <div className='page__5-limit--number-left'>25</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[4][0]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[4][1]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[4][2]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[4][3]}</div>
          <div className='page__5-limit--button'
          onClick={(e) => this.playInterval(e)}>{lim5[4][4]}</div>
        </div>
      </div>
    )
  }
}
