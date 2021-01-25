export interface TemporizadorInt {
    id:number,
    descrip: string,
    segundostintActivo: number , //serie 1 cuantos segundos
    segundostintDescanso: number //serie 2 cuantos segundos
    enMarcha: boolean,
    estaEnSerieActivo: boolean;
    segundoActual: number
}
