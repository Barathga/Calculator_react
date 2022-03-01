export const Reducer = (states, actions) => {
    switch (actions.type) {
      case 'Addition':
        return { ...states, count: Number(states.val1) + Number(states.val2)};
      case 'SUB':
        return { ...states, count: Number(states.val1) - Number(states.val2)};
        
      case 'MUL':
        return { ...states, count: Number(states.val1) * Number(states.val2)};    
     case 'DIV':
            return { ...states, count: Number(states.val1) / Number(states.val2)};  
      
      case 'RESET':
        return { ...states, count: 0,val1:0,val2:0 };
      default:
        return states;
    }
  };

//