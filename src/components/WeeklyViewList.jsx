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

  const accomplishedCount = habits.reduce(
    (total, habit) =>
      total + Object.values(habit.status || {}).filter(Boolean).length,
    0
  );
  console.log(accomplishedCount);

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
    <Container>
      <h2>Weekly Habits</h2>
      {accomplishedCount > 3 && (
        <div className="alert alert-success">
          You have accomplished {accomplishedCount} habits this week!
        </div>
      )}
      {accomplishedCount === 0 && (
        <div className="alert alert-danger">
          You have not accomplished any habits this week. Try to stay on track!
        </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Habit</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default WeeklyViewList;
