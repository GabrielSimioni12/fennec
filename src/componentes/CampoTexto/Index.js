import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const [preview, setPreview] = useState(null);
  const PlaceholderModificado = `${props.placeholder}...`;

  // Texto normal
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
    setPreview(null);
  };

  // Upload de imagem
  const aoArquivoSelecionado = (evento) => {
    const arquivo = evento.target.files[0];

    if (arquivo) {
      const leitor = new FileReader();

      leitor.onloadend = () => {
        setPreview(leitor.result);
        props.aoAlterado(leitor.result);
      };

      leitor.readAsDataURL(arquivo);
    }
  };

  return (
    <div className={`campo-texto ${props.type === "file" ? "campo-arquivo" : ""}`}>
      <label>{props.label}</label>

      {props.type === "file" ? (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={aoArquivoSelecionado}
            required={props.obrigatorio}
          />

          {preview && (
            <div className="preview-imagem">
              <img src={preview} alt="Preview da imagem" />
            </div>
          )}
        </>
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
};

export default CampoTexto;
