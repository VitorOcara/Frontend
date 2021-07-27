import './styles.css'
import { Link, Router } from "react-router-dom";
import Cabecalho from '../Cabecalho';
export function TelaPrincipal(){
    return (
        <div className="background">

            <h1>Conheça o melhor site para procurar profissionais em diversas áreas</h1>

            
            <div className="funcionalidades">
                <h3>Aqui você encontra o profissional que você precisa!</h3>
                <h3>Nosso site oferece os melhores meios para você encontrar o trabalhador certo para o seu serviço! </h3>
                <div className= "link">
                    <Link to="/Selects"><h2>Deseja ver os profissionais disponíveis? Click aqui!</h2></Link> 
                </div>
            </div>

        </div>
    )
}
