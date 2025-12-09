import CampoTexto from '../CampoTexto/Index';
import './Formlario.css';

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o seu endereço da Imagem" />
            </form>
        </section>
    )
}


export default Formulario;