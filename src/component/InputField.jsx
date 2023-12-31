import {styles} from '../todo.styles.js';
import uuid from 'react-uuid'

const InputField = ({todos, setTodos, task, setTask}) => {

    const addItem = () => {
        if(task !== '') {
            const newItem = [...todos, {id: uuid(), name: task}]
            setTodos(newItem)
            setTask('')
            localStorage.setItem('items', JSON.stringify(newItem))
        }
    }

    return(
        <div style={styles.inputContainer}>
            <input placeholder='Enter your task you want to do' style={styles.inputField} value={task} onChange={(e) => setTask(e.target.value)} />
            <button style={styles.addBtn} onClick={addItem}>Add item</button>
        </div>
    )
}

export default InputField