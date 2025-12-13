import { useState } from "react";
import "./CampoTexto.css";


const CampoTexto = (props) => {



    const PlaceholderModificado = `${props.placeholder}...`
    
    const aoDigitado = (evento) => {
      props.aoAlterado(evento.target.value);

    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={PlaceholderModificado} />
        </div>
    )
}


export default CampoTexto