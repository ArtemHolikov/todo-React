import { useState, useEffect } from "react";

const useTaskName = () => {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')

    
    useEffect(() => {
        const items = localStorage.getItem('items')
        if(items) {
            setTodos(JSON.parse(items));
        }
    }, [])

    return {
        todos,
        setTodos,
        task,
        setTask
    }
}

export default useTaskName