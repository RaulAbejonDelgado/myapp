export class Enlace {
    private _titulo: string;
    private _url: string;

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
    constructor(){
        this._titulo = "";
        this._url = "";
    }
}
