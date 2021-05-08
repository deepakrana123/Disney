import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import './App.css';
import Login from "./component/Login";
import Header from "./component/Header";
import Home from "./component/Home";
import Deatil from "./component/Deatil";

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
    <Route exact path="/">
  
    <Login/>
    </Route>
    <Route   path="/home">
    <Home/>
    </Route>
    <Route  path="/detail/:id"/>
    <Deatil/>
    
    </Switch>
    </Router>
   </div>
  );
}

export default App;
