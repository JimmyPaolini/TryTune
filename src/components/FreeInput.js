import React, { Component } from 'react';
import {PlayTime, Fundamental, Shape} from './Options';
import Sound from '../sound.js';

export default class FreeInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playtime: '3',
      fundamental: '440',
      shape: 'sine',
      value: ''
    }
    this.audio = Sound.getAudioFromTextin(this.state)
  }

  render() {
    this.audio = Sound.getAudioFromTextin(this.state)
    return (
      <div className='flex-container' id='FreeInput'>
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
          <p className='instructions'>
            Add intervals relative to the fundamental by typing ratios (containing a '/') and/or cents (containing a '.') separated by commas below:
          </p>
          <div id="textarea-div">
            <textarea
              defaultValue={this.state.value}
              onChange={(e) => this.setState({value: e.target.value})} >
            </textarea>
          </div>
        </div>

        <div>
          <button className='play' onClick={() => Sound.play(this.audio, this.state.playtime, this.state.shape)}>&#9658;</button>
        </div>
      </div>
    )
  }
}
