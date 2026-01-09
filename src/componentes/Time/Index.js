import Colaborador from '../Colaborador/colaborador'
import './time.css'

const Time = ({ nome, corPrimaria, colaboradores, mudarCorDoTime, fotoFundo }) => {
    const estiloFundo = {
        backgroundImage: `url(${fotoFundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#154580', // Cor de backup caso a imagem falhe
        backgroundBlendMode: 'multiply' // Ajuda a escurecer a imagem para os textos brancos brilharem
    }

    return (
        colaboradores.length > 0 && (
            <section className='time' style={estiloFundo}>
                <input 
                    onChange={evento => mudarCorDoTime(evento.target.value, nome)} 
                    value={corPrimaria} 
                    type='color' 
                    className='input-cor' 
                />
                
                <h3 style={{ borderColor: corPrimaria, color: '#FFFFFF' }}>{nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map((colaborador, indice) => (
                        <Colaborador 
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo={corPrimaria} 
                            aoDeletar={() => console.log('deletar')}
                        />
                    ))}
                </div>
            </section>
        )
    )
}

export default Time