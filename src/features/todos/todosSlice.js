import { createSlice } from '@reduxjs/toolkit';

function getIndex(arr,key){
    let l=arr.length;
    for(let i=0;i<l;i++){
        if(arr[i].time===key) return i;
    }
}
export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: ["hoeelo"],
    },
    reducers: {
        setTodos: (state,action)=>{
          state.value=action.payload;  
        },
        addTodo: (state, action) => {
            if(state?.value?.length === 0){
                state.value=[
                    {
                        todo:action.payload,
                        time:new Date().getTime()
                    }
                ]
                localStorage.setItem("todos", JSON.stringify(state.value));
                return;
            }
            state.value.push({
                todo:action.payload,
                time:new Date().getTime()
            })
            localStorage.setItem("todos", JSON.stringify(state.value));
        },
        moveUp: (state,action)=>{
            let idx=getIndex(state.value,action.payload.id);
            if(state.value.length === 1 || idx === 0) return;
            let temp=state.value[idx];
            state.value[idx]=state.value[idx-1];
            state.value[idx-1]=temp;
            localStorage.setItem("todos", JSON.stringify(state.value));
            action.payload.next();
        },
        moveDown: (state,action)=>{
            let idx=getIndex(state.value,action.payload.id);
            if(state.value.length === 1 || idx === state.value.length-1) return;
            let temp=state.value[idx];
            state.value[idx]=state.value[idx+1];
            state.value[idx+1]=temp;
            localStorage.setItem("todos", JSON.stringify(state.value));
            action.payload.next();
        },
        deleteTodo: (state,action)=>{
            let newtodos=[];
            let l=state.value.length;
            for(let i=0;i<l;i++){
                if(state.value[i].time!==action.payload) 
                newtodos.push(state.value[i]);
            }
            state.value=newtodos;
            localStorage.setItem("todos", JSON.stringify(state.value));
        }
    },
});

export const { addTodo,moveUp,moveDown,setTodos,deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;