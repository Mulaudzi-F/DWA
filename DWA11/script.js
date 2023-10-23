

/**
 * accepts first class function as an input 
 * it's meant to out the value of a counter when the action has dipatched
 * @param {function} reducer 
 * @returns {object}
 */

function createCounter(reducer){
    let value = 0;
    const subscribers = [];

    function getValue() {
        return value
    } 

    function dispatch(action) {
        value = reducer(value, action) 
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
        getValue,
        dispatch,
        subscribe,
    };
} 

function counterReducer(value, action){
    switch (action.type){
        case 'ADD':
            return value +1;
        
        case 'SUBSTRACT':
            return value -1;

        case "RESET":
            return 0;
        
        default:
            return value;
    }
} 

const counter = createCounter(counterReducer) 

/**
 * Output the current value when called
 * 
 */
const unsubscribe = counter.subscribe(() =>{
    console.log('counter Value=', counter.getValue() )
}) 

counter.dispatch({type: "ADD"})
counter.dispatch({type: "ADD"}) 

unsubscribe() 
console.log(counter)