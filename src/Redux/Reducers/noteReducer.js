 import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions"
 
 const initialState = {
    notes:[
    {text:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful",
    createdOn: new Date()},
    {text:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    createdOn: new Date()},
 ],
}


 export function noteReducer(state=initialState, action){
    switch(action.type){
        case ADD_NOTE:
            return{
                ...state,
                notes:[
                    ...state.notes,
                    {
                        text: action.text,
                        createdOn: new Date()
                    }
                ]
            }
        
        case DELETE_NOTE:
            state.notes.splice(action.index, 1);
            return{
                ...state,
                notes: [...state.notes]
            }

        default: 
            return state;
    }
 }