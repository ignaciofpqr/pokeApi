import axios from 'axios';

// constates
const dataInicial = {
    array: [],
    offset: 0
}

// types
const GET_POKE_SUCCESS = 'GET_POKE_SUCCESS'
const GET_POKE_TWENTY = 'GET_POKE_TWENTY'

// reducer
export default function pokeReducer(state = dataInicial, action){
    switch (action.type){
        case GET_POKE_SUCCESS: 
            return {...state, array: action.payload}
        case GET_POKE_TWENTY:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        default: 
            return state
    }
}

// actions
export const getPokesAction = () => async (dispatch, getState) => {

    const {offset} = getState().pokemons

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPokeTwenty = () => async (dispatch, getState) => {
    
    const {offset} = getState().pokemons
    const siguiente = offset + 20

 
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch ({
            type: GET_POKE_TWENTY,
            payload: {
                array: response.data.results,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log (error)
    }
}
