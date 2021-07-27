import { useEffect, useState } from 'react';

import { useHistory , useLocation} from 'react-router-dom';
import api from '../../services/api';
import './styles.css'
export function Informacoes(props){

    const location = useLocation();
    const id = location.state?.id
    const[info, setInfo] = useState();
    
    useEffect(
        ()=>{
            api.get(`http://localhost:8393/busca_clientes/${id}`).then(response => {
                
                setInfo(response.data)
                //console.log(response.data)
            }).catch(err => console.log(err))

        }, [])

    return(
        <div >
            <div className= "Informacoes">
                <ul>
                    <li>   
                        <strong>Nome: </strong>{info?.nome} {info?.sobrenome} 
                    </li>
                    <li>
                       <strong>Cidade: </strong> {info?.cidade}
                    </li>
                    <li>
                        <strong>Bairro: </strong> {info?.bairro}
                    </li>

                    <li>
                        <strong>Telefone: </strong> {info?.telefone} 
                    </li>
                    <li>
                        <strong>Email: </strong>{info?.email} 
                    </li>
                    <li>
                        <strong>Profissão: </strong>{info?.profissao} 
                    </li>

                </ul>
            </div>
        </div>
    )
}