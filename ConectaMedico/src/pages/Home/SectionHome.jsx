import { useEffect, useState, useRef } from 'react'
import logo from '../../images/logo.png'
import './SectionInitial.css'
import "./SectionHome.css"

function SectionHome() {

  const [active, setActive] = useState(false);

  return (
    <div className='containerSectionHome'>
      <section className='sectionContent'>
        <div className='section1'>
          <div className='textSection1Esquerdo'>
            <h2 >Encontre Especialistas Para seu Caso</h2>
            <p className='paragrafoSection1'>Se você está em busca de profissionais altamente qualificados para tratar uma condição específica, o ConectaMedico é o seu guia confiável.</p>
          </div>
          <div className='textLoginSection1'>
            <div className='section1DireitoTopo'>
             <form id='formularioHome' action="" method="get">

              <h2>LOGIN</h2>

              <p className='paragrafoForm'>USUÁRIO</p>
              <input className='inputLogin' type="text" name="usuario" id="usuarioForm" placeholder='EDUARDA' required />

              <p className='paragrafoForm'>SENHA</p>
              <input className='inputLogin' type="password" name="senha" id="senhaForm" />

              <div className='btnLogin'>
                <button type='button'>ENTRAR</button>
                <button type='reset'>LIMPAR</button>
              </div>
             </form>
            </div>
            <div className='textSection1DireitoBaixo'>
              <h2>Como Funciona?</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionHome
