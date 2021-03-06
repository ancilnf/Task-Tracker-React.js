import { useState } from 'react'



const AddTask = ({ onAdd }) => {
    const [text, setText] = useState ('')
    const [day, setDay] = useState ('')
    const [reminder, setReminder] = useState (false)

    const onSubmit= (e) => {
        e.preventDefault()

        if (!text){
            alert('Please insert task!')
            return
        }
        
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className ='add-form' onSubmit= {onSubmit}>
            <div className="form-control">
                <label htmlFor="">Tasks</label>
                <input type="text" placeholder='Add Task' value ={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className="form-control">
                <label htmlFor="">Day and time</label>
                <input type="text" placeholder='Add Day and Time' value ={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" checked={reminder} value ={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input className='btn btn-block' type="submit" value='Save Task' />

        </form>
    )
}

export default AddTask
