import {styles} from '../todo.styles.js';

const ToDoItems = ({todos, setTodos}) => {
    
    const deleteItem = (itemToDelete) => {
        const newTodos = todos.filter((el) =>
            el.id !== itemToDelete
        )
        setTodos(newTodos)
        localStorage.setItem('items', JSON.stringify(newTodos))
    }
    
    return (
        <div style={styles.todoContainer}>
           {todos.map((el) => {
                return (
                    <div key={el.id} style={styles.itemToDo}>
                        <input type="checkbox" name={el.name} style={styles.elChecked}/>
                        <p style={styles.textTodo}>{el.name}</p>
                        <button style={styles.deleteBtn} onClick={() => deleteItem(el.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ToDoItems