export type IFiltroStatus = "completos" | "incompletos" | "todos";

export interface IFiltrodeEventos {
    data?: Date | null
    estado: IFiltroStatus 
}