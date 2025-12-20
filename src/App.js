import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time/Time';

function App() {

   const times = [
    {
      nome: 'TI',
      corPrimaria: '#383838ff',
      corSecundaria: '#D9F7E9'
    }, 

      {
      nome: 'Marketing',
      corPrimaria: '#E06B69',
      corSecundaria: '#F3F2EC'
    }, 

      {
      nome: 'Vendas',
      corPrimaria: '#008cffff',
      corSecundaria: '#E8F8FF'
    }, 

      {
      nome: 'RH',
      corPrimaria: '#FFBA05',
      corSecundaria: '#F3F2EC'
    }, 

      {
      nome: 'Financeiro',
      corPrimaria: '#5B913B',
      corSecundaria: '#F3F2EC'
    }, 

      {
      nome: 'Operações',
      corPrimaria: '#3C467B',
      corSecundaria: '#F0F8E2'
    }, 

      {
      nome: 'Jurídico',
      corPrimaria: '#E62727',
      corSecundaria: '#F0F8E2'
    }, 

   ]
   
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
    

      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}

      
    


      


      
    
    </div>
  );
}

export default App;

