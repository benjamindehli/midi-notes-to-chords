/**
 * @typedef {Object} SelectionTypeProps
 * @property {string} label - The label of the selection type (e.g., "Chord", "Scale", etc.)
 * @property {string} value - The value of the selection type (e.g., "chord", "scale", etc.)
 */
export default class SelectionType {
    /**
     * Creates an instance of SelectionType.
     * @param {SelectionTypeProps} props - The properties to initialize the selection type
     */
    constructor(props) {
        this.label = props?.label;
        this.value = props?.value;
    }
}
