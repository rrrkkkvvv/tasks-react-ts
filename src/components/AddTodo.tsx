import { useState, KeyboardEvent } from 'react'

import AddTodoType from '../types/AddTodotype'

export default function AddTodo({ addTodo }: AddTodoType) {

    let [addTaskVisible, setAddTaskVisible] = useState<boolean>(false)


    let [inputValue, setInputValue] = useState<string>('')

    const onKeyDownEvent = (e: KeyboardEvent): void => {
        if (e.key === 'Enter') {
            inputValue !== '' && addTodo(inputValue); setInputValue('')
        }
    }
    return (
        <section className="add-todo" >
            <button className="add-todo__show-form-button" onClick={() => setAddTaskVisible(true)}>
                <i className="bi bi-plus-lg"></i>
            </button>
            <div className="add-todo__form " style={{ display: addTaskVisible === true ? 'grid' : 'none' }}>
                <div className='form-header'>
                    <span className='form-title'>Make your task!</span>

                    <button className="close-button" type="button" onClick={() => setAddTaskVisible(false)}>
                        <i className="bi bi-x"></i>
                    </button>
                </div>

                <div className="text-input text-input--focus">
                    <input className="input" value={inputValue} onKeyDown={onKeyDownEvent} onChange={(e) => setInputValue(e.target.value)} />
                </div>
                <button className="button button--filled" type='button'

                    onClick={() => { inputValue !== '' && addTodo(inputValue); setInputValue('') }}>Add</button>
            </div>
        </section>
    )
}
