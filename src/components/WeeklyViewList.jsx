import React from "react";
import { useHabits } from "../context/HabitsContext";
import { Container } from "react-bootstrap";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeeklyViewList = () => {
  const { habits, setHabits } = useHabits();

  // Array of accomplished counts per habit
  const accomplishedCounts = habits.map(
    (habit) => Object.values(habit.status || {}).filter(Boolean).length
  );

  // Toggle status for a specific habit and day
  const handleToggle = (habitId, day) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              status: {
                ...habit.status,
                [day]: !habit.status?.[day],
              },
            }
          : habit
      )
    );
  };

  return (
    <Container className="mt-4">
      <h2>Weekly Habits</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Habit</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
            <th>Accomplished</th>
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, idx) => (
            <tr key={habit.id}>
              <td>{habit.name}</td>
              {daysOfWeek.map((day) => (
                <td
                  key={day}
                  style={{ cursor: "pointer", fontSize: "1.5rem" }}
                  onClick={() => handleToggle(habit.id, day)}
                  title="Toggle status"
                >
                  {habit.status && habit.status[day] ? "✅" : "❌"}
                </td>
              ))}
              <td>{accomplishedCounts[idx]}:
                {accomplishedCounts[idx] === 0 ? (
                  <span className="text-danger"> No accomplishments yet.</span>
                ) : accomplishedCounts[idx] === 1 ? (
                  <span className="text-warning">
                    {" "}
                    You have one accomplishment!
                  </span>
                ) : accomplishedCounts[idx] > 1 && accomplishedCounts[idx] < 5 ? (
                  <span className="text-info">
                    {" "}
                    Keep going. You're doing great!
                  </span>
                ) : accomplishedCounts[idx] >= 5 ? (
                  <span className="text-success">
                    {" "}
                    Great job on your accomplishments!
                  </span>
                ):null}
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};



export default WeeklyViewList;
