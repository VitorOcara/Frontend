import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import api from "../../services/api";
import './styles.css'


export function Gerenciador(props){

    const[nome, setNome]= useState('');
    const[sobrenome, setSobrenome] = useState('');  
    const[email, setEmail]= useState('');
    const[cidade, setCidade] = useState('');
    const[bairro, setBairro] = useState('');
    const[telefone, setTelefone] = useState('');
    const[profissao, setProfissao]= useState('');
    const[senha, setSenha]= useState(''); 


    const history = useHistory();

    const location = useLocation();
    const id = location.state?.id
   
    useEffect(
        ()=>{
            api.get(`https://projetofinal01.herokuapp.com/busca_clientes/${id}`).then(response => {
                
                console.log(response.data)

                setNome(response.data.nome);
                setSobrenome(response.data.sobrenome);
                setCidade(response.data.cidade);
                setBairro(response.data.bairro);
                setEmail(response.data.email);
                setSenha(response.data.senha);
                setTelefone(response.data.telefone);
                setProfissao(response.data.profissao);



            }).catch(err => console.log(err))

        }, [id])


    async function doAtt(event){
        event.preventDefault();
        try {
            await api.patch(`https://projetofinal01.herokuapp.com/clientes/${id}`, {id,nome,sobrenome,email,cidade,bairro,telefone,senha,profissao})
            alert("Atualizado Com sucesso!")
            history.push(`/Gerenciador/${id}` , {id})
        } catch (err) {
            alert("falha na Atualização")
        }
    }
    async function doDelete(event){
        event.preventDefault();
        try {
             await api.delete(`https://projetofinal01.herokuapp.com/clientes/${id}`)
        alert("DELETADO COM SUCESSO!");
            history.push("/")
        } catch (err) {
            alert("falha na Remoção")
        }
    }



    return(
        <div>
            <div className = "gerenciadora">
                <div className = "opcoes">

                    <button onClick= {doAtt}  className = "btn">ATUALIZAR MINHAS INFORMAÇÕES</button>

                    <button onClick ={doDelete} className = "btn" > APAGAR MINHA CONTA </button>
                </div>
                <div className="A">
                    <div className= "minhas_informacoes">


                     
                        <form>
                            <label>Nome</label>
                            <br/>
                            <input value= {nome} onChange = {event => setNome(event.target.value)} id= "nome" type ="text"></input>
                            <br/>
                            <label>Sobrenome</label>
                            <br/>
                            <input value= {sobrenome} onChange = {event => setSobrenome(event.target.value)} id= "sobrenome" type ="text" ></input>
                            <br/>
                            <label>Email</label>
                            <br/>
                            <input value= {email} onChange = {event => setEmail(event.target.value)} id= "email" type ="email" ></input>
                            <br/>
                            <label>Cidade</label>
                            <br/>
                            <input value= {cidade} onChange = {event => setCidade(event.target.value)} id= "cidade" type ="text" ></input>
                            <br/>
                            <label>Bairro</label>
                            <br/>
                            <input value= {bairro} onChange = {event => setBairro(event.target.value)} id= "bairro" type ="text" ></input>
                            <br/>
                            <label>telefone</label>
                            <br/>
                            <input value={telefone} onChange= {event=> setTelefone(event.target.value)} id= "telefone" type ="text" ></input>
                            <br/>
                            <label>Profissão</label>
                            <br/>
                            <input value={profissao} onChange= {event=> setProfissao(event.target.value)}  id="profissao" type="text" ></input>
                            <br/>
                            <label>Senha</label>
                            <br/>
                            <input value = {senha} onChange= {event => setSenha(event.target.value)} id="senha" type="password"     ></input>
                            <br/>
                        </form>



                    </div>
                </div>
                

            </div>
        </div>
    )
}