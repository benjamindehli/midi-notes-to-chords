// Helpers
import { normalizeHalfSteps } from "../helpers/noteHelpers";

/**
 * Class representing a musical chord
 * @class
 *
 * @property {string} name - The name of the chord
 * @property {number[]} halfSteps - An array of half steps (0-11) that define the chord
 * @property {number[]} parsedHalfSteps - An array of normalized half steps (0-11) without duplicates, derived from halfSteps
 * @param {Object} props - The properties to initialize the chord
 * @param {string} props.name - The name of the chord
 * @param {number[]} props.halfSteps - An array of half steps (0-11) that define the chord
 *
 * @example
 * const majorChord = new Chord({ name: "m11", halfSteps: [0, 3, 7, 10, 14, 17] });
 * console.log(majorChord.name); // "m11"
 * console.log(majorChord.halfSteps); // [0, 3, 7, 10, 14, 17]
 * console.log(majorChord.parsedHalfSteps); // [0, 2, 3, 5, 7, 10]
 */
export default class Chord {
    constructor(props) {
        this.name = props?.name;
        this.halfSteps = props?.halfSteps || [];
        this.parsedHalfSteps = this.getParsedHalfSteps(this.halfSteps);
    }

    /**
     * @param {number[]} halfSteps - An array of half steps (0-11)
     * @returns {number[]} An array of normalized half steps (0-11) without duplicates
     */
    getParsedHalfSteps(halfSteps) {
        return normalizeHalfSteps(halfSteps);
    }
}
