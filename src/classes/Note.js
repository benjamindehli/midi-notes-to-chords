/**
 * Class representing a musical note.
 * @class
 * @property {string} name - The name of the note (e.g., "C", "C#", "D", etc.)
 * @property {number} number - The MIDI note number (0-11)
 * @param {Object} props - The properties to initialize the note
 * @param {string} props.name - The name of the note
 * @param {number} props.number - The MIDI note number (0-11)
 *
 * @example
 * const cNote = new Note({ name: "C", number: 0 });
 * console.log(cNote.name); // "C"
 * console.log(cNote.number); // 0
 */
export default class Note {
    constructor(props) {
        this.name = props?.name;
        this.number = props?.number;
    }
}
