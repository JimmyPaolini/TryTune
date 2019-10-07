import React, { Component } from 'react';
import {PlayTime, Fundamental, System, Shape, Root,
Triad, Seventh, Ninth, Eleventh, Thirteenth} from './Options';
import { getAudio, getChordName, play } from '../sound.js';

export default class GuidedInput extends Component {
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
    this.audio = getAudio(this.state)
    this.chordName = getChordName(this.state)
  }

  render() {
    this.audio = getAudio(this.state)
    this.chordName = getChordName(this.state)
    return (
      <div className='page page__guided-input'>

        <PlayTime
        value={this.state.playtime}
        change={(e) => this.setState({playtime: e.target.value})}/>

        <Fundamental
        value={this.state.fundamental}
        change={(e) => this.setState({fundamental: e.target.value})}/>

        <System
        value={this.state.system}
        change={(e) => this.setState({system: e.target.value})}/>

        <Shape
        value={this.state.shape}
        change={(e) => this.setState({shape: e.target.value})}/>

        <Root
        value={this.state.root} valueBNS={this.state.rootBNS}
        change={(e) => this.setState({root: e.target.value})}
        changeBNS={(e) => this.setState({rootBNS: e.target.value})}/>

        <Triad
        value={this.state.triad}
        change={(e) => this.setState({triad: e.target.value})}/>

        <Seventh
        value={this.state.seventh}
        change={(e) => this.setState({seventh: e.target.value})}/>

        <Ninth
        value={this.state.ninth}
        change={(e) => this.setState({ninth: e.target.value})}/>

        <Eleventh
        value={this.state.eleventh}
        change={(e) => this.setState({eleventh: e.target.value})}/>

        <Thirteenth
        value={this.state.thirteenth}
        change={(e) => this.setState({thirteenth: e.target.value})}/>

        <div>
          Chord Name: {this.chordName}
        </div>

        <div>
          <button className='page__play-btn' onClick={() => play(this.audio, this.state.playtime, this.state.shape)}>&#9658;</button>
        </div>

      </div>
    )
  }
}
