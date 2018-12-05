export class Videojuego {

    private _titulo: string;
    
    private _imagen: string;
    
    private _precio: number;
    
    private _alquilado: boolean;
    
    private _descripcion: string;
    
    private _anyo: number;    
    
    private _cantidad: number;// 
    private _total: number;
    private _descuento: number;
    
   
    
    

    constructor(){

        this._titulo ="Fornite";
        this._imagen = "assets/imgs/videogame_cover.png";
        this._precio = 0;
        this._alquilado = false;
        this._descripcion = "Loren ipsum Loren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsumLoren ipsum";
        this._anyo = 0;
        this._cantidad = 0;
        this._total = 0;
        this._descuento = 0;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        console.trace('****** set titulo(value: string)')
        this._titulo = value;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }

    public get alquilado(): boolean {
        return this._alquilado;
    }
    public set alquilado(value: boolean) {
        this._alquilado = value;
    }

    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }

    public get anyo(): number {
        return this._anyo;
    }
    public set anyo(value: number) {
        this._anyo = value;
    }

    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(value: number) {
        this._cantidad = value;
    }
    public get total(): number {
        return this._total;
    }
    public set total(value: number) {
        this._total = value;
    }
    public get descuento(): number {
        return this._descuento;
    }
    public set descuento(value: number) {
        this._descuento = value;
    }


}
