const initialState = {
    tasks: [] // પ્રથમ કોઈ પણ ટાસ્ક નથી
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state, // જુનો સ્ટેટ રાખો
          tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }] // નવા ટાસ્ક ઉમેરો
        };
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload) // સ્પેસિફિક ટાસ્ક હટાવો
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task // ટાસ્કની સ્થિતિ બદલવો
          )
        };
      default:
        return state; // કોઈ ફેરફાર નહીં થાય
    }
  };
  
  export default taskReducer;
  