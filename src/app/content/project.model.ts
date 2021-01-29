export class Project {
    /**
     *
     */
    private _name: String
    private _desc: String
    private _icons: String[]
    private _imagePath: String[]
    constructor(name: String, desc: String, icons: String[], imagePath: String[]) {
        this._name = name;
        this._desc = desc;
        this._icons = icons
        this._imagePath = imagePath
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get desc() {
        return this._desc;
    }
    set desc(value) {
        this._desc = value;
    }
    get icons() {
        return this._icons;
    }
    set icons(value) {
        this._icons = value;
    }
    get imagePath() {
        return this._imagePath;
    }
    set imagePath(value) {
        this._imagePath = value;
    }
}