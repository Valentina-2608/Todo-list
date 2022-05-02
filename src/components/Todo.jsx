import React from 'react';
import { faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Todo = ({text, todo, todos, setTodos}) => {

const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));

}


const completeHandler = () => {
    setTodos(
        todos.map((elem) => {
            if (elem.id === todo.id){
                return {
                    ...elem,
                     completed: !elem.completed,
                }
            };
            return elem;
        }
    )
    )
}

    return(
        <div className="todo">
         <li className={`todo-item  ${todo.completed ? "completed" : ""}`}>{text}</li>
         <button onClick={completeHandler} className="btn-check">
         <FontAwesomeIcon icon={faCheck} />
         </button>
         <button onClick={deleteHandler} className="btn-delete">
         <FontAwesomeIcon icon={faTrash} />
         </button>
    
        
        </div>


    )
}
 

export default Todo;