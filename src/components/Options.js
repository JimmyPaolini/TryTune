import React, { Component } from 'react'
import Trytune from './trytune.js'

class Options extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playtime: '5',
      fundamental: '440',
      shape: 'sine',
      root: '0',
      rootBNS: '0',
      triad: '[4,7]',
      seventh: 'none',
      ninth: 'none',
      eleventh: 'none',
      thirteenth: 'none',
      audio: null
    }
    this.changePlayTime = this.changePlayTime.bind(this);
    this.changeFundamental = this.changeFundamental.bind(this);
    this.changeShape = this.changeShape.bind(this);
    this.changeRoot = this.changeRoot.bind(this);
    this.changeRootBNS = this.changeRootBNS.bind(this);
    this.changeTriad = this.changeTriad.bind(this);
    this.changeSeventh = this.changeSeventh.bind(this);
    this.changeNinth = this.changeNinth.bind(this);
    this.changeEleventh = this.changeEleventh.bind(this);
    this.changeThirteenth = this.changeThirteenth.bind(this);
  }

  componentDidMount() {
    this.setState({audio: Trytune.getAudio})
  }

  changePlayTime(e) {
    let opts = this.state
    opts.playtime = e.target.value
    let audio = Trytune.getAudio(opts)
    this.setState({
      playtime: e.target.value,
      audio: audio
    })
    console.log(this.state.audio)
  }
  changeFundamental(e) {
    let opts = this.state
    opts.fundamental = e.target.value
    let audio = Trytune.getAudio(opts)
    this.setState({
      fundamental: e.target.value,
      audio: audio
    })
    console.log(this.state.audio)
  }
  changeShape(e) {
    let opts = this.state
    opts.shape = e.target.value
    let audio = Trytune.getAudio(opts)
    this.setState({
      shape: e.target.value,
      audio: audio
    })
    console.log(this.state.audio)
  }
  changeRoot(e) {
    let opts = this.state
    opts.root = e.target.value
    let audio = Trytune.getAudio(opts)
    this.setState({
      root: e.target.value,
      audio: audio
    })
    console.log(this.state.audio)
  }
  changeRootBNS(e) {
    let opts = this.state
    opts.rootBNS = e.target.value
    let audio = Trytune.getAudio(opts)
    this.setState({
      rootBNS: e.target.value,
      audio: audio
    })
    console.log(this.state.audio)
  }
  changeTriad(e) {
    let opts = this.state
    opts.triad = e.target.value
    let audio = Trytune.getAudio(opts)
    this.setState({
      triad: e.target.value,
      audio: audio
    })
    console.log(this.state.audio)
  }
  changeSeventh(e) {
    let opts = this.state
    opts.seventh = e.target.value
    let audio = Trytune.getAudio(opts)
    this.setState({
      seventh: e.target.value,
      audio: audio
    })
    console.log(this.state.audio)
  }
  changeNinth(e) {
    let opts = this.state
    opts.ninth = e.target.value
    let audio = Trytune.getAudio(opts)
    this.setState({
      ninth: e.target.value,
      audio: audio
    })
    console.log(this.state.audio)
  }
  changeEleventh(e) {
    let opts = this.state
    opts.eleventh = e.target.value
    let audio = Trytune.getAudio(opts)
    this.setState({
      eleventh: e.target.value,
      audio: audio
    })
    console.log(this.state.audio)
  }
  changeThirteenth(e) {
    let opts = this.state
    opts.thirteenth = e.target.value
    let audio = Trytune.getAudio(opts)
    this.setState({
      thirteenth: e.target.value,
      audio: audio
    })
    console.log(this.state.audio)
  }

  render() {
    return (
      <div>
        <PlayTime
        value={this.state.playtime}
        change={this.changePlayTime}
        />
        <br/>
        <Fundamental
        value={this.state.fundamental}
        change={this.changeFundamental}
        />
        <br/>
        <Shape
        value={this.state.shape}
        change={this.changeShape}
        />
        <br/>
        <Root
        value={this.state.root}
        change={this.changeRoot}
        />
        <RootBNS
        value={this.state.rootBNS}
        change={this.changeRootBNS}
        />
        <br/>
        <Triad
        value={this.state.triad}
        change={this.changeTriad}
        />
        <br/>
        <Seventh
        value={this.state.seventh}
        change={this.changeSeventh}
        />
        <br/>
        <Ninth
        value={this.state.ninth}
        change={this.changeNinth}
        />
        <br/>
        <Eleventh
        value={this.state.eleventh}
        change={this.changeEleventh}
        />
        <br/>
        <Thirteenth
        value={this.state.thirteenth}
        change={this.changeThirteenth}
        />
        <br/>
        <div onClick={() => console.log(this.state)}>Log State</div>
        <br/>
        <button onClick={() => Trytune.play(this.state.audio, this.state.playtime, this.state.shape)}>Play</button>
      </div>
    )
  }
}

function PlayTime(props) {
  return (
    <div>
    Play Time (s):
    <input type="text" name="PlayTime"
    defaultValue={props.value} onChange={props.change}/>
    </div>
  )
}

function Fundamental(props) {
  return (
    <div>
    Fundamental (Hz):
    <input type="text" name="Fundamental"
    defaultValue={props.value} onChange={props.change}/>
    </div>
  )
}

function Shape(props) {
  return (
    <div>
    Shape:
    <select defaultValue={props.value} onChange={props.change}>
      <option value='sine'>sine</option>
      <option value='triangle'>triangle</option>
      <option value='saw'>saw</option>
      <option value='square'>square</option>
    </select>
    </div>
  )
}

function Root(props) {
  return (
    <div>
    Root:
    <select defaultValue={props.value} onChange={props.change}>
      <option value='0'>I</option>
      <option value='2'>II</option>
      <option value='4'>III</option>
      <option value='5'>IV</option>
      <option value='7'>V</option>
      <option value='9'>VI</option>
      <option value='11'>VII</option>
    </select>
    </div>
  )
}

function RootBNS(props) {
  return (
    <div>
      BNS:
      <label>b
        <input type="radio" value='-1'
        checked={props.value === '-1'}
        onChange={props.change}/>
      </label>
      <label>n
        <input type="radio" value='0'
        checked={props.value === '0'}
        onChange={props.change}/>
      </label>
      <label>s
        <input type="radio" value='1'
        checked={props.value === '1'}
        onChange={props.change}/>
      </label>
    </div>
  )
}

function Triad(props) {
  return (
    <div>
      Triad:
      <select defaultValue={props.value} onChange={props.change}>
        <option value='[4,7]'>Major</option>
        <option value='[3,7]'>Minor</option>
        <option value='[4,8]'>Augmented</option>
        <option value='[3,6]'>Diminished</option>
        <option value='[5,7]'>Sus4</option>
        <option value='[2,7]'>Sus2</option>
      </select>
    </div>
  )
}

function Seventh(props) {
  return (
    <div>
      Seventh:
      <label>none
        <input type='radio' value='none'
        checked={props.value === 'none'}
        onChange={props.change}/>
      </label>
      <label>dim
        <input type='radio' value='9'
        checked={props.value === '9'}
        onChange={props.change}/>
      </label>
      <label>min
        <input type='radio' value='10'
        checked={props.value === '10'}
        onChange={props.change}/>
      </label>
      <label>maj
        <input type='radio' value='11'
        checked={props.value === '11'}
        onChange={props.change}/>
      </label>
    </div>
  )
}

function Ninth(props) {
  return (
    <div>
      Ninth:
      <label>none
        <input type='radio' value='none'
        checked={props.value === 'none'}
        onChange={props.change}/>
      </label>
      <label>b
        <input type='radio' value='13'
        checked={props.value === '13'}
        onChange={props.change}/>
      </label>
      <label>n
        <input type='radio' value='14'
        checked={props.value === '14'}
        onChange={props.change}/>
      </label>
      <label>s
        <input type='radio' value='15'
        checked={props.value === '15'}
        onChange={props.change}/>
      </label>
    </div>
  )
}

function Eleventh(props) {
  return (
    <div>
      Eleventh:
      <label>none
        <input type='radio' value='none'
        checked={props.value === 'none'}
        onChange={props.change}/>
      </label>
      <label>n
        <input type='radio' value='17'
        checked={props.value === '17'}
        onChange={props.change}/>
      </label>
      <label>s
        <input type='radio' value='8'
        checked={props.value === '8'}
        onChange={props.change}/>
      </label>
    </div>
  )
}

function Thirteenth(props) {
  return (
    <div>
      Thirteenth:
      <label>none
        <input type='radio' value='none'
        checked={props.value === 'none'}
        onChange={props.change}/>
      </label>
      <label>b
        <input type='radio' value='20'
        checked={props.value === '20'}
        onChange={props.change}/>
      </label>
      <label>n
        <input type='radio' value='21'
        checked={props.value === '21'}
        onChange={props.change}/>
      </label>
      <label>s
        <input type='radio' value='22'
        checked={props.value === '22'}
        onChange={props.change}/>
      </label>
    </div>
  )
}

export default Options;
