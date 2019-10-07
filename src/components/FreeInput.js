import React, { Component } from 'react';
import {PlayTime, Fundamental, Shape} from './Options';
import { getAudioFromTextin, play} from '../sound.js';

export default class FreeInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playtime: '3',
      fundamental: '440',
      shape: 'sine',
      textin: ''
    }
    this.audio = getAudioFromTextin(this.state)
  }

  render() {
    this.audio = getAudioFromTextin(this.state)
    return (
      <div className='page page__free-input'>
        <PlayTime
        value={this.state.playtime}
        change={(e) => this.setState({playtime: e.target.value})}/>

        <Fundamental
        value={this.state.fundamental}
        change={(e) => this.setState({fundamental: e.target.value})}/>

        <Shape
        value={this.state.shape}
        change={(e) => this.setState({shape: e.target.value})}/>

        <div>
          <p className='page__instructions'>
            Add intervals relative to the fundamental by typing ratios (containing a '/') and/or cents (containing a '.') separated by commas below:
          </p>
          <div>
            <textarea className='page__textarea'
              defaultValue={this.state.textin}
              onChange={(e) => this.setState({textin: e.target.value})} >
            </textarea>
          </div>
        </div>

        <div>
          <button className='page__play-btn' onClick={() => play(this.audio, this.state.playtime, this.state.shape)}>&#9658;</button>
        </div>
      </div>
    )
  }
}
