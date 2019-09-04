import React from 'react'

let Options = {
  PlayTime: function(props) {
    return (
      <div>
      Play Time (s):
      <input type="text" name="PlayTime"
      defaultValue={props.value} onChange={props.change}/>
      </div>
    )
  },

  Fundamental: function(props) {
    return (
      <div>
      Fundamental (Hz):
      <input type="text" name="Fundamental"
      defaultValue={props.value} onChange={props.change}/>
      </div>
    )
  },

  System: function(props) {
    return (
      <div>
      System:
      <select defaultValue={props.value} onChange={props.change}>
        <option value='tet12'>12-Tone Equal Temperment</option>
        <option value='just'>Just Intonation</option>
        <option value='pythag'>Pythagorean (3-Limit)</option>
        <option value='lim5'>5-Limit</option>
        <option value='lim7'>7-Limit</option>
        <option value='mt_1/4'>1/4-Comma Meantone</option>
        <option value='mt_1/3'>1/3-Comma Meantone</option>
        <option value='mt_2/7'>2/7-Comma Meantone</option>
        <option value='mt_1/5'>1/5-Comma Meantone</option>
      </select>
      </div>
    )
  },

  Shape: function(props) {
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
  },

  Root: function(props) {
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
  },

  RootBNS: function(props) {
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
  },

  Triad: function(props) {
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
          <option value='[4,6]'>b5</option>
        </select>
      </div>
    )
  },

  Seventh: function(props) {
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
  },

  Ninth: function(props) {
    return (
      <div>
        Ninth:
        <label>none
          <input type='radio' value='none'
          checked={props.value === 'none'}
          onChange={props.change}/>
        </label>
        <label>b
          <input type='radio' value='1'
          checked={props.value === '1'}
          onChange={props.change}/>
        </label>
        <label>n
          <input type='radio' value='2'
          checked={props.value === '2'}
          onChange={props.change}/>
        </label>
        <label>s
          <input type='radio' value='3'
          checked={props.value === '3'}
          onChange={props.change}/>
        </label>
      </div>
    )
  },

  Eleventh: function(props) {
    return (
      <div>
        Eleventh:
        <label>none
          <input type='radio' value='none'
          checked={props.value === 'none'}
          onChange={props.change}/>
        </label>
        <label>n
          <input type='radio' value='5'
          checked={props.value === '5'}
          onChange={props.change}/>
        </label>
        <label>s
          <input type='radio' value='6'
          checked={props.value === '6'}
          onChange={props.change}/>
        </label>
      </div>
    )
  },

  Thirteenth: function(props) {
    return (
      <div>
        Thirteenth:
        <label>none
          <input type='radio' value='none'
          checked={props.value === 'none'}
          onChange={props.change}/>
        </label>
        <label>b
          <input type='radio' value='8'
          checked={props.value === '8'}
          onChange={props.change}/>
        </label>
        <label>n
          <input type='radio' value='9'
          checked={props.value === '9'}
          onChange={props.change}/>
        </label>
        <label>s
          <input type='radio' value='10'
          checked={props.value === '10'}
          onChange={props.change}/>
        </label>
      </div>
    )
  },
}

export default Options;
