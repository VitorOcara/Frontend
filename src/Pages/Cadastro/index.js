import './styles.css'
import api from '../../services/api'
import { useEffect, useState } from 'react';
import { useHistory , useLocation } from 'react-router-dom';


export function Cadastro(){

       
    const history = useHistory();
    const[lista, setLista] = useState([]);
 

    const[nome, setNome]= useState('');
    const[sobrenome, setSobrenome] = useState('');  
    const[email, setEmail]= useState('');
    const[cidade, setCidade] = useState('');
    const[bairro, setBairro] = useState('');
    const[telefone, setTelefone] = useState('');
    const[profissao, setProfissao]= useState('');
    const[senha, setSenha]= useState(''); 



    async function fazerCadastro(event){
        event.preventDefault();
        try {
            const response = await api.post("http://localhost:8393/clientes", {nome,sobrenome,email,cidade,bairro,telefone,profissao,senha})           
            alert("Cadastrado com sucesso!")
            history.push(`/Login/`)


        } catch (err) {
            alert("Falha no Cadastro!")
        }
    }


    
    return(
        <div className= "back">
            <div className= "text"><h1>É rápido e fácil</h1></div>
            <div className= "box1">
                <form className= "loginView">
                    <label>Nome</label>
                    <br/>
                    <input value= {nome} onChange = {event => setNome(event.target.value)} id= "nome" type ="text" placeholder="nome"></input>
                    <br/>
                    <label>Sobrenome</label>
                    <br/>
                    <input value= {sobrenome} onChange = {event => setSobrenome(event.target.value)} id= "sobrenome" type ="text" placeholder="Sobrenome"></input>
                    <br/>
                    <label>Email</label>
                    <br/>
                    <input value= {email} onChange = {event => setEmail(event.target.value)} id= "email" type ="email" placeholder="aaaa@email.com"></input>
                    <br/>
                    <label>Cidade</label>
                    <br/>
                    <input value= {cidade} onChange = {event => setCidade(event.target.value)} id= "cidade" type ="text" placeholder="Cidade"></input>
                    <br/>
                    <label>Bairro</label>
                    <br/>
                    <input value= {bairro} onChange = {event => setBairro(event.target.value)} id= "bairro" type ="text" placeholder="Bairro"></input>
                    <br/>
                    <label>telefone</label>
                    <br/>
                    <input value={telefone} onChange= {event=> setTelefone(event.target.value)} id= "telefone" type ="text" placeholder="555555-000"></input>
                    <br/>
                    <label>Profissão</label>
                    <br/>
                    <input value={profissao} onChange= {event=> setProfissao(event.target.value)}  id="profissao" type="text" placeholder="profissão"></input>
                    <br/>
                    <label>Senha</label>
                    <br/>
                    <input value = {senha} onChange= {event => setSenha(event.target.value)} id="senha" type="password" placeholder="sua senha"></input>
                    <br/>

                    <button type="submit" onClick={fazerCadastro}  className="btn">Cadastrar</button>

                </form>

            </div>
        </div>
    )
}