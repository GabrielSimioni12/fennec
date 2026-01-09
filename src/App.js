import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time/Index';

function App() {

  const [times, setTimes] = useState([
    { nome: 'TI', corPrimaria: '#383838ff', corSecundaria: '#F0F8E2' },
    { nome: 'Marketing', corPrimaria: '#E06B69', corSecundaria: '#F0F8E2' },
    { nome: 'Vendas', corPrimaria: '#008cffff', corSecundaria: '#F0F8E2' },
    { nome: 'RH', corPrimaria: '#FFBA05', corSecundaria: '#F0F8E2' },
    { nome: 'Financeiro', corPrimaria: '#5B913B', corSecundaria: '#F0F8E2' },
    { nome: 'Operações', corPrimaria: '#3C467B', corSecundaria: '#F0F8E2' },
    { nome: 'Jurídico', corPrimaria: '#E62727', corSecundaria: '#F0F8E2' },
  ]);

  // CORREÇÃO: Mudei 'inicial' para [] para evitar o ReferenceError
  const [colaboradores, setColaboradores] = useState([]);

  // CORREÇÃO: Adicionei a função que o formulário chama
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.corSecundaria = cor;
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
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;