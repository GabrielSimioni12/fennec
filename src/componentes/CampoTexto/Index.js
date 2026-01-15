import React, { forwardRef } from 'react';
import "./CampoTexto.css";

const CampoTexto = forwardRef((props, ref) => {
    const PlaceholderModificado = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    const aoArquivoSelecionado = (evento) => {
        const arquivo = evento.target.files[0];
        if (arquivo) {
            const leitor = new FileReader();
            leitor.onloadend = () => {
                props.aoAlterado(leitor.result);
            };
            leitor.readAsDataURL(arquivo);
        }
    };

    return (
        <div className={`campo-texto ${props.type === 'file' ? 'campo-arquivo' : ''}`}>
            <label>{props.label}</label>
            {props.type === 'file' ? (
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={aoArquivoSelecionado}
                    required={props.obrigatorio}
                    ref={ref} 
                />
            ) : (
                <input 
                    value={props.valor} 
                    onChange={aoDigitado} 
                    required={props.obrigatorio} 
                    placeholder={PlaceholderModificado} 
                />
            )}
        </div>
    );
});

export default CampoTexto;