// code paraphrased from node.js tonegenerator package
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
};

function harmony(freqs=440, time=3, shape='sine') {
  if (typeof freqs === 'number') {
    return tone({
      freq: freqs,
      lengthInSecs: time,
      volume: tone.MAX_16,
      rate: 44100,
      shape: shape,
    })
  } else if (freqs !== null && typeof freqs === 'object') {
    let tones = []
    console.log('writing1')
    for (let i = 0; i < freqs.length; i++) {
      tones.push(tone({
        freq: freqs[i],
        lengthInSecs: time,
        volume: tone.MAX_16 / 32,
        rate: 44100,
        shape: shape,
      }))
    }
    let samples = []
    console.log('writing2')
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

/*function melody(notes) {
  let mel = []
  for (let i = 0; i < notes.length; i++) {
    mel = mel.concat(notes[i])
  }
  return mel
}*/

/*function writeAudio(samples) {
  let file = fs.createWriteStream('components/audio/cur.wav')
  file.write(header(samples.length * 2, { bitDepth: 16 }))
  let data = Int16Array.from(samples)
  let buffer = Buffer.allocUnsafe(data.length * 2) // 2 bytes per sample
  data.forEach(function (value, index) {
    buffer.writeInt16LE(value, index * 2)
  })
  file.write(buffer)
  file.end()
}*/
const scale = new Array(24).fill(1).map((elt,i) => Math.pow(2,i/12))

function getAudio(ops) {
  const audio = []
  ops = {
    playtime: parseFloat(ops.playtime),
    fundamental: parseFloat(ops.fundamental),
    shape: ops.shape,
    root: parseInt(ops.root),
    rootBNS: parseInt(ops.rootBNS),
    triad: JSON.parse(ops.triad),
    seventh: parseInt(ops.seventh),
    ninth: parseInt(ops.ninth),
    eleventh: parseInt(ops.eleventh),
    thirteenth: parseInt(ops.thirteenth),
  }

  let root = ops.root + ops.rootBNS
  let third = ops.triad[0]
  let fifth = ops.triad[1]
  audio.push(ops.fundamental * scale[root])
  audio.push(ops.fundamental * scale[root + third])
  audio.push(ops.fundamental * scale[root + fifth])

  if (!isNaN(ops.seventh))
    audio.push(ops.fundamental * scale[root + ops.seventh])
  if (!isNaN(ops.ninth))
    audio.push(ops.fundamental * scale[root + ops.ninth])
  if (!isNaN(ops.eleventh))
    audio.push(ops.fundamental * scale[root + ops.eleventh])
  if (!isNaN(ops.thirteenth))
    audio.push(ops.fundamental * scale[root + ops.thirteenth])

  return audio
}

function play(audio, playtime, shape) {
  console.log(audio, playtime, shape)
  let j = 0
  console.log('playing',j++)
  const chord = harmony(audio, playtime, shape)
  console.log('playing',j++)
  const audioCtx = new AudioContext()
  console.log('playing',j++)
  let buffer = audioCtx.createBuffer(1, playtime * audioCtx.sampleRate, audioCtx.sampleRate)
  console.log('playing',j++)
  let bufferSet = buffer.getChannelData(0)
  console.log('playing',j++)
  for (let i = 0; i < playtime * audioCtx.sampleRate; i++) {
    bufferSet[i] = chord[i] / 32
  }
  console.log('playing',j++)
  let source = audioCtx.createBufferSource()
  console.log('playing',j++)
  source.buffer = buffer
  console.log('playing',j++)
  source.connect(audioCtx.destination)
  console.log('playing',j++)
  source.start()
}

const Sound = {
  getAudio,
  play
}

export default Sound;
