const SAMPLE_RATE = 44100

let shapes = {
  sine: function (s, freq) {
    let t = s / SAMPLE_RATE;
    return Math.sin(t * freq * 2 * Math.PI);
  },
  triangle: function (s, freq) {
    let t = s / SAMPLE_RATE;
    let p = 1 / freq;
    return 2 * Math.abs(2 * (t/p - Math.floor(t/p + 1/2))) - 1;
  },
  saw: function (s, freq) {
    let t = s / SAMPLE_RATE;
    let p = 1 / freq;
    return 2 * (t/p - Math.floor(t/p + 1/2));
  },
  square: function (s, freq) {
    let t = s / SAMPLE_RATE;
    let p = 1 / freq;
    return t % p > p / 2 ? 1 : -1;
  }
}

/*function melody(notes) {
  let mel = []
  for (let i = 0; i < notes.length; i++) {
    mel = mel.concat(notes[i])
  }
  return mel
}*/

function norm(x) {
  while (x > 2) x /= 2;
  while (x < 1) x *= 2;
  return x;
}

function cents(x) {
  return 1200 * Math.log(norm(x)) / Math.log(2);
}

function decimal(x) {
  return Math.pow(2, x / 1200);
}

export function getChordName(ops) {
  let name = '';
  switch (ops.rootBNS) {
    case '-1':
      name += 'b';
      break;
    case '1':
      name += '#';
      break;
    default:
      break;
  }
  let root;
  switch (ops.root) {
    case '0':
      root = 'I';
      break;
    case '2':
    root = 'II';
      break;
    case '4':
    root = 'III';
      break;
    case '5':
    root = 'IV';
      break;
    case '7':
    root = 'V';
      break;
    case '9':
    root = 'VI';
      break;
    case '11':
    root = 'VII';
      break;
    default:
      break;
  }
  switch (ops.triad) {
    case '[4,7]':
      name += root;
      break;
    case '[3,7]':
      name += root.toLowerCase();
      break;
    case '[4,8]':
      name += root + 'aug';
      break;
    case '[3,6]':
      name += root.toLowerCase() + 'dim';
      break;
    case '[5,7]':
      name += root + 'sus4';
      break;
    case '[2,7]':
      name += root + 'sus2';
      break;
    case '[4,6]':
      name += root + 'b5';
      break;
    default:
      break;
  }
  switch (ops.seventh) {
    case '9':
      name += 'dim7';
      break;
    case '10':
      name += '7';
      break;
    case '11':
      name += 'maj7';
      break;
    default:
      break;
  }
  let extendeds = []
  switch (ops.ninth) {
    case '1':
      extendeds.push('b9');
      break;
    case '2':
      extendeds.push('9');
      break;
    case '3':
      extendeds.push('#9');
      break;
    default:
      break;
  }
  switch (ops.eleventh) {
    case '5':
      extendeds.push('11');
      break;
    case '6':
      extendeds.push('#11');
      break;
    default:
      break;
  }
  switch (ops.thirteenth) {
    case '8':
      extendeds.push('b13');
      break;
    case '9':
      extendeds.push('13');
      break;
    case '10':
      extendeds.push('#13');
      break;
    default:
      break;
  }
  if (extendeds.length > 0) (
    name += '(' + extendeds.join(',') + ')'
  )
  return name;
}

const tunings = {
  'tet12': new Array(12).fill(1).map((elt,i) => Math.pow(2,i/12)),
  'just': [1, 16/15, 9/8, 6/5, 5/4, 4/3, 7/5, 3/2, 8/5, 5/3, 16/9, 15/8],
  'pythag': [1, 256/243, 9/8, 32/27, 81/64, 4/3, 1024/729, 3/2, 121/81, 27/16, 16/9, 243/128],
  'lim5': [1, 16/15, 9/8, 6/5, 5/4, 4/3, 64/45, 3/2, 8/5, 5/3, 16/9, 15/8],
  'lim7': [1, 16/15, 9/8, 6/5, 5/4, 4/3, 7/5, 3/2, 8/5, 5/3, 16/9, 15/8],
  'mt_1/4': [],
  'mt_1/3': [],
  'mt_2/7': [],
  'mt_1/5': [],
}
const mt_1_4gen = decimal(cents(3/2) - cents(81/80) / 4);
const mt_1_3gen = decimal(cents(3/2) - cents(81/80) / 3);
const mt_2_7gen = decimal(cents(3/2) - cents(81/80) * 2/7);
const mt_1_5gen = decimal(cents(3/2) - cents(81/80) / 5);
for (let i = -6; i < 6; i++) {
  tunings['mt_1/4'].push(norm(Math.pow(mt_1_4gen, i)));
  tunings['mt_1/3'].push(norm(Math.pow(mt_1_3gen, i)));
  tunings['mt_2/7'].push(norm(Math.pow(mt_2_7gen, i)));
  tunings['mt_1/5'].push(norm(Math.pow(mt_1_5gen, i)));
}
tunings['mt_1/4'].sort();
tunings['mt_1/3'].sort();
tunings['mt_2/7'].sort();
tunings['mt_1/5'].sort();



export function getAudio(ops) {
  const audio = []
  ops = {
    fundamental: parseFloat(ops.fundamental),
    scale: tunings[ops.system],
    root: parseInt(ops.root),
    rootBNS: parseInt(ops.rootBNS),
    triad: JSON.parse(ops.triad),
    seventh: parseInt(ops.seventh),
    ninth: parseInt(ops.ninth),
    eleventh: parseInt(ops.eleventh),
    thirteenth: parseInt(ops.thirteenth),
  }

  function intrvl(y) {
    function norm12(x) {
      while (x > 11) x -= 12;
      while (x < 0) x += 12;
      return x;
    }
    function oct(x) {
      if (x > 0) return Math.ceil(x / 11)
      else return 1 / (1 - Math.floor(x / 11))
    }
    audio.push(ops.fundamental * ops.scale[norm12(y)] * oct(y))
  }
  const root = ops.root + ops.rootBNS
  intrvl(root)
  intrvl(root + ops.triad[0])
  intrvl(root + ops.triad[1])

  if (!isNaN(ops.seventh)) intrvl(root + ops.seventh)
  if (!isNaN(ops.ninth)) intrvl(root + ops.ninth)
  if (!isNaN(ops.eleventh)) intrvl(root + ops.eleventh)
  if (!isNaN(ops.thirteenth)) intrvl(root + ops.thirteenth)

  return audio
}



export function getAudioFromTextin(ops) {
  let fundamental = parseFloat(ops.fundamental)
  let audio = [fundamental]
  ops.textin.split(', ').forEach(function(interval) {
    if (interval.includes('/') && !interval.includes('.')) {
      let num_dem = interval.split('/');
      let numerator = parseInt(num_dem[0]);
      let denominator = parseInt(num_dem[1]);
      audio.push(fundamental * numerator / denominator);
    } else if (interval.includes('.') && !interval.includes('/')) {
      let cents = parseFloat(interval);
      audio.push(fundamental * Math.pow(2, cents/1200));
    }
  })
  return audio;
}

const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();

export function play(audio, playtime, shape) {
  console.log(audio, playtime, shape)
  let buffer = ctx.createBuffer(1, playtime * SAMPLE_RATE, SAMPLE_RATE);
  let bufferSetter = buffer.getChannelData(0);
  var generator = typeof shape == 'function' ? shape : shapes[shape];

  for (let t = 0; t < playtime * SAMPLE_RATE; t++)
    audio.forEach(function(freq) {
      bufferSetter[t] += generator(t, freq) / audio.length
    })

  let source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start();
}
