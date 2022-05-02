import React from 'react';


const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

const inputTextHandler = (event) => {
    setInputText(event.target.value);
};

const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, {text:inputText, completed:false, id:Math.random()*1000}]);
    setInputText("");
};

const statusHandler = (event) => {
    setStatus(event.target.value);

}
    return (
     <form className="form">
        <input 
        value={inputText}
        onChange={inputTextHandler} 
        type="text" className="todo-input" 
        />
        <button onClick={submitTodoHandler} type="submit" className="todo-button">Add</button>
        <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </select>
        </div>


     </form>



    );
}


export default Form;