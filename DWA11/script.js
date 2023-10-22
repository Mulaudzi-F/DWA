function createStore(reducer){
    let state = 0;
    const subscribers = [];

    function getState() {
        return state
    } 

    function dispatch(action) {
        state = reducer(state, action) 
        subscribers.forEach((subscriber) => subscriber())  
    } 

    function subscribe(subscriber){
        subscribers.push(subscriber) 

        return () =>{
            const index = subscribers.indexOf(subscriber);
            if( index !== -1) {
                subscribers.splice(index, 1);
            }
        };
    } 

    return {
        getState,
        dispatch,
        subscribe,
    };
} 

function counterReducer(state, action){
    switch (action.type){
        case 'ADD':
            return state +1;
        
        case 'SUBSTRACT':
            return state -1;

        case "RESET":
            return 0;
        
        default:
            return state;
    }
} 

const counter = createStore(counterReducer) 

const unsubscribe = counter.subscribe(() =>{
    console.log('Updated state:', counter.getState() )
}) 

counter.dispatch({type: "ADD"})
counter.dispatch({type: "ADD"}) 

unsubscribe()