import { Route} from 'react-router-dom';
import CreateHouse from './components/CreateHouse/CreateHouse';
import HouseDetail from './components/HouseDetail/HouseDetail';
import Houses from './components/Houses/Houses';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
        <Nav></Nav>
        <Route exact path="/" component={Houses}></Route>
        <Route exact path="/houses/:houseId" component={HouseDetail}></Route>
        <Route exact path="/house/create" component={CreateHouse}/>
    </div>
  );
};



export default App;
