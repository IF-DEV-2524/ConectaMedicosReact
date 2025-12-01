import { useEffect, useState, useRef } from 'react'
import logo from '../../images/logo.png'
import './Home.css'

function Home() {

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

            <li id='page0' className='listPages'><button className='btnNavegador'><span id='itemBtn1'>INÍCIO </span></button></li>
            <li id='page1' className='listPages'><button className='btnNavegador'><span id='itemBtn2'>CONSULTAR</span></button></li>
            <li id='page2' className='listPages'><button className='btnNavegador'><span id='itemBtn3'>CADASTRAR</span></button></li>
            <li id='page3' className='listPages'><button className='btnNavegador'><span id='itemBtn4'>AGENDAMENTO</span></button></li>
            <li id='page4' className='listPages'><button className='btnNavegador'><span id='itemBtn5'>COMENTÁRIOS</span></button></li>
            <li id='page5' className='listPages'><button className='btnNavegador'><span id='itemBtn6'>FALE CONOSCO</span></button></li>
          </ul>

        </nav>
        <div className='userImage'>
          {/* Coloque a imagem do usuário aqui */}
        </div>
      </header>
    </div>
  )
}

export default Home
