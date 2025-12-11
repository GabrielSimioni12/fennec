import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa/Index';
import './Formlario.css';

const Formulario = () => {

    const times = ['TI', 'Marketing', 'Vendas', 'RH', 'Financeiro', 'Operações', 'Jurídico'];

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o seu endereço da Imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <button>Criar Card</button>

            </form>
        </section>
    )
}


export default Formulario;