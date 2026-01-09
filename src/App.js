import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time/Index';

function App() {

  const [times, setTimes] = useState([
    { nome: 'TI', corPrimaria: '#00FF7F', fotoFundo: '/imagens/fundo.png' },
    { nome: 'Marketing', corPrimaria: '#E06B69', fotoFundo: '/imagens/fundo.png' },
    { nome: 'Vendas', corPrimaria: '#00D4FF', fotoFundo: '/imagens/fundo.png' },
    { nome: 'RH', corPrimaria: '#FFBA05', fotoFundo: '/images/fundo_card' },
    { nome: 'Financeiro', corPrimaria: '#3dd62fff', fotoFundo: '/imagens/fundo.png' },
    { nome: 'Operações', corPrimaria: '#3C467B', fotoFundo: '/imagens/fundo.png' },
    { nome: 'Jurídico', corPrimaria: '#E62727', fotoFundo: '/imagens/fundo.png' },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.corPrimaria = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado} 
      />

      {times.map(time => <Time
        mudarCorDoTime={mudarCorDoTime}
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        fotoFundo={time.fotoFundo}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;