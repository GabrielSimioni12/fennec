import Colaborador from '../Colaborador/colaborador'
import './time.css'

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, mudarCorDoTime }) => {
    return (
        colaboradores.length > 0 && (
            <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: corSecundaria }}>
                <input 
                    onChange={evento => mudarCorDoTime(evento.target.value, nome)} 
                    value={corSecundaria} 
                    type='color' 
                    className='input-cor' 
                />
                
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