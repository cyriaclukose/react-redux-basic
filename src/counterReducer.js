
import { INCREMENT,INCREMENTBYVALUE,DECREMENT } from "./actionType"

function  counterReducer(state={counter:0},action){

    switch(action.type){

        case INCREMENT:
        return {counter:state.counter+1};

        case DECREMENT:
         return {counter:state.counter-1};
        case INCREMENTBYVALUE:

          console.log("value in reducer:"+action.payload.value);
        return {counter:state.counter +  Number(action.payload.value) };

        default:
            return state;
    }

   

}

export default counterReducer;
