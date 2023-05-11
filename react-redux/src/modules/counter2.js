export let increase2=()=>({type:"INCREASE2"});
export let decrease2=()=>({type:"DECREASE2"});
let times2=2;
function counter2(state=times2,action){
    switch(action.type){
        case "INCREASE2":{
            return state+2;
        }
        case "DECREASE2":{
            return state-2;
        }
        default:{
            return state;
        }
    }
}
export default counter2;