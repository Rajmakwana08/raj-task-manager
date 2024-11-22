export const addTask = (task) => ({
    type: 'ADD_TASK', // ટાસ્ક ઉમેરવા માટેનું એક્શન
    payload: task // ટાસ્કનું નામ કે જે યુઝર દાખલ કરશે
  });
  
  export const removeTask = (id) => ({
    type: 'REMOVE_TASK', // ટાસ્ક ડિલીટ કરવા માટેનું એક્શન
    payload: id // ટાસ્કનો યુનિક આઈડી
  });
  
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK', // ટાસ્ક પુરું/અપૂર્ણ માર્ક કરવા માટે
    payload: id
  });
  