import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time/Index';

function App() {

  const [times, setTimes] = useState([
    { nome: 'TI', corPrimaria: '#ffffffff', fotoFundo: '/images/fundo_card.png' },
    { nome: 'Marketing', corPrimaria: '#d30785ff', fotoFundo: '/images/fundo_card.png' },
    { nome: 'Vendas', corPrimaria: '#00D4FF', fotoFundo: '/images/fundo_card.png' },
    { nome: 'RH', corPrimaria: '#FFBA05', fotoFundo: '/images/fundo_card.png' },
    { nome: 'Financeiro', corPrimaria: '#3dd62fff', fotoFundo: '/images/fundo_card.png' },
    { nome: 'Operações', corPrimaria: '#3C467B', fotoFundo: '/images/fundo_card.png' },
    { nome: 'Jurídico', corPrimaria: '#E62727', fotoFundo: '/images/fundo_card.png' },
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