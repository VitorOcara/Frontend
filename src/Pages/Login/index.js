import {  useState } from "react"
import {  useHistory } from "react-router-dom"
import api from "../../services/api";
import './styles.css'

export function Login(){
    
    

    const[email, setEmail]= useState(''); 
    const[senha, setSenha]= useState(''); 

   
   
        const hystory = useHistory();

        async function handleLogin(event){
            event.preventDefault();

            const data = {email, senha}

            try{
                const response = await api.patch(`https://projetofinal01.herokuapp.com/login`, data)

                //const id = 
                console.log(response.data)

                hystory.push(`/Gerenciador/${response.data._id}`, {id:response.data._id})
            }catch(err){
                console.log(err)
            }

            
        }


    return(
        <div className= "back">

            <div className= "box">
                <form className= "loginView" onSubmit = {handleLogin}>
                    <label>Email</label>
                    <br/>
                    <input value= {email} onChange = {event => setEmail(event.target.value)} id= "email" type ="email" placeholder="aaaa@email.com"></input>
                    <br/>
                    <label>senha</label>
                    <br/>
                    <input value = {senha} onChange= {event => setSenha(event.target.value)} id="senha" type="password" placeholder="sua senha"></input>
                    <br/>

                    <button  type="submit" className="btn">subimt</button>
                </form>

            </div>
        </div>
    )
}