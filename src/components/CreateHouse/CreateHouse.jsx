import React from 'react';
import { useDispatch } from 'react-redux';
import { createHouse } from '../../redux/actions';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
    const [input, setInput] = React.useState({ name: "", region: "", words: "" });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createHouse(input))

    }

    // const handleDefault = (e) =>{
    //     e.preventDefault();
    // }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input name='name' value={input.name} onChange={handleChange} ></input>
                <label>Region: </label>
                <input name='region' value={input.region} onChange={handleChange}></input>
                <label>Words: </label>
                <input name='words' value={input.words} onChange={handleChange}></input>
                <button type='submit' >Create</button>
            </form>

        </div>
    );
};

export default CreateHouse;
