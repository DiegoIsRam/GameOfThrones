import {Route} from 'react-router-dom';
import CreateHouse from "./components/CreateHouse/CreateHouse";
import HouseDetail from "./components/HouseDetail/HouseDetail";
import Houses from './components/Houses/Houses'
import Nav from "./components/Nav/Nav";


function App(){
    return (
        <div>
            <Nav></Nav>
            <Route path="/" component ={Houses}/>
            <Route path="/houses/:houseId" component = {HouseDetail}/>
            <Route path="/houses/create" component = {CreateHouse}/>
        </div>
    );
}