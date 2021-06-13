import logo from './logo.svg';
// import './App.css';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import Landing from '../src/pages/LandingPage/Landing';
import Login from '../src/pages/Login';
import Subjects from '../src/pages/Subjects/Subject'
import Quiz from '../src/pages/Quiz/Quiz'
import Navbar from '../src/pages/Navbar'
import Score from '../src/pages/Score'
require('dotenv').config()


// import './style.scss';

const App =()=> {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
      <Route exact path="/" name="Landing Page" component={Landing}/>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/subjects" name="Subject Page" component={Subjects}/>
      <Route exact path="/quiz" name="Quiz Page" component={Quiz}/>
      <Route exact path="/score" name="Score" component={Score}/>

      </Switch>
    </BrowserRouter>
  );
}
 
export default App;
