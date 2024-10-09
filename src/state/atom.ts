import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltrodeEventos } from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: [{
        "descricao": "Estudar React",
        "inicio": new Date("2024-07-23T09:00"),
        "fim": new Date("2024-07-23T13:00"),
        "completo": false,
        "id": 1642342747
    },
    {
        "descricao": "Estudar Recoil",
        "inicio": new Date("2024-07-24T09:00"),
        "fim": new Date("2024-07-24T11:00"),
        "completo": false,
        "id": 1642342959
    }]
})

export const filtroDeEventos = atom<IFiltrodeEventos>({
    key: 'filtroDeEventos',
    default: {}
})