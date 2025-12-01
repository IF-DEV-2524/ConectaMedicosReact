import { useEffect, useState, useRef } from 'react'

import "./SectionMain.css"

function SectionMain() {

  const [active, setActive] = useState(false);

  return (
    <div className='containerSectionMain'>
      <main className='containerMain'>

        <h3 className='mainTextComoFunciona'>
          Nossa missão é conectar pacientes a especialistas médicos experientes, proporcionando orientação personalizada e cuidados excepcionais. Veja abaixo o passo a passo
        </h3>

        <div className='mainContainerCards'>
          <div className='card'>
            <div className='headerCard'>
              <h3>1 - Pesquisa Personalizada</h3>
            </div>
            <div className='bodyCard'>
              <p className='infoBodycard'>Digite o nome da sua doença ou condição na barra de pesquisa.<br />
                Nosso sistema inteligente identificará os especialistas mais adequados com base nas suas necessidades.</p>
            </div>
          </div>

          <div className='card'>
            <div className='headerCard'>
              <h3>2 - Perfil dos Especialistas</h3>
            </div>
            <div className='bodyCard'>
              <p className='infoBodycard'>Explore os perfis detalhados dos médicos. <br />
                Saiba sobre suas especialidades, experiência, áreas de atuação e avaliações de pacientes anteriores.</p>
            </div>
          </div>

          <div className='card'>
            <div className='headerCard'>
              <h3>3 - Agendamento Simples</h3>
            </div>
            <div className='bodyCard'>
              <p className='infoBodycard'>Marque consultas online diretamente pelo nosso site. <br />
                Escolha datas e horários convenientes para você.</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default SectionMain
