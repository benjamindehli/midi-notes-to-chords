# music-utils

A utility for identifying chords from selected MIDI note numbers.

## Features

- Detects chord names from MIDI note input
- Supports a wide range of chord types and inversions
- Returns chord matches with root note prioritization

## Installation

```bash
npm install @benjamindehli/music-utils
```

## Usage

```js
import { getChordsFromSelectedNotes } from "@benjamindehli/music-utils";

const midiNotes = [60, 64, 67]; // C, E, G
const chords = getChordsFromSelectedNotes(midiNotes);
console.log(chords);
// Output: [{ root: "C", chord: "major" }, { root: "E", chord: "m(#5)}]
```
