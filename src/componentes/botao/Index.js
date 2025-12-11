import './botao.css';

const botão = (props) => {
    return (
        <button className="botao">
            {props.children}
        </button>
    )
}

export default botão;