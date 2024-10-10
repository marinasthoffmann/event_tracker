import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosEventos = get(listaDeEventosState)

        const eventos = todosEventos.filter((evento) => {
          const statusMatch =
            filtro.estado === "completos"
              ? evento.completo
              : filtro.estado === "incompletos"
              ? !evento.completo
              : true;
        
          const dataMatch = !filtro.data || evento.inicio.toISOString().slice(0, 10) === filtro.data.toISOString().slice(0, 10);
        
          return statusMatch && dataMatch;
        });

        return eventos
    }
})