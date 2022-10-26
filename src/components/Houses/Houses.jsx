import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllHouses } from '../../redux/actions';
import logo from "../../img-cp2/main-image-cp2.jpg"
import HouseCard from '../HouseCard/HouseCard';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS 
// Y MAP_DISPATCH_TO_PROPS!! <3
export class Houses extends Component {
    componentDidMount() {
        this.props.getAllHouses();
    }
    render() {
        return (
            <div>
                <h1>Game of Thrones</h1>
                <img src={logo} alt="main-img" />
                <h3>Houses</h3>
                {this.props.houses && this.props.houses.map(house => {
                    return (
                        <HouseCard
                            key={house.id}
                            id={house.id}
                            name={house.name}
                            region={house.region}
                            words={house.words}
                            characters={house.characters}
                        />
                    )
                })

                }
            </div>
        );
    };
};

export const mapStateToProps = state => {
    return { houses: state.houses }
};

//: Esta es la buena

export const mapDispatchToProps = {getAllHouses}


//! export const mapDispatchToProps = (dispatch) => {
//!     return {
//!         getAllHouses: () => dispatch(getAllHouses())
//!     }
//! }



export default connect(mapStateToProps, mapDispatchToProps)(Houses);

