import './App.css'

import DivRadiusTop from './components/DivRadiusTop'
import DivTitulo from './components/DivTitulo'
import DivImagemTexto from './components/DivImagemTexto'
import InputForm from './components/InputForm'
import Mensagens from './components/Mensagens'
import mulherMensagem from "./assets/mulherMensagem.svg"
import homemMensagem from "./assets/homemMensagem.svg"

function App() {

  return (
    <main>
      <DivRadiusTop/>
      <DivTitulo/>
      <DivImagemTexto/>
      <InputForm/>
      <div className='divMensagens'>
        <Mensagens
          foto={mulherMensagem}
          text="Boris estou no local já lhe esperando. estou com camisa azul e calça jeans"
        />
        <Mensagens
          foto={homemMensagem}
          text="Acabei de lhe ver. Vou estacionar o carro próximo."
        />
      </div>
    </main>
  )
}

export default App
