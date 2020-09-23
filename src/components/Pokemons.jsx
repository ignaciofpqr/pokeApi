import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokesAction, getPokeTwenty } from '../redux/pokeDucks'

const Pokemons = () => {

    const dispatch = useDispatch()

    const pokis = useSelector(store => store.pokemons.array)

    return (
        <div>
            Pokemons list! <br/>
            <button onClick={() => dispatch(getPokesAction()) }>  Get Pokemons! </button>
            <button onClick={() => dispatch(getPokeTwenty())}> Next 20 please!</button>
            <ul>
                {
                    pokis.map(item => (
                        <li key={item.name}> {item.name} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemons
