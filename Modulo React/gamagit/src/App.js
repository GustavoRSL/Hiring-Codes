import React, {useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

function App(props) {
  const [usuario, setUsuario] = useState('');
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response=> console.table(response.data));
  }


  return (
    <>
    <h1> { props.title } { props.user } </h1>
    <p> {usuario} </p>
    <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
    <button type="button" onClick={handlePesquisa}> Pesquisar </button>
    </>
  );
}

export default App;

// Array useState [usuario, setUsuario]