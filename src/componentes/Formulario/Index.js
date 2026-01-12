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

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });

    // opcional: limpar formulário
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
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
            obrigatorio
            label="Time"
            itens={props.times}
            valor={time}
            aoAlterado={setTime}
          />

          <Botao>Criar Card</Botao>
        </form>
      </div>
    </section>
  );
};

export default Formulario;
