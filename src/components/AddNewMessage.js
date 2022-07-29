import React, {useState} from "react";
import "./AddNewMessage.css"

function AddNewMessage ({ setMessage }) {
    const [value, setValue] = useState('')

    function addMessage () {
        let newMessage =
        {
            id: Date.now(),
            text: value
        }
        setMessage(prev => [...prev, newMessage])
        setValue('')
    }
    return (
        <div className="add__message">
            <input className="input__of-message" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={addMessage} className='btn__add-message'>Add a message</button>
        </div>
    )
}

export default AddNewMessage;