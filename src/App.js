import { useState, useEffect } from 'react';

import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time/Index';
import Rodape from './componentes/Footer/footer';

function App() {
  /* ============================
     TIMES
  ============================ */
  const [times, setTimes] = useState(() => {
    const timesSalvos = localStorage.getItem('times');

    const timesPadrao = [
      { nome: 'TI', corPrimaria: '#ffffff', fotoFundo: '/images/fundo_card.png' },
      { nome: 'Marketing', corPrimaria: '#d30785', fotoFundo: '/images/fundo_card.png' },
      { nome: 'Vendas', corPrimaria: '#00D4FF', fotoFundo: '/images/fundo_card.png' },
      { nome: 'RH', corPrimaria: '#FFBA05', fotoFundo: '/images/fundo_card.png' },
      { nome: 'Financeiro', corPrimaria: '#3dd62f', fotoFundo: '/images/fundo_card.png' },
      { nome: 'Operações', corPrimaria: '#3C467B', fotoFundo: '/images/fundo_card.png' },
      { nome: 'Jurídico', corPrimaria: '#E62727', fotoFundo: '/images/fundo_card.png' },
    ];

    return timesSalvos ? JSON.parse(timesSalvos) : timesPadrao;
  });

  /* ============================
     COLABORADORES
  ============================ */
  const [colaboradores, setColaboradores] = useState(() => {
    const colaboradoresSalvos = localStorage.getItem('colaboradores');
    return colaboradoresSalvos ? JSON.parse(colaboradoresSalvos) : [];
  });

  /* ============================
     LOCAL STORAGE
  ============================ */
  useEffect(() => {
  const colaboradoresSemImagemPesada = colaboradores.map(c => ({
    ...c,
    imagem:
      c.imagem && c.imagem.startsWith('data:')
        ? null
        : c.imagem
  }));

  localStorage.setItem(
    'colaboradores',
    JSON.stringify(colaboradoresSemImagemPesada)
  );
}, [colaboradores]);


  useEffect(() => {
    localStorage.setItem('times', JSON.stringify(times));
  }, [times]);

  /* ============================
     HANDLERS
  ============================ */
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([
      ...colaboradores,
      {
        ...colaborador,
        id: Date.now(), // id único
      },
    ]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter(colaborador => colaborador.id !== id)
    );
  };

  const aoNovoTimeCriado = (novoTime) => {
    const timeJaExiste = times.some(
      time => time.nome.toLowerCase() === novoTime.nome.toLowerCase()
    );

    if (!timeJaExiste) {
      setTimes([...times, novoTime]);
    }
  };

  /* ============================
     RENDER
  ============================ */
  return (
    <div className="App">
      <Banner />

      <section className="transicao-compacta">
        <div className="transicao-content">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="logo-reduzida"
          />

          <div className="transicao-texto">
            <h2>Gestão de Pessoas</h2>
            <p>Dados em tempo real</p>
          </div>

          <div className="transicao-stats">
            <div className="stat-mini">
              <i className="fa-solid fa-users"></i>
              <span>
                <strong>{colaboradores.length}</strong> Colaboradores
              </span>
            </div>

            <div className="stat-mini">
              <i className="fa-solid fa-chart-pie"></i>
              <span>
                <strong>{times.length}</strong> Times
              </span>
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
          aoDeletar={deletarColaborador}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
