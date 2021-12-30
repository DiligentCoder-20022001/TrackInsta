//reducer for shifting from home, login and sign up pages 
const initState = {
    status: 'home'
}; 

const rootReducer = (state = initState, action) => {
    if(action.type === 'login')
    {
        return {
            status : 'login'
        };
    }
    if(action.type === 'signup')
    {
        return {
            status : 'signup'
        }
    }
    return state;
}
export default rootReducer;