import math
# Functions to be used in calculating tuning systems
def norm(x):
    if type(x) is int or float:
        while x > 2: x /= 2
        while x < 1: x *= 2
        return float(x)
    return x

# returns the cents 0-100 of the decimal ratio 1 <= x <= 2 or of the ratio x/y
def cents(x,y=1):
    x = norm(x/y)
    ptch = round(12 * math.log(x,2))
    cnts = 1200 * math.log(x,2) - 100 * ptch
    return (ptch,cnts)

# return the cents 0-1200 of the decimal ratio 1 <= x <= 2 or of the ratio x/y or of the tuple x=(pitch,cents)
def cents1200(x,y=1):
    if type(x) is tuple: return x[0]*100 + x[1]
    elif type(x) is list:
        return [cents1200(tup) for tup in x]
    else: return 1200 * math.log(norm(x/y),2)

# returns the decimal ratio 1 <= x <= 2 of the input floa
def ratio(x):
    if type(x) is tuple: return ratio(x[0]*100 + x[1])
    elif type(x) is float: return 2**(float(x)/1200)

# output the most Justly tuned 12 note scale from an input tuning system
def tuneJust(tune):
    tuned, just = [], [1, 16/15, 9/8, 6/5, 5/4, 4/3, 7/5, 3/2, 8/5, 5/3, 16/9, 15/8, 2]
    for i in range(12):
        tuned.append((i,100))
        for tup in tune:
            if tup[0] == i and abs(tup[1] - cents(just[i])[1]) < abs(tuned[i][1] - cents(just[i])[1]):
                tuned[i] = (i, tup[1])
    return tuned

# outputs the most Equally tuned 12 note scale from an input tuning system
def tuneEqual(tune):
    tuned = []
    for i in range(12):
        tuned.append((i,100))
        for tup in tune:
            if tup[0] == i and abs(tup[1]) < abs(tuned[i][1]):
                tuned[i] = (i, tup[1])
    return tuned

################################################################################

# commonly appearing tuning commas
comma = {
    "schisma" : cents(3**12/2**19)[1] - cents(81/80)[1], #pythoagorean - syntonic
    "diaschisma" : 2*cents(81/80)[1] - cents(3**12/2**19)[1], #2*syntonic - pythagorean
    "syntonic" : cents(81/80)[1],
    "pythagorean" : cents(3**12/2**19)[1],
    "septimal" : cents(49/48)[1],
    "<diesis" : 3*cents(81/80)[1] - cents(3**12/2**19)[1], #3*syntonic - pythagorean,
    "pentatonic" : cents(26244/25600)[1],
    ">diesis" : 4*cents(81/80)[1] - cents(3**12/2**19)[1], #4*syntonic - pythagorean,
    "readme" : "Commas are the differences between enharmonic notes in different tuning systems"
}

# Just Intonation
maxHarmonic = 16
just = list(set(cents(i/(i-d)) for d in range(maxHarmonic) for i in range(d+1,maxHarmonic+1)))
just.sort()

# Pythagorean tunings, sort of a cross between limit and meantone systems
pythag = [cents((3/2)**i) for i in range(-6,7)]
pythag.sort()

# Limit tunings
lim3 = [cents(3**i) for i in range(-6,7)]
lim5 = [cents(3**i * 5**j) for i in range(-6,7) for j in range(-2,3)]
lim7 = [cents(3**i * 5**j * 7**k) for i in range(-6,7) for j in range(-2,3) for k in range(-2,3)]
lim11 = [cents(norm(3**i * 5**j * 7**k * 11**l)) for i in range(-6,7) for j in range(-2,3) for k in range(-2,3) for l in range(-2,3)]
lim3.sort(), lim5.sort(), lim7.sort(), lim11.sort()

# Meantone tunings
mt1_4gen = ratio(cents1200(cents(3/2)) - comma["syntonic"] / 4)
mt1_3gen = ratio(cents1200(cents(3/2)) - comma["syntonic"] / 3)
mt2_7gen = ratio(cents1200(cents(3/2)) - comma["syntonic"] * 2/7)
mt1_5gen = ratio(cents1200(cents(3/2)) - comma["syntonic"] / 5)
mt1_4 = [cents(mt1_4gen**i) for i in range(-6,7)]
mt1_3 = [cents(mt1_3gen**i) for i in range(-6,7)]
mt2_7 = [cents(mt2_7gen**i) for i in range(-6,7)]
mt1_5 = [cents(mt1_5gen**i) for i in range(-6,7)]
mt1_4.sort(), mt1_3.sort(), mt2_7.sort(), mt1_5.sort()

# Equal Temperments
tet5 = [cents(2**(i/5)) for i in range(6)]
tet7 = [cents(2**(i/7)) for i in range(8)]
tet12 = [cents(2**(i/12)) for i in range(13)] # The modern tuning system
tet17 = [cents(2**(i/17)) for i in range(17)]
tet19 = [cents(2**(i/19)) for i in range(20)]
tet22 = [cents(2**(i/22)) for i in range(23)]
tet26 = [cents(2**(i/26)) for i in range(27)]
tet31 = [cents(2**(i/31)) for i in range(32)]
tet43 = [cents(2**(i/43)) for i in range(43)]
tet50 = [cents(2**(i/50)) for i in range(51)]
tet53 = [cents(2**(i/53)) for i in range(54)]
tet5.sort(), tet7.sort(), tet12.sort(), tet17.sort(), tet19.sort(), tet22.sort(), tet26.sort(), tet31.sort(), tet43.sort(), tet50.sort(), tet53.sort()
