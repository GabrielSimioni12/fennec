import Colaborador from '../Colaborador/colaborador'
import './time.css'

// Ajustei a desestruturação para receber os campos direto, sem o objeto "time"
const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
    return (
        colaboradores.length > 0 && (
            <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: corSecundaria }}>
                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map((colaborador, indice) => (
                        <Colaborador 
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo={corPrimaria} 
                        />
                    ))}
                </div>
            </section>
        )
    )
}

export default Time