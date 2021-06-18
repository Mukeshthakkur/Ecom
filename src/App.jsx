import React from 'react'
import { Route, Switch, Redirect} from "react-router-dom"; 
import Navbar from "./pages/navBar";
import Scholarship from "./pages/Scholarship";
import Oppertunitiy from "./pages/Oppertunity";
import Exchange from './pages/Exchange';
import Internship from "./pages/Internship";
import Home from "./pages/home";
import Addpost from "./pages/addpost"


function App() {
  return (
    <div>
      <Navbar /> 
      <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/scholarship" component={Scholarship} /> 
        <Route path="/exchange" component={Exchange} />
        <Route path='/internship' component={Internship} /> 
        <Route path="/oppertunity" component={Oppertunitiy} /> 
        <Route path="/addpost" component={Addpost} /> 
        <Redirect from="any" to="/" />
        <Redirect to="notfound"/> 
      </Switch> 
    </div>
  )
}


export default App
