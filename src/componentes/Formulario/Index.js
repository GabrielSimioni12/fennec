import { useState, useRef } from 'react'; // Adicionamos o useRef aqui
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

  // Criamos uma referência para o input de arquivo
  const arquivoInputRef = useRef(null);

  const aoSalvar = (evento) => {
    evento.preventDefault();

    let timeFinal = time;

    if (criandoNovoTime && novoTime.trim() !== '') {
      timeFinal = novoTime.trim();
      props.aoNovoTimeCriado({
        nome: timeFinal,
        corPrimaria: '#ffffff',
        fotoFundo: '/images/fundo_card.png'
      });
    }

    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time: timeFinal
    });

    // --- RESET DOS ESTADOS ---
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
    setNovoTime('');
    setCriandoNovoTime(false);

    // --- LIMPEZA MANUAL DO INPUT DE ARQUIVO ---
    // Isso remove o nome do arquivo que fica escrito no botão
    if (arquivoInputRef.current) {
        arquivoInputRef.current.value = ""; 
    }
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
            label="Imagem (URL)"
            placeholder="Cole o link da imagem"
            valor={imagem}
            aoAlterado={setImagem}
          />

          {/* Passamos a referência (ref) para o CampoTexto conseguir limpar o input */}
          <CampoTexto
            label="Imagem (Arquivo ou Galeria)"
            type="file"
            aoAlterado={setImagem}
            ref={arquivoInputRef} 
          />

          <ListaSuspensa
            obrigatorio={!criandoNovoTime}
            label="Time"
            itens={[...props.times, '+ Criar novo time']}
            valor={time}
            aoAlterado={(valor) => {
              if (valor === '+ Criar novo time') {
                setCriandoNovoTime(true);
                setTime('');
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