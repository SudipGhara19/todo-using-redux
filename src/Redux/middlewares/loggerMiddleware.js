
// Store -> Next -> Action

export const loggerMiddleware = (store) => {
    return function(next){
        return function(action){
            //logging the action type with date
            console.log("[LOG]: "+action.type+" "+ new Date().toString());

            //pass data to the next Middleware
            next(action);

            // print/log the updated State
            console.log(store.getState());
        }
    }
}