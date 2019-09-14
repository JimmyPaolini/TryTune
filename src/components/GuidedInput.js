import React, { Component } from 'react';
import Options from './Options.js';
import Sound from '../sound.js';

class GuidedInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playtime: '3',
      fundamental: '440',
      system: 'tet12',
      shape: 'sine',
      root: '0',
      rootBNS: '0',
      triad: '[4,7]',
      seventh: 'none',
      ninth: 'none',
      eleventh: 'none',
      thirteenth: 'none',
    }
    this.audio = Sound.getAudio(this.state)
    this.chordName = 'I'
  }

  render() {
    this.audio = Sound.getAudio(this.state)
    this.chordName = Sound.getChordName(this.state)
    return (
      <div className='content' id='GuidedInput'>

        <Options.PlayTime
        value={this.state.playtime}
        change={(e) => this.setState({playtime: e.target.value})}/>

        <Options.Fundamental
        value={this.state.fundamental}
        change={(e) => this.setState({fundamental: e.target.value})}/>

        <Options.System
        value={this.state.system}
        change={(e) => this.setState({system: e.target.value})}/>

        <Options.Shape
        value={this.state.shape}
        change={(e) => this.setState({shape: e.target.value})}/>

        <Options.Root
        value={this.state.root} valueBNS={this.state.rootBNS}
        change={(e) => this.setState({root: e.target.value})}
        changeBNS={(e) => this.setState({rootBNS: e.target.value})}/>

        <Options.Triad
        value={this.state.triad}
        change={(e) => this.setState({triad: e.target.value})}/>

        <Options.Seventh
        value={this.state.seventh}
        change={(e) => this.setState({seventh: e.target.value})}/>

        <Options.Ninth
        value={this.state.ninth}
        change={(e) => this.setState({ninth: e.target.value})}/>

        <Options.Eleventh
        value={this.state.eleventh}
        change={(e) => this.setState({eleventh: e.target.value})}/>

        <Options.Thirteenth
        value={this.state.thirteenth}
        change={(e) => this.setState({thirteenth: e.target.value})}/>

        <div>Chord Name: {this.chordName}</div>

        <div><button className='play' onClick={() => Sound.play(this.audio, this.state.playtime, this.state.shape)}>&#9658;</button></div>

      </div>
    )
  }
}

export default GuidedInput;
