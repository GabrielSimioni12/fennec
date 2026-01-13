import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        value={props.valor}
        onChange={evento => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        className={props.className}
      >
        <option value="">Selecione um time</option>

        {props.itens.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
