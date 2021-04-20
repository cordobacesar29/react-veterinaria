import {Pagina} from './Pagina';
import { Switch, Route } from "react-router-dom";
import { Nav } from './component/Nav/Nav';

function App() {
  return (
    <div className="container">
      <Nav/>
      <Switch>
        <Route 
          exact path='/' 
          component={(props)=>(
            <Pagina {...props} titulo='Mascotas' entidad='mascotas'/>
          )} 
        />
        <Route 
          path='/propietario' 
          component={(props)=>(
            <Pagina {...props} titulo='Propietarios' entidad='propietarios'/>
          )}
        />
        <Route 
          path='/profesional' 
          component={(props)=>(
            <Pagina {...props} titulo='Profesionales' entidad='profesionales'/>
          )}
        />
        <Route 
          path='/consultas' 
          component={(props)=>(
            <Pagina {...props} titulo='Consultas' entidad='consultas'/>
          )}
        />
      </Switch>
    </div>  
  );
}

export default App;