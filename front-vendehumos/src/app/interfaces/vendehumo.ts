export interface Vendehumo{
    id: number,
    nombre: string,
    descripcion: string,
    categorias: string[],
    fechaAlta: Date,
    urlImagen: string,
    votadoPor: number[],
    usuarioId: number,
    numVotos?: number
}