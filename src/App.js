
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
