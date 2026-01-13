import { useState } from 'react';
import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa/Index';
import Botao from '../botao/Botao';
import './Formlario.css';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [novoTime, setNovoTime] = useState('');
  const [criandoNovoTime, setCriandoNovoTime] = useState(false);

  const aoSalvar = (evento) => {
    evento.preventDefault();

    let timeFinal = time;

    // Se estiver criando um novo time, usamos o valor do input "novoTime"
    if (criandoNovoTime && novoTime.trim() !== '') {
      timeFinal = novoTime.trim();

      props.aoNovoTimeCriado({
        nome: timeFinal,
        corPrimaria: '#ffffffff',
        fotoFundo: '/images/fundo_card.png'
      });
    }

    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time: timeFinal
    });

    // Limpa o formulário após salvar
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
    setNovoTime('');
    setCriandoNovoTime(false);
  };

  return (
    <section className="form-section">
      <div className="formulario">
        <form onSubmit={aoSalvar}>
          <h2>Preencha os dados para criar o card do colaborador</h2>

          <CampoTexto
            obrigatorio
            label="Nome"
            placeholder="Digite o seu nome"
            valor={nome}
            aoAlterado={setNome}
          />

          <CampoTexto
            obrigatorio
            label="Cargo"
            placeholder="Digite o seu cargo"
            valor={cargo}
            aoAlterado={setCargo}
          />

          <CampoTexto
            label="Imagem"
            placeholder="Digite o endereço da imagem"
            valor={imagem}
            aoAlterado={setImagem}
          />

          <ListaSuspensa
            // CORREÇÃO: A lista só é obrigatória se NÃO estiver criando um novo time
            obrigatorio={!criandoNovoTime} 
            label="Time"
            itens={[...props.times, '+ Criar novo time']}
            valor={time}
            className={criandoNovoTime ? 'modo-novo-time' : ''}
            aoAlterado={(valor) => {
              if (valor === '+ Criar novo time') {
                setCriandoNovoTime(true);
                setTime(''); // Limpa a seleção para não travar o required
              } else {
                setCriandoNovoTime(false);
                setTime(valor);
              }
            }}
          />

          {criandoNovoTime && (
            <CampoTexto
              obrigatorio
              label="Novo Time"
              placeholder="Digite o nome do novo time"
              valor={novoTime}
              aoAlterado={setNovoTime}
            />
          )}

          <Botao classeExtra={criandoNovoTime ? 'botao-novo-time' : ''}>
            Criar Card
          </Botao>
        </form>
      </div>
    </section>
  );
};

export default Formulario;