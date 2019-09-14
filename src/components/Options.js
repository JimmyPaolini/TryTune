import React from 'react'

let Options = {
  PlayTime: function(props) {
    return (
      <div>
      <span>Play Time (s): </span>
      <input type="text" name="PlayTime"
      defaultValue={props.value} onChange={props.change}/>
      </div>
    )
  },

  Fundamental: function(props) {
    return (
      <div>
      <span>Fundamental (Hz): </span>
      <input type="text" name="Fundamental"
      defaultValue={props.value} onChange={props.change}/>
      </div>
    )
  },

  System: function(props) {
    return (
      <div>
      <span>Tuning System: </span>
      <select defaultValue={props.value} onChange={props.change}>
        <option value='tet12'>12-Tone Equal Temperment</option>
        <option value='pythag'>Pythagorean / 3-Limit</option>
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
      <span>Shape: </span>
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
      <span>Root: </span>
      <select defaultValue={props.value} onChange={props.change}>
        <option value='0'>I</option>
        <option value='2'>II</option>
        <option value='4'>III</option>
        <option value='5'>IV</option>
        <option value='7'>V</option>
        <option value='9'>VI</option>
        <option value='11'>VII</option>
      </select>
      <label>   &#x266d;
        <input type="radio" value='-1'
        checked={props.valueBNS === '-1'}
        onChange={props.changeBNS}/>
      </label>
      <label>   &#x266e;
        <input type="radio" value='0'
        checked={props.valueBNS === '0'}
        onChange={props.changeBNS}/>
      </label>
      <label>   &#x266f;
        <input type="radio" value='1'
        checked={props.valueBNS === '1'}
        onChange={props.changeBNS}/>
      </label>
      </div>
    )
  },

  Triad: function(props) {
    return (
      <div>
        <span>Triad: </span>
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
        <span>Seventh: </span>
        <label>   none
          <input type='radio' value='none'
          checked={props.value === 'none'}
          onChange={props.change}/>
        </label>
        <label>   dim
          <input type='radio' value='9'
          checked={props.value === '9'}
          onChange={props.change}/>
        </label>
        <label>   min
          <input type='radio' value='10'
          checked={props.value === '10'}
          onChange={props.change}/>
        </label>
        <label>   maj
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
        <span>Ninth: </span>
        <label>   none
          <input type='radio' value='none'
          checked={props.value === 'none'}
          onChange={props.change}/>
        </label>
        <label>   &#x266d;
          <input type='radio' value='13'
          checked={props.value === '13'}
          onChange={props.change}/>
        </label>
        <label>   &#x266e;
          <input type='radio' value='14'
          checked={props.value === '14'}
          onChange={props.change}/>
        </label>
        <label>   &#x266f;
          <input type='radio' value='15'
          checked={props.value === '15'}
          onChange={props.change}/>
        </label>
      </div>
    )
  },

  Eleventh: function(props) {
    return (
      <div>
        Eleventh:
        <label>   none
          <input type='radio' value='none'
          checked={props.value === 'none'}
          onChange={props.change}/>
        </label>
        <label>   &#x266e;
          <input type='radio' value='17'
          checked={props.value === '17'}
          onChange={props.change}/>
        </label>
        <label>   &#x266f;
          <input type='radio' value='18'
          checked={props.value === '18'}
          onChange={props.change}/>
        </label>
      </div>
    )
  },

  Thirteenth: function(props) {
    return (
      <div>
        Thirteenth:
        <label>   none
          <input type='radio' value='none'
          checked={props.value === 'none'}
          onChange={props.change}/>
        </label>
        <label>   &#x266d;
          <input type='radio' value='20'
          checked={props.value === '20'}
          onChange={props.change}/>
        </label>
        <label>   &#x266e;
          <input type='radio' value='21'
          checked={props.value === '21'}
          onChange={props.change}/>
        </label>
      </div>
    )
  },
}

export default Options;
