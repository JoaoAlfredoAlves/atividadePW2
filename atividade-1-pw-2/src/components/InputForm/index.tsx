import "./style.css"
import iconeTelefone from "../../assets/iconeTelefone.svg"
import iconeEscudoPlus from "../../assets/iconeEscudoPlus.svg"

function Formulario(){

    return(

        <div className="formulario">

            <input type="text" placeholder="Enviar mensagem para Fábio..."/>
            <button>Publicar</button>
            <img src={iconeTelefone} alt="icone telefone"/>
            <img src={iconeEscudoPlus} alt="icone escudo"/>

        </div>
    )


}

export default Formulario;