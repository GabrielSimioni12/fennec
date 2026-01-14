import { useState } from 'react';
import { AiFillCloseCircle, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    const [confirmandoExclusao, setConfirmandoExclusao] = useState(false);
    const avatarDiceBear = `https://api.dicebear.com/7.x/initials/svg?seed=${colaborador.nome}`;

    return (
        <div className="colaborador">
            {/* Botão de deletar principal */}
            <AiFillCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => setConfirmandoExclusao(true)} 
            />

            {/* Caixa de Confirmação Estilizada (Overlay) */}
            {confirmandoExclusao && (
                <div className="overlay-deletar">
                    <p>Excluir?</p>
                    <div className="botoes-confirmacao">
                        <button className="btn-sim" onClick={() => aoDeletar(colaborador.id)}>
                            <AiOutlineCheck size={20} />
                        </button>
                        <button className="btn-nao" onClick={() => setConfirmandoExclusao(false)}>
                            <AiOutlineClose size={20} />
                        </button>
                    </div>
                </div>
            )}
            
            <div className="cabecalho" style={{ background: `linear-gradient(180deg, ${corDeFundo} 0%, #212121 100%)` }}>
                <img src={colaborador.imagem ? colaborador.imagem : avatarDiceBear} alt={colaborador.nome} />
            </div>
            
            <div className="rodape">
                <h4 style={{ color: '#FFFFFF' }}>{colaborador.nome}</h4>
                <h5 style={{ color: '#FFFFFF' }}>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;