# trytune_python
A Python application to explore and experiment with musical tuning systems with microtonal precision. GUI in development (React, node.js)

Files:
trytune.py - main runnable file, plays a normalized sine wave of the base frequency (440.0). Can be modified to play desired sounds more easily and/or in succession to write a song.
tunings.py - module containing numerous tuning systems as interval lists and functions to transform between ratios, cents, and pitches.

Arguments:
Each arguments adds an interval above the base note (A440), separated by spaces
Fractions (containing '/', like 3/2) are interpreted as ratios in Just Intonation, or harmonics in the overtone series.
Decimals (containing '.', like 700.0) are interpreted as cents in 12-Tone Equal Temperament, the most common modern tuning system.

Dependencies:
python - https://www.python.org/downloads/
playsound - (python module) https://pypi.org/project/playsound/

Future Features:
GUI to allow quick playback of all intervals, chords (replacing commandline arguments)
Keypress playback with User-programmable shortcuts
Option to show a graph of the sinewave
