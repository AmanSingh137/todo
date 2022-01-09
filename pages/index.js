import { useState } from "react";


const Index = () =>{

    const [userInput, setUserInput] = useState('');
    const [todoList, setToDoList] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setToDoList([userInput, ...todoList]);
        setUserInput('');
        document.getElementById('textField').value = '';
    }

    const handleDelete = (todo) => {
        const updatedArr = todoList.filter((todoItem) => todoList.indexOf(todoItem) != todoList.indexOf(todo));
        setToDoList(updatedArr);
    }

    return (
        <div>
            <h3>TO DO List</h3>
            <input type="text" id="textField" onChange={handleChange}/>
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {
                    todoList.length >= 1 ? todoList.map((item, index) => {
                        return <li key={index}>{item}<button onClick={(e)=>{
                            e.preventDefault()
                            handleDelete(item)
                        }}>Delete</button></li>
                    }) : 'Enter a to-do!'
                }
            </ul>
        </div>
    )
}

export default Index;