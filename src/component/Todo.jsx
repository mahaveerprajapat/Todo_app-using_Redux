import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import { useState } from "react";

export default function Todo(){
    const todos = useSelector((state)=>state.todos);
    console.log(todos);

    const  dispatch = useDispatch();

    let clickHandle = (id)=>{
            dispatch(deleteTodo(id));
    };
    let mark = (id)=>{
        dispatch(markAsDone(id));
    }
    return ( 
    <> 
        <AddForm/>
        <h2>todo list App</h2>
        
        <ul>
            {todos.map((todo)=>( 
            
                <li key={todo.id}> 
                <span style={todos.isDone ? { textDecorationLine: "line-through" } : {}}>
                    {todo.task}
                </span>
                
                    <button onClick={()=>clickHandle(todo.id)}>Delete</button>
                    <button onClick={()=>mark(todo.id)}>markAsDone</button>
                </li>  
             ))}
        </ul>
    </> 
    );
}