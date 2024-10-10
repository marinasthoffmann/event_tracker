import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltrodeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventosAsync
})

export const filtroDeEventos = atom<IFiltrodeEventos>({
    key: 'filtroDeEventos',
    default: {
        "data": null,
        "estado": "todos"
    }
})