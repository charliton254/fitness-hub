import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav';
import { collection, addDoc, onSnapshot, query, where } from "firebase/firestore";
import { db } from '../firebase/config';
import Card from "../components/Card";
import moment from 'moment';
import '../Timer.css'; 
import Footer from '../components/Footer';

function Timer() {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTask] = useState ([]);
  const tasksCollectionRef = collection(db, "exercise")


  const addTask = async () => {
    await addDoc(tasksCollectionRef, {
      task: newTask,
      createdAt: moment().format("MMM Do YY"),
      timelines: [
        {
          startTime: (new Date).getTime(),
          endTime: (new Date).getTime(),
        }
      ],
      ownerID: localStorage.getItem('userId')    
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();

    setNewTask('');
  }

  useEffect(() => {
    const q = query(tasksCollectionRef, where("ownerID", "==", localStorage.getItem('userId')));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.docs.map(doc => {
        data.push({
          data: doc.data(),
          id: doc.id
        })
      });
      setTask(data);
    });
    return unsubscribe;
  },[])

  return (
    <div>
        <Nav/>
        <div className='timer-bar'>
          <h1>Fitness isn’t a goal it is a lifestyle.</h1>         
          <h2>Fitness hub provides you with a timer to help you take note of 
            the time you use on specific exercises.</h2>
        </div>
        <div className='workspace'>
          <form className="task" onSubmit={handleSubmit}>      
            <input type='text' className='add-task' name='text' id='text' placeholder='Add task here'
            onChange={(event) => {setNewTask(event.target.value);}} value={newTask} />
            <button className='add-btn' onClick={() => {
              addTask()
            }}>Add</button>
          </form>
          <ul className='cardslist'>
            {tasks.map((task) =>{
              return(
                <Card task={task.data}
                id={task.id}
                  ></Card>
              );
            })}
          </ul>
      </div>
      <Footer/>
       
    </div>
  )
}

export default Timer
