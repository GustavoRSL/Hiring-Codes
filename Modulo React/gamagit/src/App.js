import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [usuario, setUsuario] = useState('GustavoRSL');
  return (
    <>
    <h1> { props.title } { props.user } </h1>
    <p> {usuario} </p>
    <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" />
    <button type="button"> Pesquisar </button>
    </>
  );
}

export default App;

// Array useState [usuario, setUsuario]