import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time/Index';
import Rodape from './componentes/Footer/footer'; 

function App() {
  const [times, setTimes] = useState([
    { nome: 'TI', corPrimaria: '#ffffff', fotoFundo: '/images/fundo_card.png' },
    { nome: 'Marketing', corPrimaria: '#d30785', fotoFundo: '/images/fundo_card.png' },
    { nome: 'Vendas', corPrimaria: '#00D4FF', fotoFundo: '/images/fundo_card.png' },
    { nome: 'RH', corPrimaria: '#FFBA05', fotoFundo: '/images/fundo_card.png' },
    { nome: 'Financeiro', corPrimaria: '#3dd62f', fotoFundo: '/images/fundo_card.png' },
    { nome: 'Operações', corPrimaria: '#3C467B', fotoFundo: '/images/fundo_card.png' },
    { nome: 'Jurídico', corPrimaria: '#E62727', fotoFundo: '/images/fundo_card.png' },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const aoNovoTimeCriado = (novoTime) => {
    if (!times.some(time => time.nome === novoTime.nome)) {
      setTimes([...times, novoTime]);
    }
  };

  return (
    <div className="App">
      <Banner />

      {/* SEÇÃO DE TRANSIÇÃO COMPACTA */}
      <section className="transicao-compacta">
        <div className="transicao-content">
          <img src="/images/logo.png" alt="Logo" className="logo-reduzida" />
          <div className="transicao-texto">
            <h2>Gestão de Pessoas</h2>
            <p>Dados em tempo real</p>
          </div>
          
          <div className="transicao-stats">
            <div className="stat-mini">
              <i className="fa-solid fa-users"></i>
              <span><strong>{colaboradores.length}</strong> Colaboradores</span>
            </div>
            <div className="stat-mini">
              <i className="fa-solid fa-chart-pie"></i>
              <span><strong>{times.length}</strong> Times</span>
            </div>
          </div>
        </div>
      </section>

      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
        aoNovoTimeCriado={aoNovoTimeCriado}
      />

      {times.map(time => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          fotoFundo={time.fotoFundo}
          colaboradores={colaboradores.filter(
            colaborador => colaborador.time === time.nome
          )}
        />
      ))}

      {}
      <Rodape />
    </div>
  );
}

export default App;