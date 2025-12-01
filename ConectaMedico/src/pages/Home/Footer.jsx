import { useEffect, useState, useRef } from 'react'
import logo from '../../images/logo.png'
import './SectionFooter.css'


function SectionFooter() {

    const [active, setActive] = useState(false);

    return (
        <div className='containerSectionFooter'>
            <footer className='footer'>
                <div className='footerImgLogo'>
                    <img id='idLogoFooter' src={logo} alt="Conecta Médico Logo" />
                </div>
                <div className='footerInfo'>
                    <div id='infoInicialFooter' className='containersFooterinfo'>
                        <p>CNPJ: 00.000.000/0001-11</p>
                        <p>Rod. XX , Estado - MG</p>
                        <p>Tel: (31) 0000-0000</p>
                    </div>
                    <div className='containersFooterinfo'>
                        <p>Redes Sociais</p>
                        <p>@Conectamedico</p>
                    </div>
                    <div className='containersFooterinfo'>
                        <p>Política de Privacidade</p>

                        <p>© 2024 CONECTA MEDICO</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default SectionFooter
