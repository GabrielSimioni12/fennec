import Colaborador from '../Colaborador/colaborador'
import Particulas from '../ParticulasEfect/particula'
import './Time.css'

const Time = ({ nome, corPrimaria, colaboradores, mudarCorDoTime, fotoFundo, aoDeletar }) => {
    const estiloFundo = {
        backgroundImage: `url(${fotoFundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#154580', // Cor fallback
        backgroundBlendMode: 'multiply', // Mistura a cor com a imagem para dar destaque
        position: 'relative',
        overflow: 'hidden'
    }

    return (
        colaboradores.length > 0 && (
            <section className='time' style={estiloFundo}>
                {/* Partículas brilhando com a cor do time */}
                <Particulas quantidade={30} corDoBrilho={corPrimaria} />

                <input 
                    onChange={evento => mudarCorDoTime(evento.target.value, nome)} 
                    value={corPrimaria} 
                    type='color' 
                    className='input-cor' 
                    style={{ zIndex: 10 }}
                />
                
                {/* Título branco com borda colorida */}
                <h3 style={{ borderColor: corPrimaria, color: '#FFFFFF', position: 'relative', zIndex: 1 }}>
                    {nome}
                </h3>

                <div className='colaboradores' style={{ position: 'relative', zIndex: 1 }}>
                    {colaboradores.map((colaborador, indice) => (
                        <Colaborador 
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo={corPrimaria} 
                            aoDeletar={() => aoDeletar(colaborador.id)} 
                        />
                    ))}
                </div>
            </section>
        )
    )
}

export default Time