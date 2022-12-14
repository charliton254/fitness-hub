import React, { useState } from 'react'
import { db } from '../firebase/config';
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import '../Timer.css'; 

function Card({task, id}) {
    let timelines = task.timelines;
    let editPanel;
    let buttonText = timelines[timelines.length - 1].endTime !== null ? 'Start' : 'Stop';
    const [editMode, setEditMode] = useState(false);
    const [taskName, setTaskName] = useState("");

    const deleteTask = async () => {
        await deleteDoc(doc(db, "exercise", id));
    }

    const updateTask = async(id) => {
        await updateDoc(doc(db, "exercise", id), {
            task: taskName
        });
    };

    if (editMode) {
        editPanel = <div className='edit-panel'>
            <input type='text' name='taskNameEdit' placeholder='Task Name' onChange={(event) => {
                setTaskName(event.target.value);
            }}/>
            <button className='add-btn' onClick={() => {
                updateTask(id);
                setEditMode(!editMode);
            }}>Update</button>
        </div>
    } else {
        editPanel = '';
    }

    const manageTime = async() => {
        if (timelines[timelines.length - 1].endTime !== null) {
            timelines.push({
                startTime: (new Date).getTime(),
                endTime: null
            })
            buttonText = 'Stop';
        } else {
            timelines[timelines.length - 1].endTime = (new Date).getTime()
            buttonText = 'Start';
        }
        await updateDoc(doc(db, "exercise", id), {
            timelines
        });
    }

    const getTime = () => {
        if (timelines[timelines.length - 1].endTime !== null) {
            let sec_num = 0;
            timelines.forEach(time => {
                sec_num += ((new Date(time.endTime)).getTime() - (new Date(time.startTime)).getTime()) / 1000;
            });
            var hours   = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = parseInt(sec_num, 10) - (hours * 3600) - (minutes * 60);

            if (hours   < 10) {hours   = "0"+hours;}
            if (minutes < 10) {minutes = "0"+minutes;}
            if (seconds < 10) {seconds = "0"+seconds;}
            return hours+':'+minutes+':'+seconds;
        } else {
            return 'clocked in';
        }
    }

    return(
        <div className='main-card'> 
            <div className='cardtask'> 
                {task.task}
            </div>
            <div className='cardbtns'>
                    <button className='delete'onClick={() =>{deleteTask(id);
                }}>Delete
                    </button>
                    <button className='edit' onClick={() =>{setEditMode(!editMode);
                }}>Edit</button>
                {buttonText === "Start" && (
                    <button className='start' onClick={() => manageTime()}>{buttonText}</button>
                )}
                {buttonText === "Stop" && (
                    <button className='stop' onClick={() => manageTime()}>{buttonText}</button>
                )}
                
                <div className='time-input'>
                    {getTime()}
                </div>
            </div> 
            {editPanel}
        </div>
    )
} 

export default Card
