import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Exercise = ({exercise, deleteExercisee}) => {
    return (
    <tr>
        <td>{exercise.username}</td>
        <td>{exercise.description}</td>
        <td>{exercise.duration}</td>
        <td>{exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={`/update/${exercise._id}`}><i className="fas fa-user-edit" /></Link> | <a href="/" onClick={() => deleteExercisee(exercise._id)}><i className="fas fa-user-minus" style={{ color: "#4d0000" }} /></a>
        </td>
    </tr>
    )
}

const ExercisesList = () => {
    
    const [exercises, setExercises] = useState([])
    

    const didMount = () => {
        axios.get('http://localhost:5000/exercises/')
            .then(response => setExercises(response.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        didMount()
    }, [exercises])

    const deleteExercise = (id) => {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => console.log(res.data))

        // setExercises(exercises.filter(el => el.id !== id))
    }



    const exercisesList = () => {
        return (
            exercises.map(currentexercise => {
                return (
                    <Exercise exercise={currentexercise} deleteExercisee={deleteExercise} key={currentexercise._id} />
                )
            })
        )
    }
    
    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exercisesList()}
                </tbody>
            </table>
        </div>
    )
}

export default ExercisesList
