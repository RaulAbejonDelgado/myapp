
export enum Sexo {
    femenino = 1,
    masculino = 2,
    indefino = 3,
    
}

export class Persona {

    
    private _nombre: string;
    
    private _apellidos: string; 
    
    private _sexo: Sexo;
    
    private _email: string;
    

    private _edad: number;


    constructor(){
        this._nombre = "anonimo";
        this._apellidos = "";
        this._sexo = Sexo.indefino;
        this._email = "";
        this._edad = 16;
    }
    

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    public get Sexo(): Sexo {
        return this._sexo;
    }
    public set Sexo(value:Sexo){
        this._sexo = value;
    }



    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
}
