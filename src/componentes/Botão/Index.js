import './botão.css';

const botão = (props) => {
    return (
        <button className="botão">
            {props.children}
        </button>
    )
}

export default botão;