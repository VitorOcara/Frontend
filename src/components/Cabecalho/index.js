import { Link } from "react-router-dom";
import './styles.css'
export default function Cabecalho(){
    return(
        <div className="principal">

            
            <header className= "inrriba">
                O Melhor site para Serviços Diversos

                <div className="links">
                    <Link to= "/">Home</Link>
                </div>
                <div className="links">
                    <Link to= "/Cadastro" >Cadastro</Link>
                </div>
                <div className="links">
                    <Link to= "/Login">Login</Link>
                </div>

            </header>
        </div>
    )
}