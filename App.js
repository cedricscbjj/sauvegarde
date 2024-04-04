import { Link } from "react-router-dom";
import Nav from "./Nav";
import './App.css'; //fichier de point d 'entree
const App = () => {
  return (
    <div className="container">
      <h2>Logiciel de sauvegarde de données</h2>

      <br /><br />
<div class="row">

<div class="col">     <Link className="nav-link " to="/">
         Envoyer des données
        </Link>   </div>

        <br /><br />
<div class="col">   <Link className="nav-link " to="getspecificdata">
          Recevoir des données ciblées
        </Link>    </div>

        <br /><br />
<div class="col">  <Link className="nav-link" to="getalldata">
          Recevoir toutes les données
        </Link>     </div>

</div>
<br /><br />




      <div>


        <h3>
          <Nav />
        </h3>
      </div>
    </div>
  );
};
export default App;


