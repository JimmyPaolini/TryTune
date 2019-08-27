var shapes = {
  sine: function (i, cycle, volume) {
    // i / cycle => value between 0 and 1
    // 0 = beginning of circly
    // 0.25 Math.sin = 1
    // 0.5 Math.sin = 0
    // 0.75 Math.sin = -1
    // 1 Math.sin = 1
    return Math.min(volume * Math.sin((i/cycle) * Math.PI * 2), volume - 1);
  },
  triangle: function (i, cycle, volume) {
    var halfCycle = cycle / 2
    var level

    if (i < halfCycle) {
      level = (volume * 2) * (i / halfCycle) - volume;
    } else {
      i = i - halfCycle
      level = -(volume * 2) * (i / halfCycle) + volume;
    }

    return Math.min(level, volume - 1);
  },
  saw: function (i, cycle, volume) {
    return Math.min((volume * 2) * (i / cycle) - volume, volume - 1);
  },
  square: function (i, cycle, volume) {
    if(i > cycle / 2) {
      return volume - 1;
    }

    return -volume;
  }
}

function generateCycle(cycle, volume, shape) {
  var data = [];
  var tmp;
  var generator = typeof shape == 'function' ? shape : shapes[shape];
  if (!generator) {
    throw new Error('Invalid wave form: "' + shape + '" choose between: ' + Object.keys(shapes));
  }

  for(var i = 0; i < cycle; i++) {
    tmp = generator(i, cycle, volume);
    data[i] = Math.round(tmp);
  }
  return data;
}

function tone(opts) {
  opts = opts || {}
  var freq = opts.freq || 440;
  var rate = opts.rate || 44100
  var lengthInSecs = opts.lengthInSecs || 2.0;
  var volume = opts.volume || 30;
  var shape = opts.shape || 'sine';

  var cycle = Math.floor(rate/freq);
  var samplesLeft = lengthInSecs * rate;
  var cycles = samplesLeft/cycle;
  var ret = [];

  for(var i = 0; i < cycles; i++) {
    ret = ret.concat(generateCycle(cycle, volume, shape));
  }

  return ret;
}

const FUND = 440
const TIME = 2
const SHAPE = 'sine'

function harmony(freqs=FUND) {
  if (typeof freqs === 'number') {
    return tone({
      freq: freqs,
      lengthInSecs: TIME,
      volume: tone.MAX_16,
      rate: 44100,
      shape: SHAPE,
    })
  } else if (freqs !== null && typeof freqs === 'object') {
    const tones = []
    for (let i = 0; i < freqs.length; i++) {
      tones.push(tone({
        freq: freqs[i],
        lengthInSecs: TIME,
        volume: tone.MAX_16,
        rate: 44100,
        shape: SHAPE,
      }))
    }
    let samples = []
    for (let i = 0; i < tones[0].length; i++) {
      samples.push(0)
      for (let j = 0; j < tones.length; j++) {
        samples[i] += tones[j][i]
      }
      samples[i] /= tones.length
    }
    return samples
  }
}

function melody(notes) {
  let mel = []
  for (let i = 0; i < notes.length; i++) {
    mel = mel.concat(notes[i])
  }
  return mel
}

/*function writeAudio(samples) {
  const file = require('fs').createWriteStream('audio.wav')
  file.write(header(samples.length * 2, { bitDepth: 16 }))
  const data = Int16Array.from(samples)
  const buffer = Buffer.allocUnsafe(data.length * 2) // 2 bytes per sample
  data.forEach(function (value, index) {
    buffer.writeInt16LE(value, index * 2)
  })
  file.write(buffer)
  file.end()
}*/

let chord1 = harmony([440, 440*4/3, 440*3/2])
let chord2 = harmony([440, 440*9/8, 440*3/2])
let chord3 = harmony([440, 440*5/4, 440*3/2])
let samples = melody([chord1,chord2,chord3])

//writeAudio(samples)
