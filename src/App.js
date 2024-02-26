import{useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import './style.css';
import api from './services/api';
function App() {

  const [input, setInput] = useState('')
async function handleSearch(){
      // 65930000/json/

      if (input === ''){
        alert("Preencha alguma cep")
        return;
      }
      try{
        const response = await api.get('${input}/json');
        console.log(response.data)

      }catch{alert("Ops erro ao buscar")
      setInput("")

      }
}

  return (
    <div className="container">
      <h1 className="title">Buscador de Cep</h1>

      <div className="containerInput">
       
       
        <input type="text" placeholder="Digite seu Cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 65930000</h2>
        <span>Complemento: Algum Complemento</span>
        <span>Vila rosa</span>
        <span>Acailândia - MA </span>
      </main>

    </div>
  );
}

export default App;
