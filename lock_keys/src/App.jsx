import { useState, useEffect } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
import ShowGames from '../components/showGames.jsx';
import useSteamApi from '../hooks/useSteamAPI.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [selectPerfil, setSelectPerfil] = useState(0);
  const [arrayJogos, setArrayJogos] = useState([])
  
  useEffect(
    () => {
      async function carregarImagem() {
        const imageLink = await useSteamApi('108600')
        if(imageLink) {
        setArrayJogos((anterior) => {if(arrayJogos.includes(imageLink)) {return anterior} else { return [...anterior, imageLink]}})
      }
      }
      carregarImagem()
    }, []
  );

  return (
    <>
    <header>
      {/* TITULO */}
      <h1>Lock Keys</h1>


      {/* PERFIL DO USUÁRIO */}
      <select name="" id="" value={selectPerfil} onChange={(e) => setSelectPerfil(e.target.value)}>
          <option value="0">nome_usuario</option>
          <option value="1">cadastro</option>
          <option value="2">login</option>
        </select>

      <nav>
        {/* FILTRO DE PESQUISA -- GÊNERO DOS JOGOS */}
        <select name="" id="" onChange="">
          <option value="0">Filtrar Gênero</option>
          <option value="1">Sobrevivência</option>
          <option value="2">Rogue Like</option>
          <option value="3">RPG</option>
          <option value="4">FPS</option>
          <option value="5">Construção</option>
        </select>

        {/* FILTRO DE PESQUISA -- PREÇO DOS JOGOS */}
        <select name="" id="" onChange="">
            <option value="0">Filtrar por preço</option>
            <option value="1">Até R$100</option>
            <option value="2">Até R$50</option>
            <option value="3">Até R$30</option>
        </select>

        {/* BARRA DE PESQUISA */}
        <input type="search" onChange="" placeholder="Pesquise um jogo"></input>
        
      </nav>
    </header>
    
    <section>
      {selectPerfil == 1 ? (
        <>
        {/* BOTÃO DE VOLTAR -- RETORNA A PÁGINA PRO ESTADO SEM FILTRO DE PERFIL, OU SEJA, VITRINE */}
        <button type="button" id="buttonCadastroVoltar" onClick={() => setSelectPerfil(0)}>X</button>

        <h1 id="h1TituloCadastro">Cadastro</h1>
				<h5 className="h5Cadastro">Nome</h5><input type="text" className="inputCadastro" id="nomeHtmlCadastro" placeholder="João Silva"></input>
				<h5 className="h5Cadastro">Email</h5><input type="text" className="inputCadastro" id="emailHtmlCadastro" placeholder="exemplo@gmail.com"></input>
				<h5 className="h5Cadastro">Telefone</h5><input type="text" className="inputCadastro" id="telefoneHtmlCadastro" placeholder="(00) 00000-0000"></input>
				<h5 className="h5Cadastro">Senha</h5><input type="password" className="inputCadastro"id="senhaHtmlCadastro" placeholder="Mínimo 11 caracteres"></input>
				<h5 className="h5Cadastro">Repetir senha</h5><input type="password" className="inputCadastro" id="senhaRepetidaHtmlCadastro" placeholder="Repita a senha"></input>
				<button type="button" id="buttonHtmlCadastroContinuar" onClick="">Continuar</button>
			</>
      ) : selectPerfil == 2 ? (
        <>
        {/* BOTÃO DE VOLTAR -- RETORNA A PÁGINA PRO ESTADO SEM FILTRO DE PERFIL, OU SEJA, VITRINE */}
        <button type="button" id="buttonHtmlLoginVoltar" onClick={() => setSelectPerfil(0)}>X</button>

				<h1 id="login-h1">Log in</h1>
				<h5 id="loginH5Email">Email</h5>
				<input type="text" id="emailHtmlLogin" placeholder="Digite seu email"></input>
				<h5 id="loginH5Senha">Senha</h5>
				<input type="password" id="senhaLoginInput" placeholder="Digite sua senha"></input>
				<button type="button" id="buttonHtmlLoginContinuar" onClick="verificarLogin()">Continuar</button>
        </>
      ) : (
        <ShowGames link={arrayJogos} />

      )
      
    }

    </section>
    <aside>

    </aside>
    <footer>

    </footer>
    </>
  )
}

export default App
