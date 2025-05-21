import React from "react";
import HabitCard from "./HabitCard";
import { Container } from "react-bootstrap";
import { useHabits } from "../context/HabitsContext";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const HabitList = () => {
  const { habits, deleteHabit, startEditHabit } = useHabits();

  return (
    <Container>
      <h2 className="text-center my-4">Your Habits</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
            <tr key={habit.id}>
              <td>{habit.name}</td>
              <td>{habit.description}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2" onClick={() => startEditHabit(habit)}><FaEdit /> </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteHabit(habit.id)}><FaTrashAlt /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default HabitList;
