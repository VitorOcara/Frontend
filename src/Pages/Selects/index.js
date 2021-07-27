import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api';
import './styles.css'

export function Selects(){
    const hystory = useHistory();

    function handleNavigate(id){
        hystory.push(`/Informacoes/${id}`, {id})
    }
    const[lista, setLista] = useState([]);

    useEffect(
        ()=>{
            api.get('https://projetofinal01.herokuapp.com/clientes').then(response => {
            setLista(response.data)

        })
    });


    let lis = lista.map(
        (lista)=>(
            
            <li>
                <strong>Nome: </strong> {lista.nome} {lista.sobrenome} :
                <strong> {lista.profissao} </strong>
                    <button onClick = { () => handleNavigate(lista.id) } className= "btn" type="button" > Mais informações</button>

            </li>
        )
    );

    return(
        <div className = "box_1">
           <ul className= "lista_cadastrados">
               {lis}
           </ul>
        </div>
    )
}

