import "./style.css"
import lixeira from "../../assets/lixeira.svg"

interface MessageProps {
    foto: any;
    text: string;
}
  
  export default function Message({ foto, text }: MessageProps) {
    return(

        <div className="mensagem">
            <div className="box">
                <img src={foto} alt="foto"/>
                <p>{text}</p>
            </div>
            <i><img src={lixeira} alt="" /></i>
        </div>
        
    )
  }
  