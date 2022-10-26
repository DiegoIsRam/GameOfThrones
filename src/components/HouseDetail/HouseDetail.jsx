import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHouse } from '../../redux/actions';
import CharacterCard from '../CharacterCard/CharacterCard';


// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
  const dispatch = useDispatch()
  
  const houseId = props.match.params.houseId 
  const house = useSelector(state => state.house)


  React.useEffect(() => {
      dispatch(getHouse(houseId))
    }, [houseId]);

    return (
        <div>
          <h3>{house.name}</h3>
          <h4>{house.region}</h4>
          <h4>{house.words}</h4>
          {house.characters && house.characters.map(char => 
            <CharacterCard 
            key={char.id}
            fullName={char.fullName}
            id={char.id}
            family={char.family}
            title={char.title}
            imageUrl={char.imageUrl}
            />
          )}
        </div>
    );
};

export default HouseDetail;