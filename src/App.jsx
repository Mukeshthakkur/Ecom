import React from 'react'
import { Route, Switch, Redirect} from "react-router-dom"; 
import Navbar from "./pages/navBar";
import Scholarship from "./pages/Scholarship";
import Oppertunitiy from "./pages/Oppertunity";
import Exchange from './pages/Exchange';
import Internship from "./pages/Internship";


function App() {
  return (
    <div>
      <Navbar /> 
      <Switch> 
        <Route path="/scholarship" component={Scholarship} /> 
        <Route path="./exchange" component={Exchange} />
        <Route path='/internship' component={Internship} /> 
        <Route path="./oppertunity" component={Oppertunitiy} /> 
        <Redirect from="any" to="/" />
        <Redirect to="notfound"/> 
      </Switch>
    </div>
  )
}


export default App
