import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time/Time';

function App() {

   const times = [
    {
      nome: 'TI',
      corPrimaria: '#454545',
      corSecundaria: '#547792'
    }, 

      {
      nome: 'Marketing',
      corPrimaria: '#3D1860',
      corSecundaria: '#643579'
    }, 

      {
      nome: 'Vendas',
      corPrimaria: '#443627',
      corSecundaria: '#D98324'
    }, 

      {
      nome: 'RH',
      corPrimaria: '#FF5555',
      corSecundaria: '#FF937E'
    }, 

      {
      nome: 'Financeiro',
      corPrimaria: '#5B913B',
      corSecundaria: '#77B254'
    }, 

      {
      nome: 'Operações',
      corPrimaria: '#3C467B',
      corSecundaria: '#50589C'
    }, 

      {
      nome: 'Jurídico',
      corPrimaria: '#E62727',
      corSecundaria: '#F3F2EC'
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
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />

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

