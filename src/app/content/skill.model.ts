export class Skill{
    /**
     *
     */
    private _skillName : String;
    private _subSkill : String[];
    private _icon : String;
    constructor(name :String,subSkill:String[],icon:String) {
        this._skillName=name;
        this._subSkill = subSkill;
        this._icon = icon;
    }
    get skillName() {
        return this._skillName;
    }
    set skillName(value) {
        this._skillName = value;
    }
    get subSkill() {
        return this._subSkill;
    }
    set subSkill(value) {
        this._subSkill = value;
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
    }
}