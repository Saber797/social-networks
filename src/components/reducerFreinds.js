
const USER_FREINDS = 'USER_FREINDS'

let initialState = {
    freinds:[
        { id: 1, name: "Sasha" },
        { id: 2, name: "Petr" },
        { id: 3, name: "Vasya" },
        { id: 4, name: "Darya" },
        { id: 5, name: "Isrofil" }
    ]
}
export const reducerFreinds = (state=initialState,action)=>{
    switch(action.type){
        case USER_FREINDS:
            return{
                ...state,
                freinds:{...state.freinds}
            }

            default:
                return state
    }
}

