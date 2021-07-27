import { Route, Switch } from "react-router-dom";
import { TelaPrincipal } from "./components/TelaPrincipal";
import { Cadastro } from "./Pages/Cadastro";
import { Gerenciador } from "./Pages/Gerenciador";
import { Informacoes } from "./Pages/Informacoes";
import { Login } from "./Pages/Login";
import { Selects } from "./Pages/Selects";

export function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={TelaPrincipal}/>
            <Route path="/Login" component={Login}/>
            <Route path= "/Cadastro" component= {Cadastro} />
            <Route path ="/Gerenciador" component = {Gerenciador}/>
            <Route path ="/Selects" component = {Selects}/>
            <Route path ="/Informacoes" component = {Informacoes}/>
      </Switch>
    )
}