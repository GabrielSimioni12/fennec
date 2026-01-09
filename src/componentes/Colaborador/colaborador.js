import { AiFillCloseCircle } from 'react-icons/ai';
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (
        <div className="colaborador">
            <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar} />
            
            <div className="cabecalho" style={{ background: `linear-gradient(180deg, ${corDeFundo} 0%, #212121 100%)` }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            
            <div className="rodape">
                <h4 style={{ color: '#FFFFFF' }}>{colaborador.nome}</h4>
                <h5 style={{ color: '#FFFFFF' }}>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador