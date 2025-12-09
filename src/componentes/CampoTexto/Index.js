import "./CampoTexto.css";


const CampoTexto = (props) => {

    const PlaceholderModificado = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={PlaceholderModificado} />
        </div>
    )
}


export default CampoTexto