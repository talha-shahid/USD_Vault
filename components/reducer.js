const reducer = (state, action) =>{
    switch(action.type){
        case "GET_STORIES":
            return{
                ...state,
                hits: action.payload.hits,
            }
        case "SEARCH_QUERY":
            return{
                ...state,
                search: action.payload
            }
    }
    return state
}

export default reducer;