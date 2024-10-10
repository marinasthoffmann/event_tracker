import React, { useState } from 'react';
import style from './Filtro.module.scss';
import { useSetRecoilState } from 'recoil';
import { IFiltrodeEventos, IFiltroStatus } from '../../interfaces/IFiltroDeEventos';
import { filtroDeEventos } from '../../state/atom';

const Filtro: React.FC = () => {
  
  const [data, setData] = useState('')
  const [status, setStatus] = useState<IFiltroStatus>('todos')
  const setFiltroDeEvento = useSetRecoilState<IFiltrodeEventos>(filtroDeEventos)
  
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    
    evento.preventDefault()
    const filtro: IFiltrodeEventos = {estado:'todos'}

    if(data) { 
      filtro.data = new Date(data)
    } else {
      filtro.data = null
    }

    filtro.estado = status

    setFiltroDeEvento(filtro)

  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input 
      type="date" 
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)} 
      placeholder="Por data"
      value={data} />

    <h3 className={style.titulo}>Filtrar por status</h3>
    <select 
      name="status"
      onChange={evento => {setStatus(evento.target.value as IFiltroStatus)}}
      value={status}
    >
      <option value="todos">Todas</option>
      <option value="completos">Completas</option>
      <option value="incompletos">Incompletas</option>
    </select>

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro