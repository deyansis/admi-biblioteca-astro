export interface IDocumento {
    autor: string;
    nombre_archivo: string;
    year: string;
    archivo_base64: string;
    user_id: number;
    carrera_id: number;
    tipo_documento_id: number;
    estado?: string | null;
    id?: number | null;
}