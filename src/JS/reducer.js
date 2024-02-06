import moviesData from "./DATA";
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "./actionType";




const initialstate= {
    movies:moviesData
}
export const rootReducer=(state=initialstate,{type,payload})=>{
switch (type) {
    case ADD_PRODUCT:
        return{...state,movies:[...state.movies,payload.newProduct]}
    case EDIT_PRODUCT:
        return{...state,movies:state.movies.map(el=>el.id===payload.id?{...el,title:payload.newProduct}:el)}
    case DELETE_PRODUCT:
        return{...state,movies:state.movies.filter(el=>el.id!=payload.id)}
    default:
        console.log(state)
       return state;
}
}
