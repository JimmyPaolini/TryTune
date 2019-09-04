import React, { Component } from 'react';
import Options from './Options.js'
import Sound from './sound.js';

class FreeInput extends Component {
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
      <div>
        <Options.PlayTime
        value={this.state.playtime}
        change={(e) => this.setState({playtime: e.target.value})}/>
        <Options.Fundamental
        value={this.state.fundamental}
        change={(e) => this.setState({fundamental: e.target.value})}/>
        <Options.Shape
        value={this.state.shape}
        change={(e) => this.setState({shape: e.target.value})}/>
        Input ratios (containing a '/') and/or cents (containing a '.') separated by commas to add intervals relative to the fundamental:
        <textarea
          defaultValue={this.state.value}
          onChange={(e) => this.setState({value: e.target.value})}>
        </textarea>
        <button onClick={() => Sound.play(this.audio, this.state.playtime, this.state.shape)}>Play</button>
      </div>
    )
  }
}

export default FreeInput;
