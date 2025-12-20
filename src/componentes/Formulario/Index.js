import { useState } from 'react';
import CampoTexto from '../CampoTexto/Index';
import ListaSuspensa from '../ListaSuspensa/Index';
import Botao from '../botao/Botao';
import './Formlario.css';


const Formulario = (props) => {

   

    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    


    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({ 
            nome: nome,
            cargo: cargo,   
            imagem: imagem,
            time: time
        })
        
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>


                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu Nome" valor = {nome} aoAlterado={valor => setNome(valor)} />


                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu Cargo"  valor = {cargo} aoAlterado={valor => setCargo(valor)} />


                <CampoTexto label="Imagem" placeholder="Digite o seu endereço da Imagem" valor = {imagem} aoAlterado={valor => setImagem(valor)} /> 


                <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />


                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}


export default Formulario;