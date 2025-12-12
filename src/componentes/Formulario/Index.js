import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa/Index';
import Botao from '../botao/Botao';
import './Formlario.css';


const Formulario = () => {

    const times = ['TI', 'Marketing', 'Vendas', 'RH', 'Financeiro', 'Operações', 'Jurídico'];

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu Nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu Cargo" />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o seu endereço da Imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}


export default Formulario;