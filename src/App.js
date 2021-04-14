import {Pagina} from './Pagina';
import { Switch, Route } from "react-router-dom";
import { Nav } from './component/Nav/Nav';


function App() {
  return (
    <div class="container">
      <Nav/>
      <Switch>
        <Route 
          exact path='/' 
          component={()=>(
            <Pagina titulo='Mascotas' entidad='mascotas'/>
          )} 
        />
        <Route 
          path='/propietario' 
          component={()=>(
            <Pagina titulo='Propietarios' entidad='propietarios'/>
          )}
        />
        <Route 
          path='/profesional' 
          component={()=>(
            <Pagina titulo='Mascotas' entidad='mascotas'/>
          )}
        />
        <Route 
          path='/consultas' 
          component={()=>(
            <Pagina titulo='Mascotas' entidad='mascotas'/>
          )}
        />
      </Switch>
    </div>  
  );
}

export default App;