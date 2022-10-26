import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteHouse } from '../../redux/actions';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX , JUNTO A MAP_DISPATCH_TO_PROPS! <3
export class HouseCard extends Component {

    render() {

        return (
            <div>
            <button onClick={()=>this.props.deleteHouse(this.props.id)}>X</button>
               <Link to = {`/houses/${this.props.id}`}>
                <h3>{this.props.name}</h3>
               </Link>

               
                <p>Region: {this.props.region}</p>
                <p>Words: {this.props.words}</p>
            </div>
        );
    };
};

//*Solo estamos agregando algunos comentarios de nuestro c´dogi
//:Esto no tienen nada que ver con lo de modificar el código solo es un cambio pequeño así que no debemos preocuaparnos

//*export const mapDispatchToProps = undefined;

export const mapDispatchToProps = {deleteHouse}

export default connect(null, mapDispatchToProps)(HouseCard);
