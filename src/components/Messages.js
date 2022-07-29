import React, {useState} from "react";
import "./Messages.css"


function Messages ({message, setMessage}) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteMessage (id) {
        let newMessage = [...message].filter(item => item.id != id)
        setMessage(newMessage)
    }

    function editMessage (id, text) {
        setEdit(id)
        setValue(text)
    }

    function saveMessage (id) {
        let newMessage = [...message].map(item => {
            if(item.id == id) {
                item.text = value
            }
            return item
        })
        setMessage(newMessage)
        setEdit(null)
    }
    return (
        <div className="unique__messages">
            {
                message.map(item => (
                    <div key={item.id} className='unique__container'>
                        {
                            edit == item.id ?
                            <div className="edit__input-of__message">
                                <input className="input__of-edit" onChange={(e) => setValue(e.target.value)} value={value}  />
                            </div>
                            :
                            <div className="edit__text-message">
                                {item.text}
                            </div>
                        }

                        {
                            edit == item.id ?
                            <div className="btn__save">
                                <button className="btn__save-text" onClick={() => saveMessage(item.id)}>Save</button>
                            </div>
                            :
                            <div className="edit__todo">
                                <button className="btn__delete" onClick={() => deleteMessage(item.id)}>Delete</button>
                                <button className="btn__edit" onClick={() => editMessage(item.id, item.text)}>Edit the message</button>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Messages;