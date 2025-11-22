import { useEffect, useState, useRef } from 'react'
import logo from '../../images/logo.png'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'

function Index() {

  const [active, setActive] = useState(false);

  function statusBtn() {
    setActive(!active);
  }

  return (
    <div className='container'>
      <header className='head'>

        <img id='logo' src={logo} alt="Logo" />

        <div id='controleCentral'>
          <h2 className='centralizaTexto' >CONECTA MÉDICO</h2>

          <div
            id='btnMobile'
            className={`btnMobile ${active ? 'active' : 'desactive'}`}
            onClick={statusBtn}>
            <div className={`efectsBtn ${active ? 'active' : 'desactive'}`}>

            </div>
          </div>
        </div>
        <nav className={`navegaPgn ${active ? 'active' : 'desactive'}`}>

          <ul className='controladorList'>

            <li id='page0' className='listPages'><button className='btnNavegador'>INÍCIO</button></li>
            <li id='page1' className='listPages'><button className='btnNavegador'>CONSULTAR</button></li>
            <li id='page2' className='listPages'><button className='btnNavegador'>CADASTRAR</button></li>
            <li id='page3' className='listPages'><button className='btnNavegador'>AGENDAMENTO</button></li>
            <li id='page4' className='listPages'><button className='btnNavegador'>COMENTÁRIOS</button></li>
            <li id='page5' className='listPages'><button className='btnNavegador'>FALE CONOSCO</button></li>
          </ul>

        </nav>
        <div className='userImage'>
          {/* Coloque a imagem do usuário aqui */}
        </div>
      </header>
    </div>
  )
}

export default Index
