import math, sys, wave
import tunings as ts
import matplotlib.pyplot as plt
from playsound import playsound

# params = (Number of channels (mono=1/stereo=1), sample width, framerate=44100,
# number of frames, compression type="NONE", compression name="not compressed")
# Frame is a single byte(bbbbbbbb), or 4 hex letters(\xFFFF)
NUM_CHANNELS = 1
SAMP_WIDTH = 2
SAMP_RATE = 44100
TIME_LENGTH = 3
NUM_FRAMES = SAMP_RATE * TIME_LENGTH * 2
COMP_TYPE = "NONE"
COMP_NAME = "not compressed"

def play(freqs=None): # takes a list of frequencies and plays them
    with wave.open("sound.wav","wb") as file:
        file.setparams((NUM_CHANNELS,SAMP_WIDTH,
        SAMP_RATE,NUM_FRAMES,COMP_TYPE,COMP_NAME))
        frames = []
        if freqs is not None:
            for t in range(1,NUM_FRAMES):
                sample = 0
                for freq in freqs:
                    sample += math.sin(freq * math.pi * (t / SAMP_RATE))
                sample /= len(freqs) # normalize amplitude
                sample /= 1.01 # negate clipping
                sample *= 128 # adjust to the range of bits
                if sample < 0: sample += 255 # correct negative numbers
                frames.append(round(sample))
        else:
            for i in range(1,SAMP_RATE):
                frames.append(0)
        file.writeframes(bytes(frames))
    playsound("sound.wav")

def showLastSound(frames):
    with wave.open("sound.wav","rb") as file:
        l = list(file.readframes(frames))
        for i in range(len(l)):
            if l[i] >= 128: l[i] -= 256
        t = []
        for i in range(len(l)):
            t.append(i/SAMP_RATE)
        plt.plot(l, "bo")
        #plt.axes([]) # TODO: make this work
        plt.show()

BASE = 256

# interval multipliers
s = 2**(1/12) # use s**n where n is the number equal tempered semitones
jMs = 9/8
jms = 10/9

# Interval generators
frac = lambda num, den: [BASE, BASE * num / den]
tet12 = lambda st: [BASE, BASE * s**st]

# Chords
justMajor = [BASE, BASE * 5/4, BASE * 3/2]
justMajor7th = [BASE, BASE * 5/4, BASE * 3/2, BASE * 15/8]
justMinor = [BASE, BASE * 6/5, BASE * 3/2]
justMinor7th = [BASE, BASE * 6/5, BASE * 3/2, BASE * 7/4]
justMinor7thInv1 = [BASE, BASE * 3/2, BASE * 7/4, BASE * 12/5]
just6_9Chord = [BASE, BASE * 5/4, BASE * 3/2, BASE * 5/3, BASE * 9/4]
just6_7_9Chord = [BASE, BASE * 5/4, BASE * 3/2, BASE * 5/3, BASE * 15/8, BASE * 9/4]
tet12_6_9Chord = [BASE, BASE*s**4, BASE*s**7, BASE*s**9, BASE*s**14]
tet12_6_7_9Chord = [BASE, BASE*s**4, BASE*s**7, BASE*s**9, BASE*s**11, BASE*s**14]
tet12Minor7thInv1 = [BASE, BASE*s**7, BASE*s**10, BASE*s**15]

def overtoneSeries(start, end=None):
    ret = []
    if end is None:
        for i in range(1,start+1):
            ret.append(100*i)
    else:
        for i in range(start,end+1):
            ret.append(100*i)
    return ret

if __name__== "__main__":
    args = sys.argv[1:]
    sounds = [BASE]
    for arg in args:
        if arg.find("/") != -1:
            frac = arg.split("/")
            num = int(frac[0])
            den = int(frac[1])
            sounds.append(BASE * num / den)
        elif arg.find(".") != -1:
            cents = float(arg)
            ratio = 2**(cents/1200)
            sounds.append(BASE * ratio)
        else:
            continue

play(sounds)
